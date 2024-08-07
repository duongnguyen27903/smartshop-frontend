import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  api,
  auth_api,
  buyProduct,
  getDetailProduct,
  saveCart,
} from "../api/api";
import { errorform } from "../authen/SignIn";
const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    getDetailProduct(id)
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const searchParams = new URLSearchParams(window.location.search);

  const [amount, setAmount] = useState(() => {
    let val = Number(searchParams.get("amount"));
    if (!val) return 1;
    if (val > data?.quantity) {
      return data?.quantity;
    }
    return val;
  });

  if (data) {
    if (amount > data.quantity) {
      setAmount(Number(data.quantity));
    }
  }
  function handleIncrease(a) {
    setAmount(amount + a);
  }

  const user = localStorage.getItem("user");
  var info;
  if (user) {
    info = JSON.parse(user);
  }

  function handleAddToCart() {
    saveCart(id, info?.user.id, amount)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        alert("You must login to use cart");
      });
  }

  function handlePurchase() {
    buyProduct(id, info?.user.id, amount)
      .then((res) => {
        alert(res.data);
        window.location.reload();
      })
      .catch((err) => {
        alert("Error happened. Login again");
      });
  }

  if (data)
    return (
      <div className="m-8 text-3xl font-serif">
        <div className="grow flex justify-center">{`${data.username}`}</div>
        <div className=" py-2">
          <div className="text-4xl ">{data.name}</div>
          <div className="text-2xl">Brand : {data.brand_name}</div>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row">
          <div className="flex flex-col w-2/3">
            <img src={data.image.img} alt={`${data.name}-anh`} />
            <div>{data.description}</div>
          </div>
          <div className="w-1/3 grid grid-cols-2 place-items-center">
            <div>Available</div>
            <div>{data.quantity}</div>

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
                disabled={amount >= data.quantity}
                onClick={() => {
                  handleIncrease(1);
                }}
                className={` h-9 w-9 flex justify-center ${
                  amount === data.quantity
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-orange-300"
                }`}
              >
                +
              </button>
            </div>

            <div>Price</div>
            <div>${Number(amount * data.price).toLocaleString()}</div>

            <button
              onClick={handleAddToCart}
              className="col-span-2 w-full h-full hover:bg-black hover:text-white m-2"
            >
              Add to cart
            </button>
            <button
              onClick={handlePurchase}
              className="col-span-2 w-full h-full hover:bg-black hover:text-white m-2"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    );
};

export default Product;
