// src/components/ContentArea.js
import React from "react";

const ContentArea = () => {
  const parts = [
    {
      title: "Part 1: Lorem Ipsum Dolor Sit Amet",
      items: [
        { type: "Video", label: "Video 1", time: "10:00" },
        { type: "Article", label: "Article 1", time: "10:00" },
        { type: "Quiz", label: "Quiz 1", time: "10:00" },
        { type: "Exercise", label: "Coding Exercise 1", time: "10:00" },
        { type: "Resource", label: "Combined Resource 1", time: "10:00" },
      ],
      time: "02:00:00",
      difficulty: "Medium",
      progress: "45% Completed",
    },
    // More parts can be added here...
  ];

  return (
    <div className="flex-1 p-4">
      {parts.map((part, index) => (
        <div key={index} className="border p-4 rounded mb-4">
          <h3 className="font-bold text-lg">{part.title}</h3>
          <div className="text-sm text-gray-500 flex justify-between">
            <span>{part.time}</span>
            <span>{part.difficulty}</span>
            <span>{part.progress}</span>
          </div>
          <ul className="space-y-2 mt-4">
            {part.items.map((item, i) => (
              <li key={i} className="flex justify-between items-center">
                <span>{item.type}: {item.label}</span>
                <span className="text-gray-500">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ContentArea;
