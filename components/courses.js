"use client";
import React, { useState } from "react";
import Image from "next/image";
import ReactImage from "../asset/courses/react.jpg";
import Python from "../asset/courses/python.jpg";
import Link from "next/link";
// Comment out or remove the problematic import
import Data from "../asset/courses/dataS.jpg";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const courseData = [
  {
    id: 1,
    title: "Introduction to React",
    category: "Web Development",
    description: "Learn the basics of React.js",
    price: 49.99,
    image: ReactImage,
    rating: 4.5, // Add rating to each course
  },
  {
    id: 2,
    title: "Python for Beginners",
    category: "Programming",
    description: "Start your Python journey here",
    price: 39.99,
    image: Python,
    rating: 4.5, // Add rating to each course
  },
  {
    id: 3,
    title: "Data Science Fundamentals",
    category: "Data Science",
    description: "Explore the world of data",
    price: 59.99,
    // Update this line to use a placeholder image or remove the image property
    image: Data,
    // image: "/placeholder-image.jpg", // Use a placeholder image
    rating: 4.5, // Add rating to each course
  },
  // Add more courses as needed
];

export default function Courses() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web Development", "Programming", "Data Science"];

  const filteredCourses =
    filter === "All"
      ? courseData
      : courseData.filter((course) => course.category === filter);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="container mx-auto px-32 py-10 gap-4 ">
      <h1 className="text-5xl lg:text-6xl font-bold text-center mb-8">
        Our <span className="text-yellow-300"> Courses</span>{" "}
      </h1>

      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded ${
              filter === category
                ? "bg-yellow-300 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={course.image}
              alt={course.title}
              width={100}
              height={100}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-2">{course.description}</p>
              <div className="flex items-center mb-2">
                {renderStars(course.rating)}
                <span className="ml-2 text-gray-600">
                  ({course.rating.toFixed(1)})
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${course.price}</span>
                <Link href="/coursedetail">
                  <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
