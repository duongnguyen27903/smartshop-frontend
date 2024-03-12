import React from "react";
import Header from "../component/Header";
import Tabs from "../component/Tabs";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-slate-300">
      <div className="border cursor-pointer bg-white rounded-lg">
        <Header />
      </div>
      <div className="flex flex-row ">
        <div className="m-2 bg-white rounded-lg lg: min-w-[16%] overflow-y-auto h-full">
          <Tabs />
        </div>
        <div className="m-2 bg-white rounded-lg grow">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
