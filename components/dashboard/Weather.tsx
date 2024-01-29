import React from "react";

const Weather = () => {
  return (
    <div className="items-stretch bg-neutral-800 flex w-auto lg:max-w-[421px] flex-col p-5 rounded-xl">
      <div className="justify-between items-stretch flex gap-0">
        <div className="text-white text-base font-bold leading-6 grow">
          Weather
        </div>
        <div className="items-stretch flex gap-1 self-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/43b2b711060c77f7b4e60042bbcbe49ef55aece92f5a5b452e0bba754d473288?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
            className="aspect-square object-contain object-center w-4 shrink-0 self-start"
          />
          <div className="text-slate-500 text-xs leading-4 grow whitespace-nowrap">
            Paris, France
          </div>
        </div>
      </div>
      <div className="justify-between items-stretch flex gap-4 text-xs text-white whitespace-nowrap tracking-normal mt-3 overflow-x-auto scrollbar-none">
        <WeatherCondition
          time="11 AM"
          temp="37"
          src="\assets\dashboard\sunmoon.png"
        />
        <WeatherCondition
          time="12 AM"
          temp="37"
          src="\assets\dashboard\sunmoon.png"
        />
        <WeatherCondition
          time="1 AM"
          temp="37"
          src="\assets\dashboard\sunmoon.png"
        />
        <WeatherCondition
          time="12 AM"
          temp="37"
          src="\assets\dashboard\sunmoon.png"
        />
        <WeatherCondition
          time="13 AM"
          temp="37"
          src="\assets\dashboard\sunmoon.png"
        />
        <WeatherCondition
          time="14 AM"
          temp="37"
          src="\assets\dashboard\sunmoon.png"
        />
        <WeatherCondition
          time="1 AM"
          temp="37"
          src="\assets\dashboard\sunmoon.png"
        />
      </div>
    </div>
  );
};

export default Weather;

const WeatherCondition = ({
  time,
  src,
  temp,
}: {
  time: string;
  src: string;
  temp: string;
}) => (
  <div className="items-stretch border flex flex-col py-2 rounded-[555px] border-solid border-black border-opacity-10 flex-1">
    <div className="leading-[140%] text-center">{time}</div>
    <img
      loading="lazy"
      src={src}
      className="aspect-[1.35] object-contain object-center w-[30px] sm:w-[43px] self-center mt-1"
    />
    <div className="font-bold leading-[140%] mt-1 ">
      <p className="text-center md:text-base text-xs">{temp}</p>
    </div>
  </div>
);
