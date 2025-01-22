'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/fetch';
import Link from 'next/link';

type Product = {
  _id: string;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  image: { asset: { url: string } };
  description: string;
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProductData = async () => {
      if (id) {
        const query = `*[_id == $id][0] { 
          _id,
          productName,
          category,
          price,
          inventory,
          colors,
          status,
          image { asset -> { _id, url } },
          description
        }`;
        const productData = await sanityFetch({ query, params: { id } });
        setProduct(productData);

        const relatedQuery = `*[_type == "product" && category == $category && _id != $id][0...3] {
          _id,
          productName,
          price,
          image { asset -> { url } }
        }`;
        const relatedProductsData = await sanityFetch({ query: relatedQuery, params: { category: productData.category, id } });
        setRelatedProducts(relatedProductsData);
      }
    };

    fetchProductData();
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Handle Add to Cart button
  const handleAddToCart = () => {
    const cartItem = {
      _id: product._id,
      productName: product.productName,
      price: product.price,
      image: product.image,
      description: product.description,
      category: product.category,
      quantity: 1, // Default quantity
      color: product.colors[0], // Default color
    };

    // Get existing cart from localStorage
    const currentCart = localStorage.getItem('cart');
    let updatedCart = currentCart ? JSON.parse(currentCart) : [];

    // Check if the item already exists in the cart
    const existingProductIndex = updatedCart.findIndex(
      (item: { _id: string; color: string }) => item._id === cartItem._id && item.color === cartItem.color
    );

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].quantity += cartItem.quantity;
    } else {
      updatedCart.push(cartItem);
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('Product added to cart!');
  };

  return (
    <div className="flex flex-col md:flex-row p-6">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
        <Image
          src={product.image.asset.url}
          alt={product.productName}
          width={500}
          height={500}
          className="object-contain w-full md:w-3/4 mx-auto"
        />
      </div>

      {/* Product Details Section */}
      <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
        <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-2xl font-bold mb-6">₹ {product.price}</p>
        <div className="flex space-x-6 mb-4 flex-wrap">
          <p className="text-gray-700">In-stock: {product.inventory}</p>
          <p className="text-gray-700">Available colors: {product.colors.join(', ')}</p>
          <p className="text-gray-700">Category: {product.category}</p>
        </div>

        <button
          className="bg-black text-white py-3 px-6 rounded-md flex items-center transition-transform duration-300 transform hover:scale-105"
          onClick={handleAddToCart}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-2 13H5L3 3zm0 0l3 7h12l3-7M6 21h12" />
          </svg>
          Add To Cart
        </button>
      </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {relatedProducts.length === 0 ? (
            <p className="bg-gray-100 p-2 rounded-lg font-semibold text-gray-800">No related products found</p>
          ) : (
            relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct._id}
                className="bg-gray-100 p-4 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
              >
                <Image
                  src={relatedProduct.image.asset.url}
                  alt={relatedProduct.productName}
                  width={180}
                  height={180}
                  className="object-contain mb-4 w-full"
                />
                <h3 className="text-lg font-semibold text-gray-800 truncate">{relatedProduct.productName}</h3>
                <p className="text-lg font-bold text-gray-900 mt-2">₹ {relatedProduct.price}</p>

                <Link href={`/prodetails/${relatedProduct._id}`}>
                  <button className="mt-4 bg-black text-white py-2 px-2 rounded-md text-sm">
                    View Product
                  </button>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
