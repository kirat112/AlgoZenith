import React from "react";

const Sidebar = () => {
    const items = ["Dashboard", "Learn", "Forums", "Upskill", "Contest", "Leaderboard"];
  return (
    <div className="w-64 h-screen bg-white shadow-lg flex flex-col">
      <h2 className="text-2xl font-bold p-4">AlgoZenith</h2>
      <nav className="flex flex-col gap-4 p-4">
        {items.map((item) => (
          <a
            href="#"
            className="text-gray-700 hover:bg-gray-200 p-2 rounded"
            key={item}
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
