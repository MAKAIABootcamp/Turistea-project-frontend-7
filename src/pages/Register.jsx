import React from 'react'
import backgroundImage from "../assets/fondoRegister.jpeg";

const Register = () => {
  return (
    <div className="bg-cover bg-center  flex flex-col items-center  h-screen " style={{ backgroundImage: `url(${backgroundImage})` }}>
      
      <nav className="bg-white h-16 flex justify-center pt-5 w-screen ">
          <img  className = "w-36 h-8" src= "src\assets\logo.png"/>
      </nav>


      <form className="w-2/4 h-5/6 mt-7 pt-5 flex flex-col items-center font-body bg-white rounded-2xl">
        <h1 className="font-title text-4xl  mb-6 text-highlight-color"> Registrate </h1>
        <div className="mb-5 w-2/3"> 
          <label  htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-semibold text-primary-color">Nombre Completo</label>
          <input type="nombre" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Pepito Perez'  />
        </div>
        <div className="mb-5 w-2/3">
          <label  htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-semibold text-primary-color">Correo electrónico</label>
          <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@email.com" />
          
        </div>
        <div className="mb-5 w-2/3">
          <label  htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-semibold  text-primary-color">Contraseña</label>
          <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "placeholder='xxxxx'/>
        </div>
        <div className="flex items-start mb-5 w-2/3">
          <div className="flex items-center h-5">
            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 text-primary-color focus:ring-transparent "   />
          </div>
          <label  htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900">Al registrarme, acepto los Términos de uso y la Política de privacidad </label>
        </div>
        <button type="submit" className="text-white w-72 font-body bg-highlight-color hover:bg-primary-color hover:border border-primary-color font-medium rounded-lg text-sm px-5 py-2.5 text-center">Ingresar </button>
      </form>

    </div>
  )
}

export default Register
