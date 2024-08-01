import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getCategories } from "../api/api";

const Tabs = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-col cursor-pointer">
      {categories &&
        categories.map((category, index) => {
          return <Pack category={category} key={index} />;
        })}
    </div>
  );
};

const Pack = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={`flex flex-col group`}>
      <div
        className="grow font-serif flex justify-center items-center h-20 uppercase text-xl text-sky-600 hover:bg-black hover:text-white"
        onClick={handleOpen}
      >
        {category.main}
      </div>
      <div className={`${isOpen ? "block" : "hidden"}`}>
        {category.sub.map((item, index) => {
          return <Item item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <div
      className={`capitalize font-medium font-serif hover:bg-black hover:text-white h-20 w-full`}
    >
      <NavLink
        to={`/${item.id}`}
        className={({ isActive }) => {
          const activeClass = isActive ? "bg-gray-400" : "";
          return `${activeClass} h-full w-full text-xl flex justify-center items-center`;
        }}
      >
        {item.name}
      </NavLink>
    </div>
  );
};

export default Tabs;
