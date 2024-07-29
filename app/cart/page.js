"use client";
import Button from "@/components/ui/Button";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function CartPage() {
  const [shipping, setShipping] = useState(70);
  console.log(shipping);
  const price = 1390;

  const handleShippingChange = (e) => {
    setShipping(Number(e.target.value));
  };

  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div className='flex justify-center sp container  mt-20'>
      <div className='w-full  bg-white rounded-lg shadow-md p-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='p-4 border rounded-lg'>
            <div className='bg-orange text-center py-2 rounded-lg mb-4'>
              <span className=' text-light'>
                Please fill up the form to complete the Order
              </span>
            </div>
            <form className='space-y-4'>
              <div>
                <label className='block text-sm font-medium'>Your Name</label>
                <input
                  type='text'
                  className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange focus:border-orange'
                  placeholder='Name'
                />
              </div>
              <div>
                <label className='block text-sm font-medium'>Address</label>
                <input
                  type='text'
                  className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange focus:border-orange
                  '
                  placeholder='Address'
                />
              </div>
              <div>
                <label className='block text-sm  font-medium'>Mobile</label>
                <div className='flex items-center justify-center '>
                  <span className='  py-2 px-3 rounded-l-md border border-gray-300 bg-gray-50 text-gray-500 text-sm'>
                    +88
                  </span>
                  <input
                    type='text'
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-orange focus:border-orange'
                    placeholder='Your Mobile Please'
                  />
                </div>
              </div>
              <div>
                <label className='block text-sm font-medium'>
                  Shipping Charge:
                </label>
                <div className='mt-2 space-y-2'>
                  <div className='flex items-center'>
                    <input
                      id='inside-dhaka'
                      name='shipping'
                      type='radio'
                      value='70'
                      checked={shipping === 70}
                      onChange={handleShippingChange}
                      className='focus:ring-orange-500 h-4 w-4 text-orange border-gray-300'
                    />
                    <label
                      htmlFor='inside-dhaka'
                      className='ml-3 block text-sm font-medium text-gray-700'
                    >
                      Inside Dhaka - 70 ৳
                    </label>
                  </div>
                  <div className='flex items-center'>
                    <input
                      id='outside-dhaka'
                      name='shipping'
                      type='radio'
                      value='130'
                      checked={shipping === 130}
                      onChange={handleShippingChange}
                      className='focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300'
                    />
                    <label
                      htmlFor='outside-dhaka'
                      className='ml-3 block text-sm font-medium text-gray-700'
                    >
                      Outside Dhaka - 130 ৳
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <Button href='/confirm-order' variant='secondary_btn'>
                  Confirm Order
                </Button>
              </div>
            </form>
          </div>
          <div className='p-4 border rounded-lg'>
            <div className='font-semibold text-xl text-dark border-b  text-center py-2 rounded-lg mb-4'>
              Your Orders
            </div>
            <div className='flex items-center justify-between mb-4'>
              <img
                src='/path/to/image.jpg'
                alt='Product'
                className='w-20 h-20 object-cover rounded'
              />
              <div className='flex-1 ml-4'>
                <h2 className='text-lg font-medium'>
                  Men's Genuine Leather Loafer LF-119
                </h2>
                <p className='text-red-500 font-medium'>৳ 1390</p>
                <div className='flex items-center mt-2 '>
                  <button className='py-1.5 px-4 bg-dark/10 focus:bg-green focus:text-light eq border font-bold text-xl'>
                    -
                  </button>
                  <input
                    type='text'
                    value='1'
                    className='w-12 text-center font-bold outline-none border-none '
                    readOnly
                  />
                  <button className='py-1.5 px-4 bg-dark/10 focus:bg-green focus:text-light eq border font-bold text-xl'>
                    +
                  </button>
                  <button className='ml-4 text-red'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className='border-t space-y-5'>
              <div className='flex justify-between'>
                <span>Subtotal:</span>
                <span>৳ {price}</span>
              </div>
              <div className='flex justify-between'>
                <span>Delivery charge:</span>
                <span className='text-red'>৳ {shipping}</span>
              </div>
              <div className='flex justify-between font-medium'>
                <span>Total:</span>
                <span>৳ {price + shipping}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
