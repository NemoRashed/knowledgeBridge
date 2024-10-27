import React from "react";
import {
  BookOpenIcon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export default function StudentDashboard() {
  const dashboardItems = [
    {
      name: "Courses",
      icon: BookOpenIcon,
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
    },
    {
      name: "Assignments",
      icon: ClipboardDocumentListIcon,
      bgColor: "bg-green-100",
      textColor: "text-green-800",
    },
    {
      name: "Progress",
      icon: ChartBarIcon,
      bgColor: "bg-purple-100",
      textColor: "text-purple-800",
    },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 w-full mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6 text-gray-800">
        Hello, <span className="text-green-500">Nimco Rashid</span>
      </h1>
      <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8">
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4">
          Welcome to your dashboard. Here you can view your courses,
          assignments, and progress.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {dashboardItems.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} px-4 py-10 rounded-lg border border-gray-200 flex items-center`}
            >
              <item.icon className={`h-8 w-8 ${item.textColor} mr-3`} />
              <div>
                <h2 className={`text-xl font-semibold mb-1 ${item.textColor}`}>
                  {item.name}
                </h2>
                <p className={`${item.textColor} opacity-75`}>
                  View your {item.name.toLowerCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
