'use client'; // Ensure the component is treated as a client-side component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type SidenavProps = {
  categories: string[];
};

const Sidenav: React.FC<SidenavProps> = ({ categories }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true); // Manage sidebar visibility
  const router = useRouter();

  // Update the URL query parameter with selected categories
  const updateCategoryQuery = (newSelectedCategories: string[]) => {
    if (newSelectedCategories.length > 0) {
      router.push(`/productpage?category=${newSelectedCategories.join(',')}`);
    } else {
      router.push('/productpage'); // Show all if no category is selected
    }
  };

  // Handle category checkbox change
  const handleCheckboxChange = (category: string) => {
    let updatedSelectedCategories = [...selectedCategories];

    if (category === 'All') {
      // If "All" is selected, reset all categories and show all products
      updatedSelectedCategories = [];
    } else {
      if (updatedSelectedCategories.includes(category)) {
        updatedSelectedCategories = updatedSelectedCategories.filter((cat) => cat !== category);
      } else {
        updatedSelectedCategories.push(category);
      }
    }

    setSelectedCategories(updatedSelectedCategories);
    updateCategoryQuery(updatedSelectedCategories);
  };

  return (
    <aside
      className={`w-full md:w-64 bg-white p-4 md:p-5 shadow-lg flex flex-col transition-all duration-300 ${isSidebarOpen ? 'block' : 'hidden md:block'}`}
    >
      {/* Hamburger menu for mobile */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="block md:hidden p-2 mb-4 text-gray-600 hover:text-black"
      >
        ☰
      </button>

      <h2 className="text-lg font-bold mb-4">Categories</h2>

      <ul className="mt-2 space-y-2 bg-gray-100 p-4 rounded-md overflow-y-auto flex-grow">
        {/* "All" category */}
        <li className="flex items-center justify-start">
          <input
            type="checkbox"
            id="category-All"
            checked={selectedCategories.length === 0}
            onChange={() => handleCheckboxChange('All')}
            className="mr-2"
          />
          <label htmlFor="category-All" className="text-sm">All</label>
        </li>

        {/* Other categories */}
        {categories.map((category, index) => (
          <li key={index} className="flex items-center justify-start">
            <input
              type="checkbox"
              id={`category-${category}`}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCheckboxChange(category)}
              className="mr-2"
            />
            <label htmlFor={`category-${category}`} className="text-sm">{category}</label>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidenav;
