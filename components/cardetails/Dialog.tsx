import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const carData = [
  {
    image: "/assets/images/lambo.png",
    alt: "car",
    height: 25,
    width: 30,
    brand: "Lamborghini",
    model: "Aventador SVJ Roadster",
    date: "14/02/2001",
    amount: "$250.00",
  },
  {
    image: "/assets/images/lambo.png",
    alt: "car",
    height: 25,
    width: 30,
    brand: "Lamborghini",
    model: "Aventador SVJ Roadster",
    date: "14/02/2001",
    amount: "$250.00",
  },
  {
    image: "/assets/images/lambo.png",
    alt: "car",
    height: 25,
    width: 30,
    brand: "Lamborghini",
    model: "Aventador SVJ Roadster",
    date: "14/02/2001",
    amount: "$250.00",
  },
  {
    image: "/assets/images/lambo.png",
    alt: "car",
    height: 25,
    width: 30,
    brand: "Lamborghini",
    model: "Aventador SVJ Roadster",
    date: "14/02/2001",
    amount: "$250.00",
  },
  {
    image: "/assets/images/lambo.png",
    alt: "car",
    height: 25,
    width: 30,
    brand: "Lamborghini",
    model: "Aventador SVJ Roadster",
    date: "14/02/2001",
    amount: "$250.00",
  },
  {
    image: "/assets/images/lambo.png",
    alt: "car",
    height: 25,
    width: 30,
    brand: "Lamborghini",
    model: "Aventador SVJ Roadster",
    date: "14/02/2001",
    amount: "$250.00",
  },
  {
    image: "/assets/images/lambo.png",
    alt: "car",
    height: 25,
    width: 30,
    brand: "Lamborghini",
    model: "Aventador SVJ Roadster",
    date: "14/02/2001",
    amount: "$250.00",
  },
];

export default function Dialog() {
  return (
    <div className="relative">
      <div className="px-3 py-5 absolute top-0">
        <h1 className="text-2xl md:font-semibold font-medium text-slate-50">Available Cars</h1>
      </div>
      <Table className="mt-16">
        <TableHeader>
          <TableRow className="">
            <TableHead className="">Car Model</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {carData.map((carData, index) => (
            <TableRow key={index} className="border-none">
              <TableCell className="font-medium">
                <div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className=" rounded-full"
                        src={carData.image}
                        alt={carData.alt}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-slate-100">
                        {carData.brand}
                      </div>
                      <div className="text-sm text-gray-500">
                        {carData.model}
                      </div>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-slate-500">{carData.date}</TableCell>
              <TableCell className="text-slate-50">{carData.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
