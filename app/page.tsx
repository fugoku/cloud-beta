import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/ui/Hero";
import Header from "@/ui/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-white">
        <Header />
        <Hero />
      </div>
    </main>
  );
}
