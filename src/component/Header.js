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
    <div className="flex flex-row m-5 gap-4">
      <div
        className="flex flex-row place-items-center font-bold text-3xl hover:animate-bounce"
        onClick={NavHome}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-black ">
          Duong
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-yellow-500 ">
          Auto
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
