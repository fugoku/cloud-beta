"use client";
import { Dialog } from "@headlessui/react";
import mapData from "@/app/assets/map.json";
import greenifydata from "@/app/assets/greenify.json";
import Lottie from "lottie-react";

export default function Hero() {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8 z-10">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" />

        <div className="animate-fade-in-once lg:h-[67vh] absolute -z-50  left-0 top-0">
          <Lottie
            animationData={mapData}
            onComplete={() => console.log("try")}
          />
          ;
        </div>
        <div className="mx-auto max-w-2xl py-24 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              fugoku
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              BuildEasy. DeployFast.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Streamline devops and deployment process of your business
              applications, services, and databases with artificial
              intelligence.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-xs bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Marketplace<span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="animate-fade-in-once lg:h-[67vh]">
          <Lottie animationData={greenifydata} />;
        </div>
      </div>
    </>
  );
}
