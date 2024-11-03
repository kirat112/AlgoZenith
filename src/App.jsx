// src/App.js
import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ChapterList from "./components/ChapterList";
import ContentArea from "./components/ContentArea";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <ChapterList />
          <ContentArea />
        </div>
      </div>
    </div>
  );
};

export default App;
