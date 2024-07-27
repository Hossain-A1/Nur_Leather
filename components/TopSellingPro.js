"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper/core";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import CurrencyFormatter from "./ui/CurrencyFormatter";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/feature/cart/cartSlice";

SwiperCore.use([Autoplay, Pagination]);

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
  { id: 6, price: 990, imgSrc: "/path/to/image5.jpg" },
  { id: 7, price: 990, imgSrc: "/path/to/image5.jpg" },
];

export default function TopSellingPro() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleCategoryClick = (slug) => {
    router.push(`/category/${slug}`);
  };

  return (
    <div className='container '>
      <h2 className='text-2xl font-bold text-orange text-center mb-8'>
        TOP SELLING PRODUCTS
      </h2>
      <Swiper
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },

          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={30}
        loop={true}
        speed={700}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className='mySwiper'
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className='border rounded-lg mb-20'>
              <Link
                href={`/wallet/${product.id}`}
                className='relative block  w-full h-44 md:h-80 '
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
                    <FiShoppingCart
                      onClick={dispatch(addToCart)}
                      className='w-4 h-4  text-center text-dark font-semibold'
                    />
                  </span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
