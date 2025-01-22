'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {useSearchParams } from 'next/navigation'; 
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

  // Effect to filter products when the category query param changes
  useEffect(() => {
    const category = searchParams.get('category');

    if (category) {
      const selectedCategories = Array.isArray(category) ? category : [category];
      const filtered = products.filter((product) =>
        selectedCategories.includes(product.category)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // Show all products if no category is selected
    }
  }, [searchParams, products]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <div key={product._id} className="border p-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
          <Link href={`/prodetails/${product._id}`}>
            <Image
              src={urlFor(product.image).width(500).height(500).url()} 
              alt={product.productName}
              className="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold text-gray-900">{product.productName}</h2>
            <p className="text-xl font-bold text-gray-700">₹ {product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
