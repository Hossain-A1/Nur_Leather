"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaMoneyBill } from "react-icons/fa";
import { RiEBike2Fill } from "react-icons/ri";
import { FaCarSide } from "react-icons/fa";
import { FaSync } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Loading from "@/components/ui/Loading";
import { addToCart } from "@/redux/feature/cart/cartSlice";
import { useDispatch } from "react-redux";
import useFetch from "@/hooks/useFetch";
import CurrencyFormatter from "@/components/ui/CurrencyFormatter";
import Error from "@/components/ui/Error";

export default function ProductDetailsPage({ params }) {
  const { data: product ,isLoading,error} = useFetch(`/api/products/${params.id}`);

  console.log(product);

  const dispatch = useDispatch();

  
  let whatsappNumber = "+8801848375505";
  let contactNumber = "01797393925";

  const [currentQuantity, setCurrentQuantity] = useState(1);

  return (
    <div className='container sp mt-10 space-y-5 lg:space-y-10 '>
     {
      product &&(
        <div>
        <div className='flex items-center justify-center'>
          {isLoading && <Loading />}
          {error && (
            <div>
              <Error error={error.message} />
              <h2>Check your internet connection or refesh!</h2>
            </div>
          )}
        </div>
        <div className='flex flex-col xl:flex-row gap-6  shadow-md'>
          <div className=' flex flex-col md:flex-row'>
            {/* Left Section - Image */}
            <figure className='md:h-[25rem]  p-4 '>
              <Image
                src={product.images[0]}
                alt={product.title}
                width={500}
                height={500}
                className='w-full h-full overflow-hidden'
              />
              <div className='flex space-x-2 mt-4'>
                {/* Thumbnail Images */}
                {product.images.map((thumb, index) => (
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
            </figure>
  
            {/* mid Section - Details */}
            <div className='md:w-1/2 p-4'>
              <h1 className='text-2xl font-bold border-b'>{product.title}</h1>
              <div className='flex justify-between items-center border-b pb-3'>
                <div className='text-xl flex gap-3 text-gray-500'>
                  <del> <CurrencyFormatter amount={product.price}/></del>
                  <span className='text-2xl text-red font-semibold'>
                  <CurrencyFormatter amount={product.price}/>
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
                    className='w-12 text-center font-bold outline-none border-none '
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
                >
                  <h3> অর্ডার করুন</h3>
                </Button>
  
                <Button
                  size='full'
                  href='/cart'
                  variant='danger'
                  className='w-full py-2 bg-red-500  font-bold mt-2 bg-red'
                  onClick={() => dispatch(addToCart)}
                >
                  Add to cart
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
  
          <div  className="flex xl:flex-col gap-6 items-center justify-center">
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
  
          <div className='space-y-5 mt-5'>
            <div className='flex gap-5'>
              <em>Material: Orginal Leather.</em>
              <em>warranty : 2 years replacement warranty</em>
              <em> Brand : Run Leather. </em>
              <em> Model : LW-09</em>
            </div>
            <div className='flex flex-col gap-5'>
              <em>Made in : Bangladesh.</em>
              <em>Size : Height 20 cmX Length 11 CmX Width 3</em>
              <em>Color : As Like Picture </em>
              <em>Type : Long Wallet & Purse. </em>
              <p>
                Nice Look and Durable Wallet, Great gift for favourite person !!
              </p>
            </div>
          </div>
        </div>
  
        </div>
      )
     }
   
      

      

      {/* <div className='related-product  shadow-md'>
        <h2 className='text-start mb-4'>Related products</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {products.map((product) => (
            <div key={product.id} className='border '>
              <Image
                src={product.imgSrc}
                alt={product.description}
                width={500}
                height={500}
                objectFit='cover'
                className='mb-4'
              />
              <div className='p-2'>
                <p className='text-sm whitespace-nowrap'>
                  {product.description.substring(0, 15)}...
                </p>
                <p className='text-sm hidden '>{product.description}...</p>
                <div className='flex items-center justify-between mt-2'>
                  <span className='line-through text-gray-500'>
                    {product.oldPrice}
                  </span>
                  <span className='text-red-600'>{product.newPrice}</span>
                </div>
              </div>
              <Button
                href='/checkout'
                size='full'
                variant='secondary'
                className='mt-2 bg-orange-500 text-dark py-2 px-4 rounded'
              >
                <h6 className='text-sm md:text-xl'> অর্ডার করুন</h6>
              </Button>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
