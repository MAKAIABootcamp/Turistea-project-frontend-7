import React from "react";
import imgPrincipal from "../assets/imgLogin.jpg";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex h-screen">
      <figure className="w-3/4 ">
        <img
          className="h-full w-full  object-cover"
          src={imgPrincipal}
          alt="imgPrincipal"
        />
      </figure>
      <aside className="w-1/3 px-10 flex flex-col justify-center items-center">
      <Link
          to={`/`}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-12 mb-4" alt="Logo" />
        </Link>
        <form id="myForm">
          <div className="">
            <label htmlFor="userPhone">Phone:</label>
            <input type="number" id="userPhone" name="phone" />
            <span id="errorPhone" className="alert"></span>
          </div>
          <div className="">
            <label htmlFor="userPassword">Password:</label>
            <input type="password" id="userPassword" name="password" />
            <span id="errorPassword" className="alert"></span>
          </div>
          <div className="">
            <button id="button" type="submit">
              Log in
            </button>
          </div>
        </form>
      </aside>
    </section>
  );
};

export default Login;
