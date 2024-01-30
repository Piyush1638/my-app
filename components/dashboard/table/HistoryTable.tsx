import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    
  ];
}

const HistoryTable = () => {
  const data = getData() as Payment[];
  return (
    <div className="">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default HistoryTable;
