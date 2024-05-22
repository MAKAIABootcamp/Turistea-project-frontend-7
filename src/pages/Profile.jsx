import React from 'react'
import { useState } from 'react';
import MyReviews from './MyReviews';
import SavingsPlan from '../components/SavingsPlan';

const Profile = () => {
  const [componenteSeleccionado, setComponenteSeleccionado] = useState(<MyReviews />);

  // Función para cambiar el componente seleccionado
  const handleClick = (componente) => {
    setComponenteSeleccionado(componente);
  };

  // Componentes específicos a renderizar

  return (
    <>
      <div className='flex flex-row  w-full'>
        <aside className='flex-col w-1/4'>
          <nav className='flex flex-col gap-5 py-7 font-body text-m mx-3 bg-white rounded-lg items-center shadow shadow-gray-300 mt-11 mx-1'>
            <li className={`list-none text-primary-color w-4/5 h-10 px-2 pt-2 rounded-md bg-bg-input border-2 border-primary-color font-semibold cursor-pointer`} onClick={() => handleClick(<MyReviews/>)}>Reseñas</li>
            <li className={`list-none text-primary-color w-4/5 h-10 px-2 pt-2 rounded-md bg-bg-input opacity-75 hover:opacity-100 font-semibold cursor-pointer`}  onClick={() => handleClick(<SavingsPlan />)}>Planes de Ahorro</li>
          </nav>
        </aside>
        <main className='flex-col w-2/3 h-screen'>
          {componenteSeleccionado}
        </main>
      </div>
    </>
  );
};

export default Profile;
