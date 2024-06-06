"use client";
import React from "react";
import Image from "next/image";
import { FaMoneyBill } from "react-icons/fa";
import { RiEBike2Fill } from "react-icons/ri";
import { FaCarSide } from "react-icons/fa";
import { FaSync } from "react-icons/fa";
import Button from "@/components/ui/Button";
export default function WalletDetailsPage() {
  const mainImage = "/images/wallet.jpg";
  const thumbnails = [
    "/images/thumb1.jpg",
    "/images/thumb2.jpg",
    "/images/thumb3.jpg",
    "/images/thumb4.jpg",
  ];

  let title = "Premium Quality Original Leather Classic Wallet (Code: SW-5)";
  let oldPrice = 7050;
  let newPrice = 750;
  let whatsappNumber = "+8801848375505";
  let contactNumber = "01797393925";

  const [currentQuantity, setCurrentQuantity] = React.useState(1);

  return (
    <div className='container sp mt-10 '>
      <div className='flex flex-col gap-6 lg:flex-row shadow-md'>
        <div className=' flex flex-col md:flex-row'>
          {/* Left Section - Image */}
          <picture className='md:w-1/2 p-4'>
            <Image
              src={mainImage}
              alt='Wallet'
              width={500}
              height={500}
              className='w-full'
            />
            <div className='flex space-x-2 mt-4'>
              {/* Thumbnail Images */}
              {thumbnails.map((thumb, index) => (
                <Image
                  key={index}
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  className='w-1/4 border'
                />
              ))}
            </div>
          </picture>

          {/* mid Section - Details */}
          <div className='md:w-1/2 p-4'>
            <h1 className='text-2xl font-bold border-b'>{title}</h1>
            <div className='flex justify-between items-center border-b pb-3'>
              <div className='text-xl flex gap-3 text-gray-500'>
                <del> ৳{oldPrice}</del>
                <span className='text-2xl text-red font-semibold'>
                  ৳{newPrice}
                </span>
              </div>

              {/* Quantity Selector */}
              <div className='flex items-center mt-4 border'>
                <button
                  className='py-1.5 px-4 bg-dark/10 focus:bg-green focus:text-light eq border font-bold text-xl'
                  onClick={() => setCurrentQuantity(currentQuantity - 1)}
                >
                  -
                </button>
                <input
                  type='text'
                  value={currentQuantity}
                  className='w-12 text-center font-bold '
                  readOnly
                />
                <button
                  className='py-1.5 px-4 bg-dark/10 focus:bg-green focus:text-light eq border font-bold text-xl'
                  onClick={() => setCurrentQuantity(currentQuantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            {/* Buttons */}
            <div className='mt-4 text-2xl text-light border-b pb-3 space-y-5'>
              <Button
                size='full'
                href='/cart'
                variant='secondary'
                className='w-full py-2    font-bold bg-orange'
                onClick={() => alert("Order placed!")}
              >
                <h3> অর্ডার করুন</h3>
              </Button>

              <Button
                size='full'
                href='/cart'
                variant='danger'
                className='w-full py-2 bg-red-500  font-bold mt-2 bg-red'
                onClick={() => alert("Added to cart!")}
              >
                <h3>Add to cart</h3>
              </Button>
            </div>

            {/* WhatsApp Contact */}
            <div className='mt-4 border-b pb-3'>
              <span>What'sApp:</span>

              <Button href='/' size='full'>
                <h3>{whatsappNumber}</h3>
              </Button>
            </div>

            {/* Other Contact */}
            <div className='mt-4 border-b pb-3'>
              <div className='flex items-center bg-dark/10 py-6 justify-center '>
                <span className='material-icons  text-red-500'>call</span>
                <span className='ml-2 text-4xl text-dark  font-bold'>
                  {contactNumber}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Details */}

        <div>
          <div className='p-5  border-2 border-dark border-dashed space-y-5'>
            <h5>বিকাশ নাম্বার</h5>
            <h6> (+88) 01848375503</h6>
            <h5>নগদ নাম্বার</h5>
            <h6> (+88) 01848375502</h6>
          </div>

          {/* Delivery Info */}
          <div className='mt-4 p-4 border bg-dark bg-opacity-10 rounded'>
            <div className='p-2.5 space-y-2.5'>
              <div className='flex   gap-2'>
                <span>
                  <FaMoneyBill className='text-2xl text-dark ' />
                </span>
                <em>Cash on Delivery:</em>
                <span>❌</span>
                <b className='text-red'>Unavailable</b>
              </div>
              <div className='flex  gap-2'>
                <span>
                  <RiEBike2Fill className='text-2xl text-dark ' />
                </span>
                <em>Inside City Delivery:</em>
                <span>✅</span>
                <b className='text-green'> 2-3 working days</b>
              </div>
              <div className='flex  gap-2'>
                <span>
                  <FaCarSide className='text-2xl text-dark ' />
                </span>
                <em>Outside City Delivery:</em>
                <span>✅</span>
                <b className='text-green'>3-7 working days</b>
              </div>
              <div className='flex j  gap-2'>
                <span>
                  <FaSync className='text-2xl text-dark ' />
                </span>
                <em>Refund Rules:</em>
                <span>✅</span>
                <b className='text-green'> Within 7 Days Policy</b>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* description section */}

      <div className='desc mt-10 shadow-md p-5'>
        <div>
          <h2 className='text-red text-start '>Description</h2>
          <br />
          <hr className='w-60 text-dark' />
        </div>

        <div className="space-y-5 mt-5">
          <div className='flex gap-5'>
            <em>Material: Orginal Leather.</em>
            <em>warranty : 2 years replacement warranty</em>
            <em> Brand : Run Leather. </em>
            <em> Model : LW-09</em>
          </div>
        <div className="flex flex-col gap-5">
        <em>Made in : Bangladesh.</em>
          <em>Size : Height 20 cmX Length 11 CmX Width 3</em>
          <em>Color : As Like Picture </em>
          <em>Type       : Long Wallet & Purse.  </em>
          <p>Nice Look and Durable Wallet, Great gift for favourite person !!</p>
        </div>
        </div>
      </div>
    </div>
  );
}
