import React from 'react';

const FormReviews = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto  mt-10">
      <h1>Publicacion</h1>
      <div className="mb-4">
          <label htmlFor="review-type" className="block text-sm font-medium text-gray-700">
            Selecciona ubicación
          </label>
          <select
            id="review-type"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight-color focus:border-highlight-color sm:text-sm"
          >
            <option className='text-gray-input'>Seleccionar</option>
            {/* Aquí puedes agregar más opciones */}
          </select>
        </div>

      <h2 className="text-2xl font-semibold text-primary-color mb-6">Creación Reseña</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="review-type" className="block text-sm font-medium text-gray-700">
            Selecciona el tipo de reseña que deseas agregar
          </label>
          <select
            id="review-type"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight-color focus:border-highlight-color sm:text-sm"
          >
            <option className='text-gray-input'>Seleccionar</option>
            {/* Aquí puedes agregar más opciones */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight-color focus:border-highlight-color sm:text-sm"
            placeholder="Enter item name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="brief" className="block text-sm font-medium text-gray-700">
            Breve reseña del lugar
          </label>
          <input
            type="text"
            id="brief"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight-color focus:border-highlight-color sm:text-sm"
            placeholder="Enter item description"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="review" className="block text-sm font-medium text-gray-700">Reseña</label>
          <textarea
            id="review"
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-highlight-color focus:border-highlight-color sm:text-sm"
            placeholder="Enter item description"
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Insertar Imágen Principal</label>
          <div className="flex space-x-4 mt-2">
            {/* Botones para añadir imágenes */}
            {Array.from({ length: 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                className="w-20 h-20 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg focus:ring-2 focus:ring-highlight-color focus:outline-none"
              >
                <span className="text-2xl focus:ring-highlight-color">+</span>
              </button>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Insertar Imágenes Secundarias</label>
          <div className="flex space-x-4 mt-2">
            {/* Botones para añadir imágenes */}
            {Array.from({ length: 4 }).map((_, index) => (
              <button
                key={index}
                type="button"
                className="w-20 h-20 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg focus:ring-2 focus:ring-highlight-color focus:outline-none"
              >
                <span className="text-2xl focus:ring-highlight-color">+</span>
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Calificación</label>
          <div className="flex items-center mt-1">
            {/* Aquí podrías integrar un componente de estrellas interactivo */}
            <span className="text-highlight-color focus:ring-highlight-color focus:border-highlight-color text-lg leading-none">★★★★☆</span>
          </div>
        </div>
        {/* Botón para añadir otra reseña */}
        <div className="flex items-center space-x-2 mb-6">
          <button
            type="button"
            className="flex items-center justify-center space-x-2 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-full shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-highlight-color focus:ring-opacity-50"
          >
            <span>Añadir otra reseña</span>
            <svg className='fill-highlight-color' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"/>
            </svg>
          </button>
        </div>
        <div className="flex justify-end mt-6">
          <button type="button" className="py-2 px-4 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 mr-4">
            Cancelar
          </button>
          <button type="submit" className="py-2 px-4  bg-highlight-color text-white rounded-md hover:bg-primary-color">
            Crear
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormReviews;
