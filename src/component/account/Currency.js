import React, { useEffect, useState } from "react";
import "../../App.css";
import { api, auth_api, getCurrent } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { errorform } from "../../authen/SignIn";

const Currency = () => {
  const navigate = useNavigate();
  const user_info = localStorage.getItem("user");
  var info;
  if (user_info) info = JSON.parse(user_info);

  function createAccount() {
    const account_number = "024" + Math.random().toString().slice(2, 11);
    auth_api
      .post(
        `account/create_payment_account?userId=${info?.user.id}&account_number=${account_number}`
      )
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        alert(errorform(err));
      });
  }

  const [account, setAccount] = useState();
  const [amount, setAmount] = useState(0);
  function handleChange(e) {
    setAmount(e.target.value);
  }
  function charge() {
    if (amount < 0) {
      alert("charge at least $1");
      return;
    } else if (amount > 10000000) {
      alert("charge less than $10,000,000");
      return;
    }
    auth_api
      .patch(`account/charge?userId=${info?.user.id}&amount=${amount}`)
      .then((res) => {
        setAccount(res?.data[0]);
        setAmount(0);
      })
      .catch((err) => {
        alert(errorform(err));
      });
  }
  useEffect(() => {
    getCurrent(info?.user.id)
      .then((res) => {
        setAccount(res?.data[0]);
        localStorage.setItem(
          "account",
          JSON.stringify(res?.data[0]?.account_number)
        );
      })
      .catch((err) => {
        localStorage.clear();
        alert(errorform(err));
        navigate("/");
      });
  }, []);
  if (account) {
    return (
      <div className="">
        <div className="my-2 uppercase">Account</div>
        <div>Account number : {account?.account_number}</div>
        <div>
          Account balance :{" "}
          {`$${Number(account?.account_balance).toLocaleString()}`}
        </div>
        <div>
          <div className="h-full flex flex-col gap-2 place-items-center m-4">
            <div className="text-2xl">Recharge</div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                value={amount || ""}
                onChange={handleChange}
                required
              />
              <label className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Enter the number
              </label>
              <div>$0 ~ $10,000,000</div>
            </div>
            <button
              onClick={charge}
              className="w-full p-4 m-2 ring-2 shadow-lg shadow-blue-300 border-2 hover:bg-blue-300 "
            >
              <div className="animate-highlight">Charge</div>
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p className="uppercase my-2">Account</p>
        <button
          onClick={createAccount}
          className="border w-full p-4 grid place-self-center"
        >
          Create your payment account
        </button>
      </div>
    );
  }
};

export default Currency;
