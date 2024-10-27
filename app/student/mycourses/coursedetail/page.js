"use client";
import { useState } from "react";
import {
  FaBook,
  FaLightbulb,
  FaPlay,
  FaClock,
  FaChevronDown,
} from "react-icons/fa";

export default function CourseDetail() {
  const [activeSubCategory, setActiveSubCategory] = useState(0);
  const [expandedSections, setExpandedSections] = useState({});

  const courseContent = [
    {
      title: "Introduction",
      icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      subcategories: [
        { title: "Welcome", duration: "5:00" },
        { title: "Course Overview", duration: "10:00" },
      ],
    },
    {
      title: "Basics",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253",
      subcategories: [
        { title: "Fundamentals", duration: "15:00" },
        { title: "Core Concepts", duration: "20:00" },
      ],
    },
    {
      title: "Advanced Topics",
      icon: "M19.424 11.65a8.033 8.033 0 01-3.341 3.34m0 0a8.07 8.07 0 01-4.082 1.1c-2.067 0-3.96-.78-5.411-2.047m12.834-2.393c1.941-.47 3.282-1.533 3.282-2.755 0-1.665-2.686-3.012-6-3.012s-6 1.347-6 3.012c0 .253.06.494.172.722",
      subcategories: [
        { title: "Deep Dive", duration: "25:00" },
        { title: "Case Studies", duration: "30:00" },
      ],
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-screen ">
      {/* Main content - no longer split into scrollable sections */}
      <div className="w-full lg:w-3/4 flex flex-col h-screen ">
        {/* Video section - centered content with significantly increased height */}
        <div className="h-3/4 flex flex-col mr-20 justify-center">
          <h2 className="text-2xl font-bold mb-4">Course Video</h2>
          <div className="h-full w-full max-w-5xl">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Description section - no longer scrollable */}
        <div className="h-1/2 p-4 mr-20">
          <div className="max-w-full">
            <h2 className="text-2xl font-bold mb-4">Course Description</h2>
            <p className="text-gray-700">
              This is a detailed description of the course. It covers the main
              topics, learning objectives, and what students can expect to gain
              from the course.
            </p>
            {/* Add more content here */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-2">Course Objectives</h3>
              <ul className="list-disc list-inside">
                <li>Objective 1</li>
                <li>Objective 2</li>
                <li>Objective 3</li>
              </ul>
            </div>
            {/* ... more content ... */}
          </div>
        </div>
      </div>

      {/* Course content sidebar - fixed */}
      <div className="w-full lg:w-1/4 p-4 lg:fixed lg:right-0 lg:top-0 lg:bottom-0 lg:overflow-y-auto bg-white border-l border-gray-200 shadow-sm mt-24 mr-5">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <FaBook className="mr-2 text-green-600" />
          Course Content
        </h2>
        {courseContent.map((section, index) => (
          <div key={index} className="mb-6">
            <div
              className="flex items-center justify-between cursor-pointer bg-gray-100 p-3 rounded-lg"
              onClick={() =>
                setExpandedSections((prev) => ({
                  ...prev,
                  [index]: !prev[index],
                }))
              }
            >
              <div className="flex items-center">
                <FaLightbulb className="w-5 h-5 mr-3 text-green-600" />
                <h3 className="text-lg font-semibold">{section.title}</h3>
              </div>
              <FaChevronDown
                className={`w-5 h-5 transition-transform text-green-600 ${
                  expandedSections[index] ? "transform rotate-180" : ""
                }`}
              />
            </div>
            {expandedSections[index] && (
              <ul className="mt-2 ml-8 space-y-2">
                {section.subcategories.map((subcat, subIndex) => (
                  <li
                    key={subIndex}
                    className={`cursor-pointer p-2 rounded-md flex items-center justify-between ${
                      activeSubCategory === subIndex
                        ? "bg-green-100 text-green-700"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveSubCategory(subIndex)}
                  >
                    <div className="flex items-center">
                      <FaPlay className="w-4 h-4 mr-2 text-green-600" />
                      <span className="font-medium">{subcat.title}</span>
                    </div>
                    <span className="text-sm flex items-center text-gray-600">
                      <FaClock className="w-3 h-3 mr-1 text-green-600" />
                      {subcat.duration}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
