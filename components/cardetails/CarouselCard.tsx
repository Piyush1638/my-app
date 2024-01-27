import React from "react";
import Image from "next/image";
import Link from "next/link";

const CarouselCard = ({ isHighlighted, callFrom }: { isHighlighted: boolean, callFrom: string }) => {
  return (
    <div
      className={`rounded-2xl my-10 ${
        isHighlighted
          ? "shadow-2xl drop-shadow-2xl scale-[1.18] relative -top-5  z-10"
          : ""
      }`}
    >
      <div className="flex flex-col justify-center py-2">
        {isHighlighted && callFrom === "NFT Car Owner" &&(
          <div className="flex items-center justify-center -mb-3 z-10">
            <div className="flex items-center justify-center bg-slate-300 h-[20px] w-[20px] rounded-full">
              <Image
                src="/assets/images/tick.png"
                alt="selected"
                height={10}
                width={10}
              />
            </div>
          </div>
        )}
        <Link href="#">
          <Image
            src="/assets/images/wheel.svg"
            alt="car"
            height={200}
            width={200}
          />
        </Link>
        <p className="text-slate-50 text-xs">Zolls spyder Roder - 1%</p>
      </div>
    </div>
  );
};

export default CarouselCard;
