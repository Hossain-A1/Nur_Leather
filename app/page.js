import Hero from "@/components/Hero";
import Men from "@/components/Men";
import ShopByCategory from "@/components/ShopByCategory";
import TopSellingPro from "@/components/TopSellingPro";
import Wallet from "@/components/Wallet";
import Women from "@/components/Women";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ShopByCategory />
      <TopSellingPro />
      <Wallet />
      <Men />
      <Women />
    </main>
  );
}
