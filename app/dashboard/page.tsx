import CarDetail from "@/components/dashboard/CarDetail";
import Income from "@/components/dashboard/Income";
import MyNFT from "@/components/dashboard/MyNFT";
import NameOfNft from "@/components/dashboard/NameOfNft";
import RentedCar from "@/components/dashboard/RentedCar";
import Services from "@/components/dashboard/Services";
import Weather from "@/components/dashboard/Weather";
import HistoryTable from "@/components/dashboard/table/HistoryTable";
import React from "react";

const page = () => {
  return (
    <section className="min-h-screen overflow-x-hidden mf:p-10 px-3 py-10 bg-[#141518]">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-14">
        <div className="col-span-2 flex flex-col gap-6">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div>
              <RentedCar />
            </div>
            <div className="flex flex-col h-full justify-between gap-6">
              <div>
                <NameOfNft />
              </div>
              <div>
                <Weather />
              </div>
              <div>
                <Services />
              </div>
            </div>
          </div>
          <div>
            <Income />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <CarDetail />
          </div>
          <div>
            <MyNFT />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <HistoryTable />
      </div>
    </section>
  );
};

export default page;
