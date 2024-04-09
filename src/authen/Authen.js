import React, { useEffect, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";

const LogoutForm = ({ username, onClick }) => {
  return (
    <div className="absolute flex bg-blue-100 flex-col">
      <div className="p-2 text-xl w-48">Helo {username}</div>
      <button className="p-2 text-xl text-red-500 w-48" onClick={onClick}>
        Log out
      </button>
    </div>
  );
};

const Authen = ({ isOpen, close_popup, className }) => {
  const navigate = useNavigate();
  let location = document.location.pathname;
  const user = localStorage.getItem("user");
  useEffect(() => {
    if (user) {
      navigate("/account");
    }
  }, [user, navigate]);
  var info;
  if (user) {
    info = JSON.parse(user);
  }

  function handleLogout() {
    localStorage.removeItem("user");
    alert("you are back to home page");
    navigate("/");
  }

  const [isLoginForm, SetIsLoginForm] = useState(true);
  function changeForm() {
    SetIsLoginForm(!isLoginForm);
  }
  if (location === "/account")
    return (
      <div className={className}>
        <LogoutForm username={info.user.username} onClick={handleLogout} />
      </div>
    );

  return (
    <div className={`bg-black/20 fixed inset-0 ${isOpen ? "block" : "hidden"}`}>
      {isLoginForm ? (
        <SignIn close_popup={close_popup} to_signup={changeForm} />
      ) : (
        <SignUp close_popup={close_popup} to_signin={changeForm} />
      )}
    </div>
  );
};

export default Authen;
