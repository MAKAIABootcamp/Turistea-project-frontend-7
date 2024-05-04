import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBell,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
const ConfigPerfil = () => {
  return (
    <div className="flex flex-row gap-4 h-full w-full justify-evenly">
      <section className="mt-12">
        <h2 className="text-2xl text-primary-color font-title text-center leading-10 font-medium">
          
          Ajustes de la Cuenta
        </h2>
        <nav className="flex flex-col  w-72 gap-5 pt-7 font-body text-m  h-72 bg-white rounded-lg items-center shadow shadow-gray-300 mt-7 ">
          <li className="list-none text-black bg-white h-10 px-2 pt-2  mx-2   hover:bg-blue-100 w-5/6 rounded-lg">
           
            <FontAwesomeIcon
              className="w-5 h-5 mx-2 text-highlight-color"
              icon={faUser}
            />
            Información Personal
          </li>
          <li className="list-none text-black bg-white h-10 px-2 pt-2  mx-2  hover:bg-blue-100 w-5/6 rounded-lg">
        
            <FontAwesomeIcon
              className="w-5 h-5 mx-2 text-highlight-color"
              icon={faBell}
            />
            Privacidad y Seguridad
          </li>
          <li className="list-none text-black bg-white h-10 px-2 pt-2  mx-2  hover:bg-blue-100 w-5/6 rounded-lg">
            
            <FontAwesomeIcon
              className="w-5 h-5 mx-2 text-highlight-color"
              icon={faTrashCan}
            />
            Eliminar cuenta
          </li>
        </nav>
      </section>

      <section className=" w-4/6 h-full font-body mb-10">
        <div className="relative my-5 mx-5 ">
          <img
            className="w-40 h-40 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Gshp4z7EX1tb7MIup4TjrG-E4Gs2lVLZ1XKH8wyCLw&s"
          />
          <button className="bg-highlight-color w-8 h-8 absolute top-32 left-3 rounded-full">
            <FontAwesomeIcon className="w-5 h-5" icon={faPencil}  style={{ color: "#F9F9F8" }} />
          </button>
        </div>

        <div className="px-4 py-2 sm:grid sm:grid-cols-1  sm:px-0 border-gray-300 mr-7">
          <dt className="py-2 flex flex-row justify-between  text-sm font-medium leading-6 font-semibold text-gray-900 sm:px-0 border-gray-300 mr-7">
            Nombre Completo
            <span className="text-highlight-color hover:text-primary-color cursor-pointer"> Editar </span>
          </dt>
          <dd className="mt-1 text-sm leading-2 text-gray-700  sm:col-span-2 sm:mt-0 divide-y divide-gray-300 border-b py-2">
            Margot Foster
          </dd>
        </div>
        <div className="px-4 py-2 sm:grid sm:grid-cols-1  sm:px-0 border-gray-300 mr-7">
          <dt className="py-2 flex flex-row justify-between  text-sm font-medium leading-6 font-semibold text-gray-900 sm:px-0 border-gray-300 mr-7" >
            Correo electrónico
            <span className="text-highlight-color hover:text-primary-color cursor-pointer"> Editar </span>
          </dt>
          <dd className="mt-1 text-sm leading-2 text-gray-700 sm:col-span-2 sm:mt-0 divide-y divide-gray-300 border-b py-2">
            margot134@gmail.com
          </dd>
        </div>
        <div className="px-4 py-2 sm:grid sm:grid-cols-1  sm:px-0 border-gray-300 mr-7">
          <dt className="py-2 flex flex-row justify-between  text-sm font-medium leading-6 font-semibold text-gray-900 sm:px-0 border-gray-300 mr-7" >
            Celular
            <span className="text-highlight-color hover:text-primary-color cursor-pointer" > Editar </span>
          </dt>
          <dd className="mt-1 text-sm leading-2 text-gray-700 sm:col-span-2 sm:mt-0 divide-y divide-gray-300 border-b py-2">
            +57 321456980
          </dd>
        </div>
        <div className="px-4 py-2 sm:grid sm:grid-cols-1  sm:px-0 border-gray-300 mr-7">
          <dt className="py-2 flex flex-row justify-between  text-sm font-medium leading-6 font-semibold text-gray-900 sm:px-0 border-gray-300 mr-7">
            Género
            <span className="text-highlight-color hover:text-primary-color cursor-pointer"> Editar </span>
          </dt>
          <dd className="mt-1 text-sm leading-2 text-gray-700 sm:col-span-2 sm:mt-0 divide-y divide-gray-300 border-b py-2">
            Femenino
          </dd>
        </div>
      </section>
    </div>
  );
};

export default ConfigPerfil;
