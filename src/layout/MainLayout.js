import React from "react";
import Header from "./Header";
import Tabs from "./Tabs";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="border rounded-b-lg cursor-pointer">
        <Header />
      </div>
      <div className="flex flex-row bg-slate-300">
        <div className="m-2 bg-white rounded-lg lg: min-w-[16%] overflow-y-auto h-full">
          <Tabs />
        </div>
        <div className="m-2 bg-white rounded-lg grow">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
