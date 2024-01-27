import CarCarousel from "@/components/cardetails/CarCarousel"
import ListOfNft from "@/components/cardetails/ListOfNft"
import MonthlyRent from "@/components/cardetails/MonthlyRent"
import NameDropDown from "@/components/cardetails/NameDropDown"
import NftCarOwner from "@/components/cardetails/NftCarOwner"

const page = () => {
  return (
    <section className="min-h-screen overflow-x-hidden mf:px-10 mf:pt-10 px-3 pt-4 pb-0 bg-primary">
      <div className="sm:px-5 mb-7 mt-20">
        <p className="text-slate-500">Home {">"} Mint NFT</p>
      </div>
      <div className="flex items-center justify-between px-3 mf:p-6 ">
        <NameDropDown/>
      </div>
      <div className="relative mt-20">
        <CarCarousel/>
      </div>
      <div className="grid sm:grid-cols-2 mf:grid-cols-3 grid-cols-1 mt-20 gap-5">
        <MonthlyRent/>
        <NftCarOwner/>
        <ListOfNft/>
      </div>
      
    </section>
  )
}

export default page