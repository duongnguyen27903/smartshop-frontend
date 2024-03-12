import React from "react";
import Header from "../component/Header";

const HeaderOnly = ({ children }) => {
  return (
    <div className="bg-slate-300">
      <div className="border cursor-pointer bg-white rounded-lg">
        <Header />
      </div>
      <div className="my-2 p-2 bg-white rounded-lg">{children}</div>
    </div>
  );
};

export default HeaderOnly;
