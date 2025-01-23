import React from 'react';
import { ArrowDropDown as DropdownIcon } from '@mui/icons-material';
import { sanityFetch } from '@/sanity/lib/fetch';
import Sidenav from './components/Sidenav';
import Link from 'next/link';
import ProductListingPageWithSuspense from './components/Productpage';

type Product = {
  _id: string;
  productName: string;
  price: number;
  image: { asset: { url: string } };
  category: string;
};


// Fetch data inside the component using async/await
const SidebarPage = async () => {
  const query = '*[_type == "product"]';
  const products: Product[] = await sanityFetch({ query });

  const categories: string[] = Array.from(new Set(products.map((product: Product) => product.category)));

  return (
    <>
      {/* Header Section */}
      <div className="bg-white flex flex-col sm:flex-row justify-between items-center px-6 py-4 text-sm font-medium text-gray-700 mb-4 shadow-md">
        <h2 className="text-black text-lg sm:text-xl">New (500)</h2>

        <div className="flex gap-3">
          <Link href="#" className="hover:text-gray-800 flex items-center gap-2">
            Sort By
            <DropdownIcon className="ml-1" />
          </Link>
        </div>
      </div>

      {/* Main Content Section: Sidebar + Products */}
      <div className="flex flex-col sm:flex-row">
        {/* Sidebar */}
        <div className="w-full sm:w-1/4 p-4">
          <Sidenav categories={categories} />
        </div>

        {/* Product Listing */}
        <div className="w-full sm:w-3/4 p-6">
         
          <ProductListingPageWithSuspense products={products} />
        </div>
      </div>
    </>
  );
};

export default SidebarPage;
