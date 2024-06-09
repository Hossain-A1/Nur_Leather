"use client";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import SideMenu from "./SideMenu";

export default function Navbar() {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const navContents = [
    { href: "/", label: "home" },
    {
      href: "/shop",
      label: "shop",
    },
    {
      href: "/products",
      label: "products",
    },
    {
      href: "/about",
      label: "about",
    },
    {
      href: "/contact",
      label: "contact",
    },
  ];

  return (
    <header className='h-28 bg-light  border-b  fixed top-0 right-0 left-0 z-[900]'>
      <nav className='flex  container items-center justify-between gap-6 xl:gap-10 2xl:gap-20 h-full w-full'>
        <div className='logo-and-filter flex max-md:flex-row-reverse items-center gap-6 xl:gap-10 2xl:gap-20'>
          <div className='leading-7'>
            <h2 className='text-blue'>Nur</h2>
            <span className='block text-right uppercase font-semibold italic'>
              Luxeris
            </span>
          </div>

          <div
            onClick={() => setOpenSideMenu(true)}
            className='filter-icon eq flex gap-4 px-2 py-2 cursor-pointer items-center justify-center border border-dark '
          >
            <span>
              <GiHamburgerMenu className='font-semibold text-2xl text-dark h-full' />
            </span>
            <small className='max-md:hidden whitespace-nowrap text-[1rem]'>
              All Categories
            </small>
          </div>
        </div>

        <div className='max-lg:hidden flex justify-center items-center gap-6'>
          <ul className='flex  justify-center items-center   duration-700 md:gap-5 xl:gap-10  '>
            {navContents.map((item) => (
              <li
                className='   flex justify-center font-semibold items-center text-[1rem] xl:text-xl  capitalize'
                key={item.label}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <div className='input border relative lg:w-40 xl:w-60'>
            <input
              type='search'
              placeholder='search'
              className='py-2 px-4 outline-none border border-dark w-full '
            />

            <span className='absolute right-0 h-full top-0 bottom-0   '>
              <FaSearch className='text-sm bg-blue h-full w-10 p-2.5  text-light' />
            </span>
          </div>
        </div>

        <div className='cart-and-user clear-start gap-5 flex items-center'>
          <span>cart</span>
          <div>user</div>
        </div>
        <div>
          {openSideMenu && <SideMenu setOpenSideMenu={setOpenSideMenu} />}
        </div>
      </nav>
    </header>
  );
}
