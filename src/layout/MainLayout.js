import React from "react";
import Header from "../component/Header";
import Tabs from "../component/Tabs";

const MainLayout = ({ children }) => {
  return (
    <div className={`relative z-50 h-screen font-serif`}>
      <div className="sticky z-50 top-0 h-1/6 ring-1 cursor-pointer ">
        <Header />
      </div>
      <div className="flex flex-row h-5/6">
        <div className={`lg:min-w-[20%] h-full overflow-y-auto }`}>
          <Tabs />
        </div>

        <div className="grow h-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
