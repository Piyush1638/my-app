import React from "react";

const StatisticalTotalPerformance = () => {
  return (
    <>
      <div className="bg-[#1D1E21] p-5 rounded-2xl flex flex-col gap-y-8 h-full">
        <h2
          className="text-2xl font-bold text-gray-200 whitespace-nowrap"
          aria-label="Statistical Total Performance"
        >
          Statistical Total Performance
        </h2>
        <div className="flex gap-5 justify-between items-stretch h-full ">
          <div className="flex flex-col justify-center items-stretch">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5aff747c36ff2dd4a6a934e1c60560f97f588759fddc0fa7483e3cebc68aa129?apiKey=851b3b1857484826921ac8967993ad9f&"
              className="object-contain object-center w-5 aspect-square"
              alt="NFT"
              aria-role="img"
            />
            <span
              className="mt-2 text-sm text-white whitespace-nowrap"
              aria-label="My NFT"
            >
              My NFT
            </span>
          </div>
          <footer
            className="self-end mt-7 text-sm text-lime-400"
            aria-label="NFT Counter"
          >
            3
          </footer>
        </div>
        <div className="shrink-0 mt-4 mb-3 h-px bg-gray-800" />
        <div className="flex gap-5 justify-between items-stretch ">
          <div className="flex flex-col justify-center items-stretch">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5d5e4b06d544e90cb95d21bb369517db4626238eb42e13ac94ef38ad296cf18?apiKey=851b3b1857484826921ac8967993ad9f&"
              className="object-contain object-center w-5 aspect-square"
              alt="NFT"
              aria-role="img"
            />
            <span
              className="mt-2 text-sm text-white whitespace-nowrap"
              aria-label="My NFT"
            >
              Current Month Received
            </span>
          </div>
          <div className="self-end">
            <span className="text-white">$</span>
            <span className="text-lime-400">115</span> USDT
          </div>
        </div>
        <div className="shrink-0 mt-4 mb-3 h-px bg-gray-800" />
        <div className="flex gap-5 justify-between items-stretch ">
          <div className="flex flex-col justify-center items-stretch">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/76f1459ae3d5d0054c33946b13b6ffb24c9ece5a2de1f9de841d8bad8d2d46ee?apiKey=851b3b1857484826921ac8967993ad9f&"
              className="object-contain object-center w-5 aspect-square"
              alt="NFT"
              aria-role="img"
            />
            <span
              className="mt-2 text-sm text-white whitespace-nowrap"
              aria-label="My NFT"
            >
              Interest Rate
            </span>
          </div>
          <div className="self-end">
            5<span className="text-white">%</span>
          </div>
        </div>
        <div className="shrink-0 mt-4 mb-3 h-px bg-gray-800" />
        <div className="flex gap-5 justify-between items-stretch ">
          <div className="flex flex-col justify-center items-stretch">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec76d755b9a1f6f177ab6dab9a4aa7432bdb9e6f555f0e4754c3908a6ae92cba?apiKey=851b3b1857484826921ac8967993ad9f&"
              className="object-contain object-center w-5 aspect-square"
              alt="NFT"
              aria-role="img"
            />
            <span
              className="mt-2 text-sm text-white whitespace-nowrap"
              aria-label="My NFT"
            >
              Total Received
            </span>
          </div>
          <div className="self-end">
            <span className="text-white">$</span>
            <span className="text-lime-400">750</span> USDT
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticalTotalPerformance;
