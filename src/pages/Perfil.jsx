import React from 'react'
import { useState } from 'react';
import MisReseñas from '../components/MisReseñas';
import Planes from '../components/Planes';
import PlanesDeAhorro from '../components/PlanAhorro';
const Perfil = () => {
  const [componenteSeleccionado, setComponenteSeleccionado] = useState(null);

  // Función para cambiar el componente seleccionado
  const handleClick = (componente) => {
    setComponenteSeleccionado(componente);
  };

  // Componentes específicos a renderizar

  return (
    <>
      <div className='flex flex-row  w-full'>
        {/* Renderizar el componente seleccionado al lado de las opciones */}
        <aside className='flex-col w-1/3.2  w-80 h-screen'>
          <nav className='flex flex-col gap-5 pt-7 font-body text-m mx-3 h-72 bg-white rounded-lg items-center shadow shadow-gray-300 mt-11 mx-1'>
            
            <li className={`list-none text-blue-700  w-4/5 h-10 px-2 pt-2 rounded-md bg-blue-100 hover:text-blue-500 font-semibold hover:bg-blue-200 `} onClick={() => handleClick(<MisReseñas />)}>Reseñas</li>
            <li className={`list-none text-blue-700 w-4/5 h-10 px-2 pt-2 rounded-md bg-blue-100 hover:text-blue-500 font-semibold hover:bg-blue-200 `}  onClick={() => handleClick(<Planes />)}>Planes</li>
            <li className={`list-none text-blue-700 w-4/5 h-10 px-2 pt-2 rounded-md bg-blue-100 hover:text-blue-500 font-semibold hover:bg-blue-200`}  onClick={() => handleClick(<PlanesDeAhorro />)}>Planes de Ahorro</li>
           
            
          </nav>
        </aside>

        {/* Renderizar el componente seleccionado al lado de las opciones */}
        <main className='flex-col w-2/3 h-screen'>
          {componenteSeleccionado}
        </main>
      </div>
    </>
  );
};

export default Perfil;
