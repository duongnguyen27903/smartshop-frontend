import React from "react";
import Header from "../component/Header";

const HeaderOnly = ({ children }) => {
  return (
    <div className="relative h-screen font-serif">
      <div className="sticky top-0 h-1/6 bg-white ring-1 border cursor-pointer ">
        <Header />
      </div>
      <div className="h-5/6 p-2">{children}</div>
    </div>
  );
};

export default HeaderOnly;
