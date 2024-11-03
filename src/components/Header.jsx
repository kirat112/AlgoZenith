import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between ">
      <div className="p-4 flex space-x-4">
        <button>Mentor Sessions</button>
        <button>Learning Material</button>
      </div>
      <div className="p-4 mr-3">
        <button>How it works</button>
      </div>
    </div>
  );
};

export default Header;
