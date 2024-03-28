import React from "react";
import Header from "../component/Header";
import Tabs from "../component/Tabs";

const MainLayout = ({ children }) => {
  return (
    <div className="relative">
      <div className="sticky bg-white ring-1 top-0 border cursor-pointer ">
        <Header />
      </div>
      <div className=" flex flex-row">
        <div
          className={`lg:min-w-[20%] h-svh overflow-y-auto
          }`}
        >
          <Tabs />
        </div>

        <div className="grow h-svh overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
