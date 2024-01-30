import React from "react";

const NameOfNft = () => {
  return (
    <div className="bg-[#1D1F25] flex gap-3 px-5 py-5 rounded-xl items-start">
      <img
        loading="lazy"
        srcSet="/assets/images/logo.png"
        className="aspect-square object-contain object-center w-12 self-stretch shrink-0"
        alt="NFT"
      />
      <div className="items-stretch flex flex-col whitespace-nowrap flex-1">
        <header className="text-white text-base font-bold leading-6">
          Name of nft #100
        </header>
        <div className="text-white text-sm leading-5 mt-1">
          You can switch NFT on the right
        </div>
      </div>
      <img
        loading="lazy"
        src="/assets/dashboard/Vector.svg"
        className="aspect-square object-contain object-center w-6 shrink-0"
        alt="NFT"
      />
    </div>
  );
};

export default NameOfNft;
