"use client";

import Loafer from "@/components/Loafer";
import useFetch from "@/hooks/useFetch";

export default function LoaferPage() {
  const { data: products } = useFetch("/api/products");

  return (
    <main className='container sp mt-10'>
      <div className='grid grid-cols-2  lg:grid-cols-3 gap-4 w-full'>
        {products &&
          products.map((product) => (
            <div key={product._id} className='border p-4 rounded-lg'>
              <Loafer product={product} />
            </div>
          ))}
      </div>
    </main>
  );
}
