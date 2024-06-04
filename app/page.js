import Hero from "@/components/Hero";
import ShopByCategory from "@/components/ShopByCategory";
import Wallet from "@/components/Wallet";
import Image from "next/image";

export default function HomePage() {
  return (
    <main >
    <Hero/>
    <ShopByCategory/>
    <Wallet/>
    </main>
  );
}
