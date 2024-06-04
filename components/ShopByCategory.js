"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper/core";
import { Autoplay, Pagination } from "swiper/modules";

SwiperCore.use([Autoplay, Pagination]);

const categories = [
  {
    id: 1,
    title: "Walk With CONFIDENCE",
    name: "SANDAL",
    imageUrl: "/images/sandal.jpg",
    slug: "sandal",
  },
  {
    id: 2,
    title: "Organize Your DOCUMENTS",
    name: "BAG",
    imageUrl: "/images/bag.jpg",
    slug: "bag",
  },
  {
    id: 3,
    title: "Buckle Up IN STYLE",
    name: "BELT",
    imageUrl: "/images/belt.jpg",
    slug: "belt",
  },
  {
    id: 4,
    title: "Stay With COMPACT",
    name: "WALLET",
    imageUrl: "/images/wallet.jpg",
    slug: "wallet",
  },
  {
    id: 5,
    title: "Style With COMFORT",
    name: "LOAFER",
    imageUrl: "/images/loafer.jpg",
    slug: "loafer",
  },
  {
    id: 6,
    title: "Walk With TREND",
    name: "HALF SHOE",
    imageUrl: "/images/half_shoe.jpg",
    slug: "half-shoe",
  },
  {
    id: 6,
    title: "Walk With TREND",
    name: "HALF SHOE",
    imageUrl: "/images/half_shoe.jpg",
    slug: "half-shoe",
  },
  {
    id: 6,
    title: "Walk With TREND",
    name: "HALF SHOE",
    imageUrl: "/images/half_shoe.jpg",
    slug: "half-shoe",
  },
  {
    id: 6,
    title: "Walk With TREND",
    name: "HALF SHOE",
    imageUrl: "/images/half_shoe.jpg",
    slug: "half-shoe",
  },
  {
    id: 6,
    title: "Walk With TREND",
    name: "HALF SHOE",
    imageUrl: "/images/half_shoe.jpg",
    slug: "half-shoe",
  },
];

export default function ShopByCategory() {
  const router = useRouter();

  const handleCategoryClick = (slug) => {
    router.push(`/category/${slug}`);
  };

  return (
    <div className='container sp'>
      <h2 className='text-2xl font-bold text-orange text-center mb-8'>
        SHOP BY CATEGORY
      </h2>
      <Swiper
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1}
        breakpoints={{
          320: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 3,
          },

          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
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
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div
              className='cursor-pointer text-center rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 bg-gray-50 mb-20 '
              onClick={() => handleCategoryClick(category.slug)}
            >
              <div className='relative w-full h-48 sm:h-56'>
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-t-lg'
                />
              </div>
              <p className='mt-4 text-red-500 text-sm'>{category.title}</p>
              <h3 className='mb-4 text-lg font-bold'>{category.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
