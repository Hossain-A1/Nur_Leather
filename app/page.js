import Hero from "@/components/Hero";
import Men from "@/components/Men";
import ShopByCategory from "@/components/ShopByCategory";
import Wallet from "@/components/Wallet";
import Women from "@/components/Women";
import Image from "next/image";

export default function HomePage() {
  return (
    <main >
    <Hero/>
    <ShopByCategory/>
    <Wallet/>
    <Men/>
    <Women/>
    
    </main>
  );
  
}
