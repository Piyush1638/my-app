import React from 'react'

const CarDetail = () => {
  return (
    <div className="items-stretch bg-zinc-900 flex w-full flex-col py-px rounded-xl relative my-10 lg:mt-0">
        <div className="flex flex-col px-3 py-2 -mb-16">
          <p className='font-semibold text-slate-50'>Car Detail</p>
          <p className='text-gray-400'>View More Detail</p>
        </div>
        <img
          loading="lazy"
          srcSet="\assets\dashboard\whitecar.png"
          className="aspect-[1.75] object-contain object-center w-full"
        />
        <div className="bg-black flex w-full flex-col whitespace-nowrap mt-2.5 pl-5 pr-20 py-3 rounded-xl items-start">
          <div className="text-white text-base font-bold leading-6">
            Mark of car
          </div>
          <div className="text-slate-500 text-sm leading-5 mt-1">
            Name of car model
          </div>
        </div>
      </div>
  )
}

export default CarDetail