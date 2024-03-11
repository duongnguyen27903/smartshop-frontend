import React from "react";

const Cart = () => {
  return (
    <button className="group flex flex-row items-center rounded-lg p-2 gap-2 border hover:bg-blue-600 focus:bg-blue-500">
      <div className="text-xl font-medium group-focus:text-white group-hover:text-white">
        Cart
      </div>
      <div className="text-xl font-semibold text-orange-500">0</div>
    </button>
  );
};

export default Cart;
