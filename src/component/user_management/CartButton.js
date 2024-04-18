import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  function ToCart() {
    navigate("/cart");
  }
  return (
    <button
      className="group text-2xl font-medium h-full flex justify-center items-center w-40 p-2 focus:bg-black hover:bg-black"
      onClick={ToCart}
    >
      <div className="group-hover:text-white w-fit group-focus:text-white group text-sky-600 transition duration-300">
        Cart
        <span className="block max-w-0 group-hover:max-w-full group-focus:max-w-full transition-all duration-500 h-[1px] bg-white"></span>
      </div>
    </button>
  );
};

export default Cart;
