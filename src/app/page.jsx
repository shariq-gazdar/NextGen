import Header from "@/components/client/Header";
import Checkout from "@/components/client/Checkout";
import Contact from "@/components/server/Contact";
import Footer from "@/components/server/Footer";
import Hero from "@/components/server/Hero";
import Services from "@/components/server/Services";
import TrustedLine from "@/components/server/TrustedLine";
import WorkGallery from "@/components/server/WorkGallery";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background px-1 mx-10 border-l-black border-r-black lg:border-l-2 lg:border-r-2  py-10 border-r-0 border-l-0">
      <Header />
      <Hero />
      <TrustedLine />
      <Services />
      <WorkGallery />
      <Contact />
      <Footer />
      <Checkout />
    </main>
  );
}
