"use client";
import React from "react";
import CarOwnerCarousel from "./CarOwnerCarousel";
import { TiShoppingCart } from "react-icons/ti";


const NftCarOwner = () => {
  return (
    <div className="bg-[#2e2f32] flex-col rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl mf:rounded-bl-none  rounded-br-2xl mf:rounded-br-none w-full px-10 pb-10 pt-6 mb-10 mf:mb-0">
      <header className="flex items-center justify-between w-full">
        <h1 className="text-slate-50 font-semibold md:text-lg text-xs">
          NFT Car Owner
        </h1>
        <div className="flex items-center justify-center gap-2">
          <h3 className="text-slate-50 border rounded-full sm:text-base text-xs border-gray-500 px-2 py-2 sm:px-3 sm:py-3">
            $1500 USDT
          </h3>
          <div className="relative">
            <span className="bg-green-600 text-slate-50 px-1 text-xs rounded-full absolute top-0 right-0">2</span>
            <div className="bg-zinc-900 rounded-full h-[40px] w-[40px] flex items-center justify-center">
              <TiShoppingCart className="text-slate-50  text-2xl" />
            </div>

          </div>
        </div>
      </header>
      <div className="mt-8">
        <CarOwnerCarousel callFrom="NFT Car Owner"/>
      </div>
    </div>
  );
};

export default NftCarOwner;
