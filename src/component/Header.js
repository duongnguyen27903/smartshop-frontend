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
    <div className="flex flex-row gap-2 font-serif h-full">
      <div
        className="flex flex-row place-items-center p-2 font-bold text-3xl hover:animate-bounce"
        onClick={NavHome}
      >
        <span className="bg-clip-text text-transparent animate-[changecolor_5s_infinite] bg-gradient-to-r from-yellow-500 to-black ">
          Duong
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-yellow-500 ">
          Auto
        </span>
      </div>
      <div className="flex flex-row place-items-center h-full grow">
        <SearchBar className={" w-1/2"} />
        <UserManagement className={"grow  h-full"} />
      </div>
    </div>
  );
};

export default Header;
