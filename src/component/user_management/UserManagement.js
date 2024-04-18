import React from "react";
import Account from "./AccountButton";
import Cart from "./CartButton";

const UserManagement = ({ className }) => {
  return (
    <div className={className}>
      <div className="h-full flex flex-row justify-end mr-2">
        <Account />
        <Cart />
      </div>
    </div>
  );
};

export default UserManagement;
