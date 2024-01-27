import React from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

const NameDropDown = () => {
  return (
    <div className="w-full flex items-center flex-row justify-between">
      <div className="flex items-center flex-row">
        <div>
          <Image
            src="/assets/logo-porsche.png"
            height={60}
            width={60}
            alt="logo"
            // className="sm:h-[40px] sm:w-[40px] h-[40px] w-[30px]"
          />
        </div>
        <div className="mf:mx-10 mx-3 flex flex-col gap-4">
          <h1 className="mf:text-5xl sm:text-3xl text-base text-slate-50">
            Porsche Tagra-4
          </h1>
          <p className="text-gray-500">Coupe Type</p>
        </div>
        <div className="h-[80px]">
          <div className="rounded-full bg-[#2a2b2d] cursor-pointer h-[50px] w-[50px] flex items-center justify-center">
            <button className="text-white text-sm mf:text-2xl  ">
              <MdKeyboardArrowDown />
            </button>
          </div>
        </div>
      </div>

      <div className="sm:flex hidden flex-col gap-2">
        <h1 className="text-5xl text-slate-50">$150.000</h1>
        <h3 className="text-gray-400">+$445.8900 Fees</h3>
      </div>
    </div>
  );
};

export default NameDropDown;
