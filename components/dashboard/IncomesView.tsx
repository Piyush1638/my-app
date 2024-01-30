import React from "react";

const IncomesView = ({ name }: { name: string }) => {
  return (
    <div className="bg-[#1D1E21] py-3 px-6 rounded">
      <div className="flex justify-between items-center mb-2 text-white">
        <h3 className="text-sm font-semibold">{name}</h3>
        <h4 className="text-[10px] font-medium">22 May</h4>
      </div>
      <div className="flex gap-2 justify-between items-end overflow-x-auto scrollbar-none">
        <div>
          <div className="bg-[#D9E1E7] h-16 w-10  max-md:h-10 max-md:w-6 rounded-md " />
          <h5 className="mt-3 text-[#809FB8] text-xs uppercase">JAN</h5>
        </div>
        <div>
          <div className="bg-[#D9E1E7] h-20 w-10 max-md:w-6 rounded-md " />
          <h5 className="mt-3 text-[#809FB8] text-xs uppercase">Feb</h5>
        </div>
        <div>
          <div className="bg-[#D9E1E7] h-24 w-10 max-md:w-6 rounded-md " />
          <h5 className="mt-3 text-[#809FB8] text-xs uppercase">Mar</h5>
        </div>
        <div>
          <div className="bg-[#AAFF00] h-32 w-10 max-md:w-6 rounded-md " />
          <h5 className="mt-3 text-[#809FB8] text-xs uppercase">Apr</h5>
        </div>
        <div>
          <div className="bg-[#D9E1E7] h-24 w-10 max-md:w-6 rounded-md " />
          <h5 className="mt-3 text-[#809FB8] text-xs uppercase">May</h5>
        </div>
        <div>
          <div className="bg-[#D9E1E7] h-20 w-10 max-md:w-6 rounded-md " />
          <h5 className="mt-3 text-[#809FB8] text-xs uppercase">Jun</h5>
        </div>
        <div>
          <div className="bg-[#D9E1E7] h-16 w-10  max-md:h-10 max-md:w-6 rounded-md " />
          <h5 className="mt-3 text-[#809FB8] text-xs uppercase">Jul</h5>
        </div>
      </div>
    </div>
  );
};

export default IncomesView;
