import React from "react";
import Image from "next/image";
import { FaTruck, FaLock, FaRegClock } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";

export default function Hero() {
  return (
    <div className='h-full md:h-[calc(100vh-5rem)] w-full sp space-y-2.5'>
      <div className='relative h-full w-full'>
        <Image
          src='https://images.pexels.com/photos/1895019/pexels-photo-1895019.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='Hero'
          width={1500}
          height={768}
          className='w-full h-full object-cover'
        />
        <div className='absolute top-0 w-full text-center text-white'>
          <h1 className='text-4xl font-bold mt-8'>FIND YOUR OWN STYLE</h1>
        </div>
      </div>
      <div className='bg-white py-6 px-4 flex flex-wrap justify-around items-center shadow-lg mt-5'>
        <div className='flex items-center space-x-2'>
          <MdLocalOffer className='w-10 h-10 text-gray-700' />
          <div>
            <p className='font-bold'>Discount</p>
            <p>Every week new sales</p>
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          <FaTruck className='w-10 h-10 text-gray-700' />
          <div>
            <p className='font-bold'>Free Delivery</p>
            <p>100% free delivery on campaign</p>
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          <FaRegClock className='w-10 h-10 text-gray-700' />
          <div>
            <p className='font-bold'>Get Support 24/7</p>
            <p>We care about your experiences</p>
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          <FaLock className='w-10 h-10 text-gray-700' />
          <div>
            <p className='font-bold'>Secure Payment</p>
            <p>100% secure payment method</p>
          </div>
        </div>
      </div>
    </div>
  );
}
