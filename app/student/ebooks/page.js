"use client";

import React from "react";

export default function Page() {
  const ebooks = [
    { id: 1, title: "How write clean code?" },
    { id: 2, title: "Eat that frog" },
    { id: 3, title: "Next js 15" },
  ];

  const handleDownload = (title) => {
    // Logic to download the ebook as PDF
    console.log(`Downloading ${title} as PDF...`);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg border">
      <h1 className="text-3xl font-extrabold text-center  mb-8">
        Available Ebooks
      </h1>
      <ul className="space-y-6">
        {ebooks.map((ebook) => (
          <li
            key={ebook.id}
            className="flex justify-between items-center p-5 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <span className="text-xl text-gray-800 font-semibold">
              {ebook.title}
            </span>
            <button
              className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-500 transition duration-300"
              onClick={() => handleDownload(ebook.title)}
            >
              Download
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
