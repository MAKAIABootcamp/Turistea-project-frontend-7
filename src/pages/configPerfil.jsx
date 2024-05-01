import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell, faTrashCan } from "@fortawesome/free-regular-svg-icons";
const ConfigPerfil = () => {
    return (
        <div className="flex flex-row gap-4 h-full w-full justify-evenly">
            
            <nav className='flex flex-col  w-2/6 gap-5 pt-7  font-body text-m  h-72 bg-white rounded-lg items-center shadow shadow-gray-300 mt-11 '>
            
            <li className='list-none text-blue-700 bg-white h-10 px-2 pt-2  mx-2  font-semibold hover:bg-blue-100 w-5/6 rounded-lg'> <FontAwesomeIcon className="w-5 h-5 mx-2" icon={faUser} style={{color: "#5d8ddf"}} /> Información Personal</li>
            <li className='list-none text-blue-700 bg-white h-10 px-2 pt-2  mx-2 font-semibold hover:bg-blue-100 w-5/6 rounded-lg'> <FontAwesomeIcon className="w-5 h-5 mx-2" icon={faBell} style={{color: "#4da6ea",}} /> Privacidad y Seguridad</li>
            <li className='list-none text-blue-700 bg-white h-10 px-2 pt-2  mx-2 font-semibold hover:bg-blue-100 w-5/6 rounded-lg'> <FontAwesomeIcon className="w-5 h-5 mx-2" icon={faTrashCan} /> Eliminar cuenta</li>
           
            
          </nav>
            <section className="divide-y divide-gray-300 w-4/6 h-full ">
                <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Nombre Completo</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Correo electrónico</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margot134@gmail.com</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Celular</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"> +57 321456980</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Género</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Femenino</dd>
                </div>
            </section>
        </div >


    )
}


export default ConfigPerfil;
