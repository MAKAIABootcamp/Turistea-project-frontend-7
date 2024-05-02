import React from 'react'
import backgroundImage from "../assets/fondoRegister.jpeg";
const Register = () => {
  return (
    <div className="bg-cover bg-center  flex flex-col items-center  h-screen " style={{ backgroundImage: `url(${backgroundImage})` }}>
      
      <nav className="bg-white h-16 flex justify-center pt-5 w-screen ">
          <img  className = "w-36 h-8" src= "src\assets\logo.png"/>
      </nav>


      <form class="w-2/4 h-5/6 mt-7 pt-5 flex flex-col items-center font-body bg-white rounded-2xl">
        <h1 className="font-title text-4xl  mb-6" style={{ color: 'rgb(5 150 105)' }}> Registrate </h1>
        <div class="mb-5 w-2/3"> 
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-semibold " style={{ color:'rgb(13 148 136) ' }}>Nombre Completo</label>
          <input type="nombre" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <div class="mb-5 w-2/3">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-semibold " style={{ color:'rgb(13 148 136) ' }} >Correo electrónico</label>
          <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
          
        </div>
        <div class="mb-5 w-2/3">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-semibold " style={{ color:'rgb(13 148 136) ' }}>Contraseña</label>
          <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <div class="flex items-start mb-5 w-2/3">
          <div class="flex items-center h-5">
            <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>
          <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Al registrarme, acepto los Términos de uso y la Política de privacidad </label>
        </div>
        <button type="submit" class="text-white w-72 bg-green-500 font-body hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ingresar </button>
      </form>

    </div>
  )
}

export default Register
