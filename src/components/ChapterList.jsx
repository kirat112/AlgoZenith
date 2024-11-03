// src/components/ChapterList.js
import React from "react";

const ChapterList = () => {
  const chapters = ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5"];

  return (
    <div className="w-1/4 p-4 border-r">
      <h2 className="font-bold text-lg">Chapters</h2>
      <ul className="space-y-4 mt-4">
        {chapters.map((chapter, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{chapter}</span>
            <span className="text-gray-500">05:00:00</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChapterList;
