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
    <section className="min-h-screen overflow-x-hidden mf:p-10 px-3 py-10 bg-primary">
        <div className="flex md:items-center lg:flex-row flex-col mt-12">
            <div className="leftDiv flex-[2] flex-col flex">
                <div className="leftUpper flex flex-col lg:items-center lg:flex-row gap-2">
                    <div className="leftUpperLeft">
                        <RentedCar/>
                    </div>
                    <div className="leftUpperRight flex flex-col gap-4">
                        <NameOfNft/>
                        <Weather/>
                        <Services/>
                    </div>
                </div>
                <div className="leftLower">
                    <Income/>
                </div>
            </div>
            <div className="rightDiv flex-[1] flex flex-col gap-6">
                <CarDetail/>
                <MyNFT/>
            </div>
        </div>
        <div className="dataTable mt-20 px-3">
             <HistoryTable/>
        </div>
    </section>
  );
};

export default page;
