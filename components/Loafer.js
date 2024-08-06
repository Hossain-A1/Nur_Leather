import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./ui/Button";
import CurrencyFormatter from "./ui/CurrencyFormatter";

export default function Loafer({ product }) {
  return (
   <div>
     <Link href={`/products/${product._id}`}>
      <div className='relative w-full h-60 mb-4'>
        <Image
          src={product.images[0]}
          alt={`Wallet ${product.title}`}
          layout='fill'
          objectFit='cover'
          className='rounded-lg'
        />

        <span className='absolute bg-dark text-light pr-2 pl-1 rounded-r-full'>{product.code}</span>
      </div>
      <div className='mb-4'>
        <small className="capitalize font-semibold">{product.title}</small>

        <div className='mb-4 flex  items-start gap-3'>
          <del>
            <CurrencyFormatter amount={product.price / 3 + product.price} />
          </del>
          <p className='text-red-600 font-bold'>
            <CurrencyFormatter amount={product.price} />
          </p>
        </div>

        <div>
          <Button variant='secondary' size='full' href='/cart'>
            Order Now
          </Button>
        </div>
      </div>
    </Link>
   </div>
  );
}
