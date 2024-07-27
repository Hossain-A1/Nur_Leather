"use client";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import CurrencyFormatter from "./ui/CurrencyFormatter";

export default function Wallet() {
  const products = [
    {
      id: 1,
      price: 990,
      imgSrc:
        "https://images.pexels.com/photos/20015773/pexels-photo-20015773/free-photo-of-choice-of-leather-wallets-with-embellishments.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      price: 650,
      imgSrc:
        "https://images.pexels.com/photos/20015773/pexels-photo-20015773/free-photo-of-choice-of-leather-wallets-with-embellishments.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    { id: 3, price: 750, imgSrc: "/path/to/image3.jpg" },
    { id: 4, price: 650, imgSrc: "/path/to/image4.jpg" },
    { id: 5, price: 990, imgSrc: "/path/to/image5.jpg" },
  ];

  return (
    <div className='p-4 flex max-lg:flex-wrap gap-6 container '>
      <Link href='wallet' className='mb-6 lg:w-1/2 block w-full  '>
        <h3>Wallet</h3>
        <picture className='w-full  h-80  md:h-[35rem]'>
          <Image
            src='https://images.pexels.com/photos/915915/pexels-photo-915915.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='Featured Wallet'
            width={500}
            height={500}
            className='object-fill h-full w-full'
          />
        </picture>
      </Link>
      <div className='w-full h-full '>
        <div className='w-full flex justify-end items-end mb-3'>
          <Link
            href={`/wallet`}
            className='text-blue py-1 px-2 font-semibold bg-dark/10 animate-bounce eq   rounded-md text-right'
          >
            see more
          </Link>
        </div>

        <div className='grid grid-cols-2  lg:grid-cols-3 gap-4 w-full'>
          {products.map((product) => (
            <div key={product.id} className='border rounded-lg'>
              <Link
                href={`/wallet/${product.id}`}
                className='relative block  w-full h-44 md:h-60 '
              >
                <Image
                  src={product.imgSrc}
                  alt={`Wallet ${product.id}`}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg'
                />
              </Link>
              <div className='p-2'>
                <small>Premium Quality Original Leather</small>
                <Link
                  href='/cart'
                  className='flex items-center justify-between'
                >
                  <small className='text-red font-bold'>
                    <CurrencyFormatter amount={product.price} />
                  </small>
                  <span className='bg-dark/10 hover:bg-dark/20 eq text-center p-2 rounded-md'>
                    <FiShoppingCart className='w-4 h-4  text-center text-dark font-semibold' />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
