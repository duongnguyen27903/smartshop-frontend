import React from "react";
import { categories } from "../router/menu";
import { NavLink } from "react-router-dom";

const Tabs = () => {
  return (
    <div className="flex flex-col justify-start gap-2 p-2">
      {categories.map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center capitalize font-semibold hover:bg-blue-500 rounded-lg"
          >
            <NavLink
              to={item.path}
              className={({ isActive }) => {
                const activeClass = isActive ? "bg-gray-400" : "";
                return `${activeClass} h-full w-full rounded-lg text-lg p-2`;
              }}
            >
              {item.name}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
