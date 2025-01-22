"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link'; 
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo2 from '../../../public/logo2.png';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

const Navbar2 = () => {
  const [searchQuery, setSearchQuery] = useState<string>(''); 
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); 
  const [products, setProducts] = useState<Product[]>([]); 
  const [, setIsLoading] = useState<boolean>(true); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://template-03-api.vercel.app/api/products');
        const data = await response.json();

        console.log('API Response:', data);

        if (data.success && Array.isArray(data.data)) {
          setProducts(data.data);  
        } else {
          console.error("API Response did not return a valid product list:", data);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      }
    };
  
    fetchProducts();
  }, []);
  
  useEffect(() => {
    if (searchQuery === "") {
      setFilteredProducts(products); 
    } else {
      const filtered = products.filter((product) =>
        product.name?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);
  

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value); // Update search query on input change
  };

  return (
    <nav className="bg-white mb-4 max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center p-4 flex-wrap">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo2} className="h-auto w-28" alt="Nike Logo" />
        </div>

        {/* Links Section */}
        <ul className="hidden md:flex flex-row space-x-8 text-sm font-medium">
          <li>
            <Link href="/productpage" className="text-gray-900 hover:underline">
              New & Featured
            </Link>
          </li>
          <li>
            <Link href="/men" className="text-gray-900 hover:underline">
              Men
            </Link>
          </li>
          <li>
            <Link href="/women" className="text-gray-900 hover:underline">
              Women
            </Link>
          </li>
          <li>
            <Link href="/kids" className="text-gray-900 hover:underline">
              Kids
            </Link>
          </li>
          <li>
            <Link href="/sale" className="text-gray-900 hover:underline">
              Sale
            </Link>
          </li>
          <li>
            <Link href="/snkrs" className="text-gray-900 hover:underline">
              SNKRS
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-6">
          <Link href="/menu" className="text-gray-900 hover:underline">Menu</Link>
        </div>

        {/* Search and Icons Section */}
        <div className="flex items-center space-x-6 relative">
          {/* Search Bar */}
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-1">
            <SearchIcon />
            <input
              type="text"
              className="ml-2 outline-none bg-transparent border-none focus:ring-0"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          {/* Show suggestions only if there are products */}
          {searchQuery && filteredProducts.length > 0 && (
            <div className="absolute bg-white border border-gray-300 mt-2 p-2 w-48 shadow-lg z-10">
             <ul>
  {filteredProducts.map((product) => (
    <li key={product.id} className="py-1">
      <Link href={`/product/${product.id}`} className="text-sm text-gray-900 hover:underline">
        {product.name}
      </Link>
    </li>
  ))}
</ul>
            </div>
          )}

          {searchQuery && filteredProducts.length === 0 && (
            <div className="absolute bg-white border border-gray-300 mt-2 p-2 w-48 shadow-lg z-10">
              <p className="text-sm text-gray-500">No results found</p>
            </div>
          )}

          {/* Favorites Link */}
          <Link href="/favorites" aria-label="Favorites" className="text-gray-900 hover:underline">
            <FavoriteBorderIcon />
          </Link>

          {/* Cart Link */}
          <Link href="/cartpage" aria-label="Shopping Cart" className="text-gray-900 hover:underline">
            <ShoppingCartIcon />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
