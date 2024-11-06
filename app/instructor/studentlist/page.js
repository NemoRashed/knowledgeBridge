"use client";

import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    id: "1",
    name: "Emma Thompson",
    email: "emma.t@example.com",
    course: "Web Development",
    level: "Intermediate",
    percentage: 85,
  },
  {
    id: "2",
    name: "Liam Johnson",
    email: "liam.j@example.com",
    course: "Data Science",
    level: "Advanced",
    percentage: 92,
  },
  {
    id: "3",
    name: "Olivia Davis",
    email: "olivia.d@example.com",
    course: "UX Design",
    level: "Beginner",
    percentage: 78,
  },
  {
    id: "4",
    name: "Noah Wilson",
    email: "noah.w@example.com",
    course: "Mobile App Development",
    level: "Intermediate",
    percentage: 88,
  },
  {
    id: "5",
    name: "Ava Brown",
    email: "ava.b@example.com",
    course: "Artificial Intelligence",
    level: "Advanced",
    percentage: 95,
  },
  {
    id: "6",
    name: "Ethan Taylor",
    email: "ethan.t@example.com",
    course: "Cybersecurity",
    level: "Intermediate",
    percentage: 82,
  },
  {
    id: "7",
    name: "Sophia Anderson",
    email: "sophia.a@example.com",
    course: "Cloud Computing",
    level: "Beginner",
    percentage: 75,
  },
  {
    id: "8",
    name: "Mason Martinez",
    email: "mason.m@example.com",
    course: "Blockchain",
    level: "Advanced",
    percentage: 91,
  },
  {
    id: "9",
    name: "Isabella Lopez",
    email: "isabella.l@example.com",
    course: "Digital Marketing",
    level: "Intermediate",
    percentage: 87,
  },
  {
    id: "10",
    name: "William Lee",
    email: "william.l@example.com",
    course: "Game Development",
    level: "Beginner",
    percentage: 79,
  },
];

const columns = [
  {
    accessorKey: "id",
    header: "No",
    cell: ({ row }) => <div className="text-center">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "course",
    header: "Course",
    cell: ({ row }) => <div>{row.getValue("course")}</div>,
  },
  {
    accessorKey: "level",
    header: "Level",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("level")}</div>
    ),
  },
  {
    accessorKey: "percentage",
    header: "Percentage",
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("percentage")}%</div>
    ),
  },
];

export default function StudentTable() {
  const [sorting, setSorting] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnVisibility,
      globalFilter,
    },
  });

  return (
    <div className="w-full">
      <h1 className="text-xl font-bold mb-4">Student List</h1>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter students..."
          value={globalFilter ?? ""}
          onChange={(event) => setGlobalFilter(String(event.target.value))}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
