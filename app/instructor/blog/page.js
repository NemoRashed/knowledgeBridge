"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Pencil, Trash2, Plus } from "lucide-react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";

const data = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    subtitle: "A Beginner's Guide",
    description:
      "Learn the basics of Next.js and start building awesome React applications.",
    image: "/placeholder.svg?height=100&width=100",
    date: "2023-06-01",
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS",
    subtitle: "Advanced Techniques",
    description:
      "Dive deep into Tailwind CSS and learn how to create stunning designs efficiently.",
    image: "/placeholder.svg?height=100&width=100",
    date: "2023-06-15",
  },
  {
    id: "3",
    title: "React Hooks Explained",
    subtitle: "Simplifying State Management",
    description:
      "Understand React Hooks and how they can simplify your component logic.",
    image: "/placeholder.svg?height=100&width=100",
    date: "2023-07-01",
  },
];

export default function BlogManagement() {
  const [sorting, setSorting] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [blogPosts, setBlogPosts] = React.useState(data);
  const [isEditing, setIsEditing] = React.useState(false);
  const [currentPost, setCurrentPost] = React.useState(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleEdit = React.useCallback((post) => {
    setIsEditing(true);
    setCurrentPost(post);
    setIsDialogOpen(true);
  }, []);

  const handleDelete = React.useCallback(
    (id) => {
      setBlogPosts(blogPosts.filter((post) => post.id !== id));
    },
    [blogPosts]
  );

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const newPost = Object.fromEntries(formData.entries());

      if (isEditing) {
        setBlogPosts(
          blogPosts.map((post) =>
            post.id === currentPost.id ? { ...post, ...newPost } : post
          )
        );
      } else {
        setBlogPosts([
          ...blogPosts,
          { id: (blogPosts.length + 1).toString(), ...newPost },
        ]);
      }

      setIsEditing(false);
      setCurrentPost(null);
      setIsDialogOpen(false);
    },
    [blogPosts, currentPost, isEditing]
  );

  const columns = React.useMemo(
    () => [
      {
        accessorKey: "title",
        header: "Title",
      },
      {
        accessorKey: "subtitle",
        header: "Subtitle",
      },
      {
        accessorKey: "date",
        header: "Date",
        cell: ({ row }) =>
          format(new Date(row.getValue("date")), "MMM dd, yyyy"),
      },
      {
        id: "actions",
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleEdit(row.original)}
            >
              <Pencil className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleDelete(row.original.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ),
      },
    ],
    [handleEdit, handleDelete]
  );

  const table = useReactTable({
    data: blogPosts,
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
    <div className="w-full space-y-4">
      <h1 className="text-2xl font-bold">Blog Management</h1>
      <div className="flex justify-between items-center">
        <Input
          placeholder="Search blog posts..."
          value={globalFilter ?? ""}
          onChange={(event) => setGlobalFilter(String(event.target.value))}
          className="max-w-sm"
        />
        <Button
          onClick={() => {
            setIsEditing(false);
            setCurrentPost(null);
            setIsDialogOpen(true);
          }}
          className="bg-green-500"
        >
          <Plus className="mr-2 h-4 w-4" /> Add New Post
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
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
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {isEditing ? "Edit Blog Post" : "Add New Blog Post"}
            </DialogTitle>
            <DialogDescription>
              Fill in the details for your blog post. Click save when you're
              done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  defaultValue={currentPost?.title}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="subtitle" className="text-right">
                  Subtitle
                </Label>
                <Input
                  id="subtitle"
                  name="subtitle"
                  defaultValue={currentPost?.subtitle}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  defaultValue={currentPost?.description}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="image" className="text-right">
                  Image URL
                </Label>
                <Input
                  id="image"
                  name="image"
                  defaultValue={currentPost?.image}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">
                  Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !currentPost?.date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {currentPost?.date ? (
                        format(new Date(currentPost.date), "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={
                        currentPost?.date
                          ? new Date(currentPost.date)
                          : undefined
                      }
                      onSelect={(date) => {
                        const input = document.createElement("input");
                        input.type = "hidden";
                        input.name = "date";
                        input.value = date ? format(date, "yyyy-MM-dd") : "";
                        document
                          .getElementById("date")
                          .parentNode.appendChild(input);
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
