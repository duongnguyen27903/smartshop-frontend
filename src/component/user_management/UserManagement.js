import React from "react";
import Account from "./AccountButton";
import Cart from "./CartButton";

const UserManagement = ({ className }) => {
  return (
    <div className={className}>
      <div className="p-2 flex flex-row justify-end gap-2">
        <Account />
        <Cart />
      </div>
    </div>
  );
};

export default UserManagement;
