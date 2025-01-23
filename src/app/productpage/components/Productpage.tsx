'use client';

import React, { useEffect, useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'; 
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

type Product = {
  _id: string;
  productName: string;
  price: number;
  category: string; 
  image: { asset: { url: string } };
};

type ProductListingProps = {
  products: Product[];
};

const ProductListingPage: React.FC<ProductListingProps> = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const searchParams = useSearchParams();

  // Memoize the filtering logic
  const filteredProductsMemo = useMemo(() => {
    const category = searchParams.get('category');

    if (category) {
      const selectedCategories = Array.isArray(category) ? category : [category];
      return products.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }
    return products; // Show all products if no category is selected
  }, [searchParams, products]);

  useEffect(() => {
    setFilteredProducts(filteredProductsMemo);
  }, [filteredProductsMemo]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <div key={product._id} className="border p-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
          <Link href={`/prodetails/${product._id}`}>
            <Image
              src={urlFor(product.image).width(500).height(500).url()} 
              alt={product.productName}
              className="w-full h-64 object-cover mb-4 rounded-lg"
              width={500}  // Explicit width for Next.js Image Optimization
              height={500} // Explicit height for Next.js Image Optimization
            />
            <h2 className="text-lg font-semibold text-gray-900">{product.productName}</h2>
            <p className="text-xl font-bold text-gray-700">₹ {product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

// Wrap the existing ProductListingPage in Suspense for better handling of client-side components
const ProductListingPageWithSuspense: React.FC<ProductListingProps> = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <ProductListingPage {...props} />
  </Suspense>
);

export default ProductListingPageWithSuspense;
