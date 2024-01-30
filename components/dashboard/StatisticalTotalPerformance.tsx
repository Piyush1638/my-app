import React from "react";

const StatisticalTotalPerformance = () => {
  return (
    <>
      <div className="dark:bg-[#1D1E21] bg-transparent p-5 rounded-2xl flex flex-col gap-y-8 h-full">
        <h2
          className="text-2xl font-bold dark:text-gray-200 text-black whitespace-nowrap"
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
              className="mt-2 text-sm dark:text-white text-black whitespace-nowrap"
              aria-label="My NFT"
            >
              My NFT
            </span>
          </div>
          <footer
            className="self-end mt-7 text-sm dark:text-lime-400 text-black"
            aria-label="NFT Counter"
          >
            3
          </footer>
        </div>
        <div className="shrink-0 mt-4 mb-3 h-px bg-gray-800" />
        <div className="flex gap-5 justify-between items-stretch ">
          <div className="flex flex-col justify-center items-stretch">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M18.2887 9.62256C18.1233 9.62256 17.9893 9.75662 17.9893 9.92197V10.0777C17.9893 10.243 18.1233 10.3771 18.2887 10.3771C18.454 10.3771 18.5881 10.243 18.5881 10.0777V9.92197C18.5881 9.75662 18.454 9.62256 18.2887 9.62256Z"
                fill="black"
              />
              <path
                d="M2.49012 15.5771L8.92418 19.2926C9.25606 19.4855 9.62801 19.5818 9.99996 19.5818C10.3718 19.5818 10.7434 19.4854 11.0747 19.2931L17.5086 15.5776C18.1742 15.1963 18.5875 14.4829 18.5875 13.7158V11.4461C18.5875 11.2807 18.4534 11.1467 18.2881 11.1467C18.1227 11.1467 17.9887 11.2807 17.9887 11.4461V13.7158C17.9887 14.2687 17.6907 14.7831 17.2101 15.0584L10.7746 18.7748C10.2968 19.0526 9.70309 19.0527 9.22438 18.7743L2.78871 15.0579C2.30902 14.7831 2.01105 14.2687 2.01105 13.7158V6.284C2.01105 5.73103 2.30902 5.21669 2.78961 4.94138L9.22512 1.22498C9.70293 0.947202 10.2966 0.947046 10.7754 1.22541L17.211 4.94181C17.6907 5.21669 17.9887 5.73103 17.9887 6.28396V8.55365C17.9887 8.719 18.1227 8.85306 18.2881 8.85306C18.4534 8.85306 18.5875 8.719 18.5875 8.55365V6.28396C18.5875 5.51681 18.1742 4.80349 17.5095 4.42263L11.0754 0.707124C10.4118 0.321577 9.58766 0.321733 8.92488 0.706694L2.49098 4.4222C1.82547 4.80349 1.41211 5.51685 1.41211 6.284V13.7158C1.41215 14.4829 1.82547 15.1962 2.49012 15.5771Z"
                fill="black"
              />
              <path
                d="M15.6575 6.56023L10.151 3.38027C10.0582 3.32637 9.94441 3.32637 9.8516 3.38027L4.34211 6.5602C4.2493 6.6141 4.19238 6.71289 4.19238 6.8207V13.1806C4.19238 13.2884 4.24926 13.3872 4.34211 13.4411L9.8516 16.621C9.89652 16.648 9.94742 16.66 10.0013 16.66C10.0522 16.66 10.1031 16.648 10.1511 16.621L15.6575 13.4411C15.7504 13.3872 15.8073 13.2884 15.8073 13.1806V6.8207C15.8072 6.71293 15.7504 6.6141 15.6575 6.56023ZM8.44125 11.4798C8.44125 11.7763 8.055 11.8901 7.89031 11.6416L6.50395 9.52461V11.4799C6.50395 11.6446 6.37219 11.7793 6.20453 11.7793C6.03984 11.7793 5.90512 11.6446 5.90512 11.4799V8.52156C5.90512 8.3898 5.99496 8.27305 6.1207 8.2341C6.24648 8.19516 6.38422 8.24605 6.45605 8.35687L7.84242 10.4738V8.52156C7.84242 8.35687 7.97719 8.22215 8.14184 8.22215C8.30652 8.22215 8.44125 8.35687 8.44125 8.52156V11.4798ZM10.8098 9.70121C10.9775 9.70121 11.1092 9.83598 11.1092 10.0006C11.1092 10.1653 10.9774 10.3 10.8098 10.3H9.63V11.4798C9.63 11.6445 9.49523 11.7792 9.33059 11.7792C9.16594 11.7792 9.03117 11.6445 9.03117 11.4798V8.52148C9.03117 8.3568 9.16594 8.22207 9.33059 8.22207H10.8098C10.9775 8.22207 11.1092 8.3568 11.1092 8.52148C11.1092 8.68617 10.9774 8.8209 10.8098 8.8209H9.63V9.70121H10.8098ZM13.795 8.82094H13.0435V11.4798C13.0435 11.6445 12.9088 11.7793 12.7441 11.7793C12.5764 11.7793 12.4446 11.6445 12.4446 11.4798V8.82094H11.6931C11.5254 8.82094 11.3937 8.68617 11.3937 8.52152C11.3937 8.35684 11.5254 8.22211 11.6931 8.22211H13.7951C13.9598 8.22211 14.0945 8.35684 14.0945 8.52152C14.0945 8.68617 13.9598 8.82094 13.795 8.82094Z"
                fill="black"
              />
            </svg>
            <span
              className="mt-2 text-sm dark:text-white text-black  whitespace-nowrap"
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
              className="mt-2 text-sm dark:text-white text-black  whitespace-nowrap"
              aria-label="My NFT"
            >
              Interest Rate
            </span>
          </div>
          <div className="self-end">
            5<span className="dark:text-white text-black ">%</span>
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
              className="mt-2 text-sm dark:text-white text-black  whitespace-nowrap"
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
