import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faCalendarDay, 
  faMapMarkerAlt, 
  faHome, 
  faDollarSign, 
  faSuitcase 
} from '@fortawesome/free-solid-svg-icons';
import { StarIcon, ShareIcon, BookmarkIcon } from '@heroicons/react/24/solid';

const DetailsPost = () => {
  return (
    <>
    <div className="flex justify-between items-center py-2">
    <div>
    <h1 className="font-poppins text-24 font-bold text-gray-800">Experiencia Relajante En Hotel Caribe</h1>
    <div className="flex items-center mt-1">
        <StarIcon className="h-5 w-5" style={{ color: '#29c3e5' }} />
        <span className="ml-1 font-montserrat text-12 font-bold">4.84</span>
        <span className="mx-2">·</span>
        <span className="font-montserrat text-18">Cartagena, Colombia</span>
    </div>
</div>
<div className="flex -ml-16">
  <button className="flex items-center hover:text-blue-700 transition-colors">
    <ShareIcon className="h-5 w-5" style={{ color: '#ffa317' }} />
    <span className="ml-1 font-montserrat text-18 text-black">Compartir</span>
  </button>
  <button className="flex items-center hover:text-blue-700 transition-colors ml-4 mr-10">
    <BookmarkIcon className="h-5 w-5" style={{ color: '#ffa317' }} />
    <span className="ml-1 font-montserrat text-18 text-black">Guardar</span>
  </button>
</div>
    </div>
    <div className="mt-4 flex gap-4">
  {/* Contenedor para la imagen principal */}
  <div className="flex-grow">
    <img
      src="src/assets/Image-19.webp" 
      alt="Calle de Cartagena"
      className="w-889 h-668 object-cover rounded-lg"
    />
  </div>
  
  {/* Contenedor para las imágenes pequeñas */}
  <div className="flex flex-col space-y-4">
    <img
      src="src/assets/Image-20.webp" 
      alt="Atardecer en Cartagena"
      className="w-279 h-217 object-cover rounded-lg"
    />
    <img
      src="src/assets/Image-21.webp" 
      alt="Vista nocturna"
      className="w-279 h-217 object-cover rounded-lg"
    />
    <img
      src="src/assets/Image-22.webp" 
      alt="Callejón de Cartagena"
      className="w-279 h-217 object-cover rounded-lg"
    />
  </div>
</div>
    <div className="mt-4 p-4 bg-white rounded-lg shadow">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Reserva</h2>
            <p className="text-sm text-gray-500">
              <FontAwesomeIcon icon={faCalendarDay} className="h-5 w-5 inline mr-2 text-blue-500" />
              Julio 22, 2024
            </p>
            <p className="text-sm text-gray-500">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 inline mr-2 text-blue-500" />
              Cartagena, Colombia
            </p>
            <p className="text-sm text-gray-500">
              <FontAwesomeIcon icon={faHome} className="h-5 w-5 inline mr-2 text-green-500" />
              Hotel Caribe
            </p>
            <p className="text-sm text-gray-500">
              <FontAwesomeIcon icon={faDollarSign} className="h-5 w-5 inline mr-2 text-orange-600" />
              El coste
            </p>
            <p className="text-sm text-gray-500">
              <FontAwesomeIcon icon={faSuitcase} className="h-5 w-5 inline mr-2 text-purple-500" />
              Actividades, tours
            </p>
            <p className="text-gray-700 mt-2">
              Realizamos un viaje de 4 días, sin agencia osea que los tours los compramos particular en sedes que consideramos asequibles
            </p>
            <button className="text-blue-600 hover:text-blue-800 text-sm mt-2">Leer más</button>
          </div>
          <div className="text-lg font-semibold text-gray-900">
            <p>$80.000</p>
            <p className="text-sm text-gray-500">/a noche</p>
            <div className="flex items-center mt-1">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <span className="text-sm ml-1">4.84</span>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />

      <div className="space-y-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-2" />
          <span className="font-bold text-gray-800">4.84</span><span className="text-gray-500">(324 reviews)</span>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
  <div className="bg-white p-4 rounded-lg shadow flex items-start">
    <img src="src\assets\Avatar-3.webp" alt="Selena Kye" className="rounded-full h-12 w-12 mr-4" />
    <div>
      <p className="font-bold text-gray-800">Selena Kye</p>
      <p className="text-gray-500">March 2022</p>
      <p>Buena reseña!</p>
    </div>
  </div>
  <div className="bg-white p-4 rounded-lg shadow flex items-start">
    <img src="src\assets\Avatar-4.webp" alt="Jerry Holland" className="rounded-full h-12 w-12 mr-4" />
    <div>
      <p className="font-bold text-gray-800">Jerry Holland</p>
      <p className="text-gray-500">February 2022</p>
      <p>Me gustó mucho el restaurante, gran dato!</p>
    </div>
  </div>
  <div className="bg-white p-4 rounded-lg shadow flex items-start">
    <img src="src\assets\Avatar-5.webp" alt="Frank Rutherford" className="rounded-full h-12 w-12 mr-4" />
    <div>
      <p className="font-bold text-gray-800">Frank Rutherford</p>
      <p className="text-gray-500">February 2022</p>
      <p>El restaurante no es para tanto</p>
    </div>
  </div>
  <div className="bg-white p-4 rounded-lg shadow flex items-start">
    <img src="src\assets\Avatar-6.webp" alt="Emma Willis" className="rounded-full h-12 w-12 mr-4" />
    <div>
      <p className="font-bold text-gray-800">Emma Willis</p>
      <p className="text-gray-500">January 2022</p>
      <p>El hotel es un poco pequeño pero es válido por el precio</p>
    </div>
  </div>
  </div>
        <button className="text-blue-600 hover:text-blue-800 text-sm">Mostrar todos los comentarios</button>
      </div>

      <hr className="my-6 border-gray-300" />

      {/* Footer y demás... */}
      <div className="mt-8 border-t pt-4">
    <footer className="text-center text-sm text-gray-500">
    © 2022 Company, Inc. · 
    <a href="/privacy" className="hover:underline">Privacy</a> · 
    <a href="/terms" className="hover:underline">Terms</a>
     </footer>
    </div>
      </div>
    </>
  );
};

export default DetailsPost;
