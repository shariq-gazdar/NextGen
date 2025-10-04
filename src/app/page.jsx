import Header from "@/components/client/Header";
import Checkout from "@/components/client/Checkout";
import Contact from "@/components/server/Contact";
import Footer from "@/components/server/Footer";
import Hero from "@/components/server/Hero";
import Services from "@/components/client/Services";
import TrustedLine from "@/components/server/TrustedLine";
import WorkGallery from "@/components/server/WorkGallery";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background px-5 mx-10 border-l-gray-100 border-r-gray-100 lg:border-l-2 lg:border-r-2 py-10 border-r-0 border-l-0 scroll-smooth">
      <Header />
      <Hero />
      <TrustedLine />
      <Services />
      <WorkGallery />
      <Contact />
      <Footer />
    </main>
  );
}
