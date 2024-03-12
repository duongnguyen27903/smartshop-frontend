import React, { useState } from "react";
import Authen from "../../authen/Authen";
const Account = () => {
  const [isopen, SetIsopen] = useState(false);

  function openSignInPopup() {
    SetIsopen(!isopen);
  }
  return (
    <div>
      {isopen && <Authen isOpen={isopen} close_popup={openSignInPopup} />}
      <button
        className="group flex flex-row text-xl font-medium items-center p-2 border rounded-lg hover:bg-blue-600 focus:bg-blue-500"
        onClick={openSignInPopup}
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white group-hover:text-white group-focus:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 9h0M9 9h0m12 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM7 13c0 1 .5 2.4 1.5 3.2a5.5 5.5 0 0 0 7 0c1-.8 1.5-2.2 1.5-3.2 0 0-2 1-5 1s-5-1-5-1Z"
          />
        </svg>
        <div className="group-hover:text-white group-focus:text-white">
          Account
        </div>
      </button>
    </div>
  );
};

export default Account;
