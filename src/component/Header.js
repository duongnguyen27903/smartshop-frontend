import React from "react";
import SearchBar from "./SearchBar";
import UserManagement from "./user_management/UserManagement";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  function NavHome() {
    navigate("/");
  }
  return (
    <div className="flex flex-row m-5 gap-3">
      <div
        className="flex flex-col place-items-center font-bold text-3xl"
        onClick={NavHome}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
          SMART
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500 ">
          SHOP
        </span>
      </div>
      <div className="flex flex-row grow">
        <SearchBar className={"m-2 w-1/2"} />
        <UserManagement className={"grow m-2"} />
      </div>
    </div>
  );
};

export default Header;
