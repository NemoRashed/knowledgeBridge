"use client";

import { useState } from "react";
import { PlusCircle, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

const exampleCourses = [
  {
    id: 1,
    number: "CS101",
    name: "Introduction to Programming",
    description: "Learn the basics of programming.",
    level: "Beginner",
    instructor: "Dr. Jane Smith",
  },
  {
    id: 2,
    number: "WD200",
    name: "Web Development Bootcamp",
    description: "Become a full-stack web developer.",
    level: "Intermediate",
    instructor: "Prof. John Doe",
  },
];

export default function CourseManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState(exampleCourses);

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Course Management</h1>
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Link href="/instructor/coursemangement/addcourse">
          {" "}
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2">
            <PlusCircle className="inline-block mr-2 h-5 w-5" />
            Add Course
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Level
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Instructor
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredCourses.map((course) => (
              <tr key={course.id}>
                <td className="px-6 py-4 whitespace-nowrap">{course.number}</td>
                <td className="px-6 py-4 whitespace-nowrap font-medium">
                  {course.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{course.level}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {course.instructor}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">
                    <Pencil className="inline-block h-5 w-5" />
                    <span className="sr-only">Edit</span>
                  </button>
                  <button
                    onClick={() => handleDeleteCourse(course.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="inline-block h-5 w-5" />
                    <span className="sr-only">Delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
