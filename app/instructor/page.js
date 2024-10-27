"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Users, DollarSign, BookOpen } from "lucide-react";

// Dummy data for charts
const courseData = [
  { name: "React Basics", students: 150 },
  { name: "Advanced JavaScript", students: 120 },
  { name: "Node.js Fundamentals", students: 100 },
  { name: "Python for Beginners", students: 200 },
  { name: "Data Science with R", students: 80 },
];

const monthlyRevenueData = [
  { name: "January", value: 4000 },
  { name: "February", value: 3000 },
  { name: "March", value: 2000 },
  { name: "April", value: 2780 },
  { name: "May", value: 1890 },
  { name: "June", value: 2390 },
];

const COLORS = [
  "#22c55e",
  "#eab308",
  "#3b82f6",
  "#ef4444",
  "#a855f7",
  "#ec4899",
];

export default function AdminDashboard() {
  const totalStudents = courseData.reduce(
    (sum, course) => sum + course.students,
    0
  );
  const totalRevenue = monthlyRevenueData.reduce(
    (sum, month) => sum + month.value,
    0
  );
  const totalCourses = courseData.length;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Three Counter Cards in One Row */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Students
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStudents}</div>
            <p className="text-xs text-muted-foreground">Across all courses</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalRevenue.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Year to date</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCourses}</div>
            <p className="text-xs text-muted-foreground">Active courses</p>
          </CardContent>
        </Card>
      </div>

      {/* Bar Chart for Courses and Students */}
      <div className="flex gap-10">
        <Card className="mb-8 w-1/2">
          <CardHeader>
            <CardTitle>Course Enrollment</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                students: {
                  label: "Students",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[300px] w-96"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={courseData} layout="horizontal">
                  <XAxis dataKey="name" type="category" width={150} />
                  <YAxis type="number" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="students" radius={[0, 4, 4, 0]}>
                    {courseData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index % 2 === 0 ? "#22c55e" : "#eab308"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Pie Chart for Monthly Revenue */}
        <Card className="h-96">
          <CardHeader>
            <CardTitle>Monthly Revenue Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: {
                  label: "Revenue",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[300px] w-96"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={monthlyRevenueData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label={(entry) => `$${entry.value}`}
                  >
                    {monthlyRevenueData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
