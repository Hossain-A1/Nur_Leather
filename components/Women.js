import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

export default function Women() {
  const products = [
    { id: 1, price: 990, imgSrc: "/path/to/image1.jpg" },
    { id: 2, price: 650, imgSrc: "/path/to/image2.jpg" },
    { id: 3, price: 750, imgSrc: "/path/to/image3.jpg" },
    { id: 4, price: 650, imgSrc: "/path/to/image4.jpg" },
    { id: 5, price: 990, imgSrc: "/path/to/image5.jpg" },
  ];
  return (
    <div className='p-4 flex max-lg:flex-wrap gap-6 container '>
      <div className='mb-6 lg:w-1/2 w-full  '>
        <h3>Women</h3>
        <figure className='w-full  h-80  md:h-[35rem]'>
          <Image
            src='https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='Featured Wallet'
            width={500}
            height={500}
            className='object-fill h-full w-full'
          />
        </figure>
      </div>
      <div className='w-full h-full '>
        <div className='w-full flex justify-end items-end mb-3'>
          <Link
            href={`/wallets`}
            className='text-blue py-1 px-2 font-semibold bg-dark/10 animate-bounce eq   rounded-md text-right'
          >
            see more
          </Link>
        </div>

        <div className='grid grid-cols-2  lg:grid-cols-3 gap-4 w-full'>
          {products.map((product) => (
            <div key={product.id} className='border p-4 rounded-lg'>
              <div className='relative w-full h-32 mb-4'>
                <Image
                  src={product.imgSrc}
                  alt={`Wallet ${product.id}`}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg'
                />
              </div>
              <small>Premium Quality Original Leather</small>
              <p className='text-red-600 font-bold'>৳ {product.price}</p>
              <Link href='/cart' className='flex items-center justify-between'>
                <span>Buy</span>
                <span className='bg-dark/10 text-center p-2.5 rounded-md'>
                  <FiShoppingCart className='w-5 h-5  text-center text-dark font-semibold' />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
