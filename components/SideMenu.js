"use client";
import Link from "next/link";
import { useState } from "react";

export default function SideMenu({ setOpenSideMenu }) {
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (category) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const categories = [
    {
      name: "Loafer",
      subCategories: ["Loafer", "Sandal", "Mojari Shoes", "Loafer Shoe"],
    },
    { name: "Wallet", subCategories: ["Wallet"] },
    { name: "Belt" },
    { name: "Bag" },
    { name: "Sandel" },
    { name: "Women's" },
    { name: "Half Shoe" },
  ];

  return (
    <aside className='w-80 eq h-screen px-3 py-10 bg-light drop-shadow-md absolute left-0 top-0 z-[999]'>
      <div className='flex justify-end'>
        <button
          onClick={() => setOpenSideMenu(false)}
          className='text-xl w-10 h-10 text-center border  shadow-md rounded-full'
        >
          ❌
        </button>
      </div>
      <div className='flex flex-col justify-center w-full mt-5'>
        <h2 className='font-bold text-lg mb-4'>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.name} className='mb-2 border-b border-dark'>
              <div className='flex justify-between items-center mb-2'>
                <span className='font-semibold w-full '>{category.name}</span>
                {category.subCategories && (
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className='ml-2   w-10  text-xl font-semibold border text-center border-blue '
                  >
                    {openCategories[category.name] ? "-" : "+"}
                  </button>
                )}
              </div>
              {openCategories[category.name] && (
                <ul className='ml-4 flex flex-col gap-2'>
                  {category.subCategories.map((subCategory) => (
                    <li key={subCategory} className='text-sm'>
                      <Link href={`/${subCategory.toLowerCase()}`}>
                        {subCategory}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
