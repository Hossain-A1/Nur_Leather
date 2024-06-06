import Link from "next/link";
import { FaSearch } from "react-icons/fa";
export default function Navbar() {
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
      <nav className='flex  container items-center gap-20 h-full w-full'>
        <div className='logo-and-filter flex items-center justify-center gap-20'>
          <div className='leading-7'>
            <h2 className='text-blue'>Leather</h2>
            <span className='block text-right uppercase font-semibold italic'>
              Luxeris
            </span>
          </div>

          <div className='filter flex gap-5 px-2.5 items-center justify-center border '>
            <h3>=</h3>
            <p>All Categories</p>
          </div>
        </div>

        <div className='flex justify-center items-center gap-10'>
          <ul className='lg:flex origin-top justify-center items-center max-lg:bg-white  duration-700  lg:gap-10  '>
            {navContents.map((item) => (
              <li
                className='   flex justify-center font-semibold items-center text-[1rem]  capitalize'
                key={item.label}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <div className='input border relative  w-60'>
            <input
              type='search'
              placeholder='search'
              className='py-2 px-4 outline-none '
            />

            <span className='absolute right-0 h-full top-0 bottom-0   '>
              <FaSearch className='text-sm bg-blue h-full w-10 p-2.5  text-light' />
            </span>
          </div>

          <div className='cart-and-user clear-start gap-5 flex items-center'>
            <span>cart</span>
            <div>user</div>
          </div>
        </div>
      </nav>
    </header>
  );
}
