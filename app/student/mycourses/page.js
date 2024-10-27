import React from "react";
import Image from "next/image";
import Link from "next/link";
import Ai from "@/asset/blog/ai.jpg";

// Sample course data (you would typically fetch this from an API)
const courses = [
  {
    id: 1,
    title: "Introduction to React",
    instructor: "John Doe",
    progress: 60,
    image: Ai,
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    instructor: "Jane Smith",
    progress: 30,
    image: Ai,
  },
  {
    id: 3,
    title: "Web Design Fundamentals",
    instructor: "Alice Johnson",
    progress: 80,
    image: Ai,
  },
  {
    id: 4,
    title: "Node.js Basics",
    instructor: "Bob Wilson",
    progress: 45,
    image: Ai,
  },
];

// CourseCard component
const CourseCard = ({ id, title, instructor, progress, image }) => (
  <Link href={`/student/mycourses/coursedetail`} className="block">
    <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-2 text-sm">Instructor: {instructor}</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
          <div
            className="bg-yellow-300 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500">Progress: {progress}%</p>
      </div>
    </div>
  </Link>
);

export default function MyCourses() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center sm:text-left">
        My Courses
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}
