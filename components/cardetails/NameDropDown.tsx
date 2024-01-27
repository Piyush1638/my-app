"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import Dialog from "./Dialog";

const NameDropDown = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDialogVisible(!isDialogVisible);
  };
  return (
    <div className="w-full flex items-center flex-row md:justify-between justify-start">
      <div>
        <div className="flex items-center flex-row w-full">
          <div>
            <Image
              src="/assets/logo-porsche.png"
              height={60}
              width={60}
              alt="logo"
              className="sm:h-[40px] sm:w-[40px] h-[50px] w-[30px]"
            />
          </div>
          <div className="mf:mx-10 mx-3 flex flex-col gap-4">
            <h1 className="mf:text-5xl sm:text-3xl text-base text-slate-50">
              Porsche Tagra-4
            </h1>
            <p className="text-gray-500">Coupe Type</p>
          </div>
          <div className="h-[80px]">
            <div  onClick={toggleDropDown} className="rounded-full bg-[#2a2b2d] cursor-pointer h-[50px] w-[50px] flex items-center justify-center">
              <button
                className="text-white text-2xl "
              >
                <MdKeyboardArrowDown />
              </button>
            </div>
          </div>
        </div>

        {isDialogVisible && (
          <div className="md:w-1/2 px-3 shadow-2xl shadow-black  bg-primary max-h-[400px] overflow-y-auto z-10 absolute md:left-10 left-0 rounded-lg">
            <Dialog />
          </div>
        )}
      </div>

      <div className="sm:flex hidden flex-col gap-2">
        <h1 className="text-5xl text-slate-50">$150.000</h1>
        <h3 className="text-gray-400">+$445.8900 Fees</h3>
      </div>
    </div>
  );
};

export default NameDropDown;
