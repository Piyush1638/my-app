import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ isHighlighted }: { isHighlighted: boolean }) => {
  return (
    <div className={`max-w-[220px] border-4 border-solid rounded-2xl border-zinc-800  my-10 sm:px-5 px-2 ${isHighlighted ? "shadow-2xl drop-shadow-2xl scale-[1.18] relative -top-5  z-10" : ""}`}>
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
        {isHighlighted && (
          <Link
            href="/"
            className=" flex items-center justify-center border border-slate-500 rounded-md py-2 my-2 text-slate-500 "
          >
            View Car
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
