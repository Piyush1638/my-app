import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div className="max-w-[200px] border-2 border-solid shadow-2xl rounded-md border-zinc-800  sm:px-5 px-2">
      <div className="flex items-center justify-center py-3 border-b-2 border-zinc-800">
        <a href="#">
          <Image
            className="rounded-t-lg"
            src="/assets/images/lambo.png"
            alt="car"
            height={30}
            width={100}
          />
        </a>
      </div>
      <div className="p-5 flex flex-col">
        <div className="flex flex-col justify-center">
          <p className="text-center  text-sm text-slate-50">
            Porsche Tagra-4
          </p>
          <p className="text-center text-sm text-slate-500">$150.00</p>
        </div>
        {/* <div className="flex items-center justify-center"> */}
        <Link
          href="/"
          className=" flex items-center justify-center border border-slate-500 rounded-md py-2 my-2 text-slate-500 "
        >
          View Car
        </Link>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Card;
