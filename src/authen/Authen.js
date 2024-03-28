import React, { useEffect, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";

const Authen = ({ isOpen, close_popup }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  useEffect(() => {
    if (user) {
      navigate("/account");
    }
  }, [user, navigate]);

  const [isLoginForm, SetIsLoginForm] = useState(true);
  function changeForm() {
    SetIsLoginForm(!isLoginForm);
  }
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
