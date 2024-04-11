import React from "react";
import Profile from "./Profiles";
import Currency from "./Currency";

const Account = () => {
  return (
    <div className="font-serif text-xl flex flex-row gap-2">
      <div className="w-1/4 ">
        <Profile />
      </div>
      <div className="w-1/4 ">
        <Currency />
      </div>
    </div>
  );
};

export default Account;
