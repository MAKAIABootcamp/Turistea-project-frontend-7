import React from "react";
import imgPrincipal from "../assets/imgLogin.jpg";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex h-screen">
      <figure className="w-1/2 md:w-3/4 sm:w-3/5">
        <img
          className="h-full w-full  object-cover"
          src={imgPrincipal}
          alt="imgPrincipal"
        />
      </figure>
      <aside className=" w-1/2 md:w-1/3 sm:w-5/12 px-10 lg:px-20 flex flex-col justify-center items-center">
        <Link to={`/`} className="flex items-center mb-8">
          <img src={logo} className="object-cover" alt="Logo" />
        </Link>
        {/* <h1 className="mb-6 md:text-4xl sm:text-base font-title text-highlight-color ">Inicia Sesión</h1> */}
        <form className="w-full flex flex-col justify-center">
          <div className="mb-5">
            <input
              type="email"
              id="email"
              className="bg-trasparent border border-highlight-color text-black-text text-sm rounded-xl focus:ring-highlight-color focus:border-highlight-color w-full p-2.5 "
              placeholder="name@flowbite.com"
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              id="password"
              className="bg-trasparent border border-highlight-color text-black-text text-sm rounded-xl focus:ring-highlight-color focus:border-highlight-color w-full p-2.5 "
              placeholder="xxxxxxxx"
            />
          </div>
          <button
            type="submit"
            className="font-body md:text-lg sm:text-base text-white bg-highlight-color hover:bg-primary-color hover:border border-primary-color font-semibold rounded-xl w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Ingresar
          </button>
        </form>
        <p className="text-black-text font-body mt-6 text-sm text-center pb-5 border-b border-gray-input">
          ¿Aún no tienes cuenta?{" "}
          <Link
            to={`/register`}
            className="font-body text-highlight-color underline decoration-solid hover:text-primary-color"
          >
            Registrate
          </Link>
        </p>
        <div className="mt-4">
          <button className="py-1 px-0.5 border border-primary-color bg-primary-color rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-5 fill-secondary-color"
              viewBox="0 0 24 24"
            >
              <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
            </svg>
          </button>
          <button className="mx-2 py-1 px-0.5 border border-primary-color bg-primary-color rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-5 fill-secondary-color"
              viewBox="0 0 24 24"
            >
              <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
            </svg>
          </button>
          <button className="py-1 px-0.5 border border-primary-color bg-primary-color rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-5 fill-secondary-color"
              viewBox="0 0 24 24"
            >
              <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
            </svg>
          </button>
        </div>
      </aside>
    </section>
  );
};

export default Login;
