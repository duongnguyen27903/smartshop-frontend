import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, deleteCart, getCart } from "../api/api";
import { errorform } from "../authen/SignIn";
import "../App.css";

const Cart = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  var info;
  if (user) info = JSON.parse(user);
  const [data, setData] = useState([]);
  useEffect(() => {
    getCart(info?.user.id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        // alert(errorform(err));
        navigate("/");
        window.location.reload();
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 mx-12">
        {data &&
          data.map((item, index) => {
            return <Item item={item} key={index} info={info} />;
          })}
      </div>
    </div>
  );
};

export default Cart;

const Item = ({ item, info }) => {
  const { cart_id, id, image, name, price, amount, brandId } = item;
  const navigate = useNavigate();

  function handleDeleteCart() {
    if (window.confirm("Are your sure to delete")) {
      deleteCart(cart_id, info?.user.id)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => {
          alert(errorform(err));
        });
    }
  }
  function handleClick() {
    navigate(`/${brandId}/${id}?amount=${amount}`);
  }
  return (
    <div className="flex flex_row mx-2 p-2 font-serif cursor-pointer text-2xl gap-2 transition-all ease-in-out delay-150 hover:translate-x-5 hover:bg-black hover:text-white hover:scale-110 duration-300">
      <img
        src={image.img}
        alt={`${item.name}`}
        className="w-1/4 object-cover"
      />
      <div className="flex flex-row justify-between grow">
        <div onClick={handleClick} className="">
          <div>{name}</div>
          <div>${Number(price * amount).toLocaleString()}</div>
          <div>Quantity : {amount}</div>
        </div>
        <button
          onClick={handleDeleteCart}
          className="place-self-center shaking"
        >
          <p>Delete</p>
        </button>
      </div>
    </div>
  );
};
