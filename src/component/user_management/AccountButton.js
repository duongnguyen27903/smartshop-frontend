import React, { useState } from "react";
import Authen from "../../authen/Authen";
const Account = () => {
  const [isopen, SetIsopen] = useState(false);

  function openSignInPopup() {
    SetIsopen(!isopen);
  }
  return (
    <div className="relative h-full">
      <button
        className="group text-2xl font-medium h-full flex justify-center items-center w-40 p-2 focus:bg-black hover:bg-black"
        onClick={openSignInPopup}
      >
        <div className="group-hover:text-white w-fit group-focus:text-white group text-sky-600 transition duration-300">
          Account
          <span className="block max-w-0 group-hover:max-w-full group-focus:max-w-full transition-all duration-500 h-[1px] bg-white"></span>
        </div>
      </button>
      {isopen && <Authen isOpen={isopen} close_popup={openSignInPopup} />}
    </div>
  );
};

export default Account;
