"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Rent = {
  id: string
  date: Date
  name: string
  country: string
  interestRate: string
  tx: string
  commission: string
}

export const columns: ColumnDef<Rent>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = row.getValue("date") as Date;
      const formatted = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      });
      return <div className="font-medium">{formatted}</div>;
    },

  },
  {
    accessorKey: "name",
    header: "Name",
  
  },
  {
    accessorKey: "country",
    header: "Country",
 
  },
  {
    accessorKey: "interestRate",
    header: "Interest Rate",
  
  },
  {
    accessorKey: "tx",
    header: "Tx",

  },
  {
    accessorKey: "commission",
    header: "Commission",
  },
]
