import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/api";
const Product = () => {
  const { brand, id } = useParams();

  useEffect(() => {
    api.get(`shop/get_detail_product?id=${id}`).then((res) => {
      setData(res.data[0]);
    });
  }, [id]);
  const [data, setData] = useState();
  const [amount, setAmount] = useState(1);

  function handleIncrease(a) {
    setAmount(amount + a);
  }

  if (data)
    return (
      <div className="m-8 text-3xl font-serif">
        <div className="grow flex justify-center">{`${data.username}`}</div>
        <div className=" py-2">
          <div className="text-4xl ">{data.name}</div>
          <div className="text-2xl">Brand : {brand}</div>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row">
          <div className="flex flex-col w-2/3">
            <img src={data.image.img} alt={`${data.name}-anh`} />
            <div>{data.description}</div>
          </div>
          <div className="w-1/3 grid grid-cols-2 place-items-center">
            <div>Available</div>
            <div>{data.available_quantity}</div>

            <div>Quantity</div>
            <div className="flex flex-row gap-3 items-center cursor-pointer">
              <button
                disabled={amount <= 0}
                onClick={() => {
                  handleIncrease(-1);
                }}
                className={` h-9 w-9 flex justify-center ${
                  amount === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-orange-300"
                }`}
              >
                -
              </button>
              <div>{amount}</div>
              <button
                disabled={amount >= data.available_quantity}
                onClick={() => {
                  handleIncrease(1);
                }}
                className={` h-9 w-9 flex justify-center ${
                  amount === data.available_quantity
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-orange-300"
                }`}
              >
                +
              </button>
            </div>

            <div>Price</div>
            <div>${amount * data.price}</div>

            <button className="col-span-2 w-full h-full hover:bg-black hover:text-white m-2">
              Add to cart
            </button>
            <button className="col-span-2 w-full h-full hover:bg-black hover:text-white m-2">
              Purchase
            </button>
          </div>
        </div>
      </div>
    );
};

export default Product;
