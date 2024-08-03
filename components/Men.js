"use client"
import useFetch from "@/hooks/useFetch";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import CurrencyFormatter from "./ui/CurrencyFormatter";
import Loading from "./ui/Loading";
import Error from "./ui/Error";

export default function Men() {
  const {data:products,isLoading,error} = useFetch('/api/products')
  console.log(products);
  
  return (
    <div className='p-4 flex  max-lg:flex-wrap gap-6 container '>
        <div className='flex items-center justify-center'>
        {isLoading && <Loading />}
        {error && (
          <div>
            <Error error={error.message} />
            <h2>Check your internet connection or refesh!</h2>
          </div>
        )}
      </div>
  <div>
  <Link href='/' className='mb-6 lg:w-[26rem] block w-full    '>
      <h3>Mens</h3>
      <figure className='w-full  h-80  md:h-[35rem]'>
        <Image
          src='https://images.pexels.com/photos/915915/pexels-photo-915915.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='Featured Wallet'
          width={500}
          height={500}
          className='object-fill h-full w-full'
        />
      </figure>
    </Link>
  </div>
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
        {products && products.map((product) => (
          <div key={product.id} className='border rounded-lg'>
            <Link
              href={`/products/${product._id}`}
              className='relative block  w-full h-48 md:h-60 overflow-hidden'
            >
              <Image
                src={product.images[0]}
                alt={`Wallet ${product.title}`}
                height={720}
                width={1024}
                className='rounded-lg object-fill'
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
