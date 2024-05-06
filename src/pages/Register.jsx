import React from "react";
import backgroundImage from "../assets/fondoRegister.jpeg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      className="bg-cover bg-center  flex flex-col items-center  h-screen "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <form className="w-2/4 h-11/12 mt-7 py-5 flex flex-col items-center font-body bg-white rounded-2xl">
        <h1 className="font-title text-4xl mb-6 text-primary-color">
          Registrate
        </h1>
        <div className="mb-5 w-2/3">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 font-semibold text-primary-color"
          >
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            className="bg-trasparent border border-highlight-color text-black-text text-sm rounded-xl focus:ring-3 focus:ring-highlight-color focus:border-highlight-color w-full p-2.5 "
            placeholder="Pepito Perez"
          />
        </div>
        <div className="mb-5 w-2/3">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 font-semibold text-primary-color"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            className="bg-trasparent border border-highlight-color text-black-text text-sm rounded-xl focus:ring-3 focus:ring-highlight-color focus:border-highlight-color w-full p-2.5 "
            placeholder="name@email.com"
          />
        </div>
        <div className="mb-5 w-2/3">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-semibold  text-primary-color"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="bg-trasparent border border-highlight-color text-black-text text-sm rounded-xl focus:ring-3focus:ring-highlight-color focus:border-highlight-color w-full p-2.5"
            placeholder="xxxxx"
          />
        </div>
        <div className="mb-5 w-2/3">
          <label
            htmlFor="photo"
            className="block mb-2 text-sm font-semibold  text-primary-color"
          >
            Foto de perfil
          </label>
          <input
            class="block w-full text-sm text-gray-900 border border-highlight-color rounded-xl cursor-pointer bg-trasparent"
            id="photo"
            type="file"
          />
  
        </div>
        {/* <div className="flex items-start mb-5 w-4/5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 text-primary-color focus:ring-transparent "
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900"
          >
            Al registrarme, acepto los términos de uso y la Política de
            privacidad
          </label>
        </div> */}
        <button
          type="submit"
          className="text-white w-3/4 font-body bg-highlight-color hover:bg-primary-color hover:border border-primary-color font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Ingresar
        </button>
        <p className="text-black-text font-body mt-6 text-sm text-center">
          ¿Ya tienes una cuenta?{" "}
          <Link
            to={`/login`}
            className="font-body text-highlight-color underline decoration-solid hover:text-primary-color hover:font-semibold"
          >
            Inicia sesión aqui
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
