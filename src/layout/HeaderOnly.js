import React from "react";
import Header from "../component/Header";

const HeaderOnly = ({ children }) => {
  return (
    <div className="bg-slate-200">
      <div className="border cursor-pointer bg-white ">
        <Header />
      </div>
      <div className="my-2 p-2 bg-white">{children}</div>
    </div>
  );
};

export default HeaderOnly;
