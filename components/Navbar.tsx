"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="w-full bg-primary pe-2  mf:px-4 py-4 fixed top-0 z-50">
      <div className="flex items-stretch justify-between gap-5 max-md:flex-wrap">
        <div className="flex items-center sm:items-stretch justify-between gap-3 sm:gap-5 px-5">
          {!openMenu ? (
            <button
              onClick={() => setOpenMenu(true)}
              className="text-slate-300 mf:hidden transition-transform duration-300 transform hover:scale-105 focus:outline-none"
            >
              <GiHamburgerMenu className="h-[25px] w-[25px]" />
            </button>
          ) : (
            <button
              onClick={() => setOpenMenu(false)}
              className="text-slate-300 mf:hidden transition-transform duration-300 transform hover:scale-105 focus:outline-none"
            >
              <MdOutlineClose className="h-[30px] w-[30px]" />
            </button>
          )}

          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
            className="aspect-[1.04] object-contain object-center sm:w-[55px] w-[30px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-zinc-50 sm:text-3xl text-lg font-bold leading-10 grow shrink basis-auto my-auto">
            Hulk Cars
          </div>
        </div>

        <div className="mf:flex hidden justify-between gap-5 self-start items-start max-md:max-w-full max-md:flex-wrap">
          <div className="items-stretch flex justify-between gap-5 px-5">
            <div className="text-zinc-50 text-base font-semibold leading-6 whitespace-nowrap justify-center items-stretch border border-[color:var(--Dark-Stroke,#424242)] px-6 py-3 rounded-[51px] border-solid max-md:px-5">
              Mint NFT
            </div>
            <div className="text-zinc-500 text-base font-semibold leading-6 my-auto">
              Dashboard
            </div>
          </div>
          <div className="justify-end items-stretch flex gap-3 max-md:max-w-full max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3cb1aebb1de66a1ab60ce5d64cbd6e89da861ed1822ce0d975c09b884925440?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
              className="aspect-[2.04] object-contain object-center w-[85px] overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="justify-end items-center flex gap-1.5 px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3304ccba81d19370183f78a23442ea6be02f520d30ba1ce2dd7598941b95cf86?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
                className="aspect-square object-contain object-center w-11 overflow-hidden self-stretch shrink-0 max-w-full my-auto"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ac508b25fb9e98a12ab37b37daf72a0695b4d7590548f786316e59d9fcdd823?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
                className="aspect-square object-contain object-center w-11 overflow-hidden self-stretch shrink-0 max-w-full my-auto"
              />
              <div className="justify-between items-stretch bg-zinc-50 self-stretch flex gap-2 px-6 py-3 rounded-[51px] max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1550055fbae609e16280a87fd2fbd1f6cb68ac608377c54f7130fc7da0b651f?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-neutral-900 text-base font-medium leading-6 grow whitespace-nowrap self-start">
                  Connect Wallet
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3e8dd4c15a002b04d48698f43f15bf907ed7f5cba7628003beb1283e321f8f8?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
                className="aspect-square object-contain object-center w-11 overflow-hidden self-stretch shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}

        <div className="mf:hidden justify-between items-center bg-zinc-50 flex gap-1 mf:px-6 px-2 py-2 rounded-[51px] ">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1550055fbae609e16280a87fd2fbd1f6cb68ac608377c54f7130fc7da0b651f?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-neutral-900 text-xs font-normal leading-6  whitespace-nowrap self-start">
            Connect Wallet
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="mf:hidden flex flex-col justify-center text-white my-3 py-3  absolute left-0 z-10 right-0 bg-primary h-screen">
          <div className="flex flex-col justify-center  gap-5 px-5">
            <div className="text-zinc-50 w-fit text-base font-semibold leading-6 whitespace-nowrap justify-center items-stretch border border-[color:var(--Dark-Stroke,#424242)] px-6 py-3 rounded-[51px] border-solid max-md:px-5">
              Mint NFT
            </div>
            <div className="text-zinc-50 w-fit text-base font-semibold leading-6 whitespace-nowrap justify-center items-stretch border border-[color:var(--Dark-Stroke,#424242)] px-6 py-3 rounded-[51px] border-solid max-md:px-5">
              Dashboard
            </div>
            <div className="flex items-center gap-3">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3304ccba81d19370183f78a23442ea6be02f520d30ba1ce2dd7598941b95cf86?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
                className="aspect-square object-contain object-center w-11 overflow-hidden self-stretch shrink-0 max-w-full my-auto"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ac508b25fb9e98a12ab37b37daf72a0695b4d7590548f786316e59d9fcdd823?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
                className="aspect-square object-contain object-center w-11 overflow-hidden self-stretch shrink-0 max-w-full my-auto"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3e8dd4c15a002b04d48698f43f15bf907ed7f5cba7628003beb1283e321f8f8?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
                className="aspect-square object-contain object-center w-11 overflow-hidden self-stretch shrink-0 max-w-full my-auto"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3cb1aebb1de66a1ab60ce5d64cbd6e89da861ed1822ce0d975c09b884925440?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
                className="aspect-[2.04] object-contain object-center w-[85px] overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
