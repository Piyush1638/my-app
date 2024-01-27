import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { FaSailboat } from "react-icons/fa6";

import CarOwnerCarousel from "./CarOwnerCarousel";

const ListOfNft = () => {
  return (
    <div className="bg-[#2e2f32] flex-col rounded-tr-2xl rounded-tl-2xl w-full px-10 pb-10 pt-6 max-h-[400px]">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-slate-50 font-semibold md:text-lg text-xs">
          List of your NFT
        </h1>
        <div className="flex cursor-pointer items-center justify-center gap-2 border-2 rounded-full  border-gray-500 px-2 py-2 sm:px-3 sm:py-3">
          <FaSailboat />
          <h3 className="text-slate-50 sm:text-base text-xs">Sell your NFT</h3>
        </div>
      </div>
      <div className="mt-8">
        <CarOwnerCarousel  callFrom="List Of NFT"/>
      </div>
    </div>
  );
};

export default ListOfNft;
