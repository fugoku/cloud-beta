import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/ui/Hero";
import Header from "@/ui/Header";
import Feature from "@/ui/Feature";
import Features2 from "@/ui/Features2";
import Footer from "@/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-white">
        <Header />
        <Hero />
        <Feature />
        <Features2 />
        <Footer />
      </div>
    </main>
  );
}
