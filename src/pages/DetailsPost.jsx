import React from 'react';

const DetailsPost = () => {
  return (
    <>
    <div className="flex justify-between items-center py-2">
    <div>
    <h1 className="mb-3 font-body md:text-2xl sm:text-base xs:text-sm font-bold text-gray-800 ml-20">Experiencia Relajante En Hotel Caribe</h1>
    <div className="flex items-center mt-1 ml-20">
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#4CAF50"/>
          </svg>
        <span className="ml-1 font-montserrat text-12 font-bold">4.84</span>
        <span className="mx-2">·</span>
        <span className="font-montserrat text-18">Cartagena, Colombia</span>
    </div>
</div>
<div className="flex -ml-16">
  <button className="flex items-center transition-colors ml-4 mr-10">
  <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 inline mr-2 fill-highligth-color"
    >
      <path d="M12.89 5.87891H5.11C3.4 5.87891 2 7.27891 2 8.98891V20.3489C2 21.7989 3.04 22.4189 4.31 21.7089L8.24 19.5189C8.66 19.2889 9.34 19.2889 9.75 19.5189L13.68 21.7089C14.96 22.4089 16 21.7989 16 20.3489V8.98891C16 7.27891 14.6 5.87891 12.89 5.87891Z" fill="#ffa317"/>
      <path d="M21.9998 5.11V16.47C21.9998 17.92 20.9598 18.53 19.6898 17.83L17.7598 16.75C17.5998 16.66 17.4998 16.49 17.4998 16.31V8.99C17.4998 6.45 15.4298 4.38 12.8898 4.38H8.81984C8.44984 4.38 8.18984 3.99 8.35984 3.67C8.87984 2.68 9.91984 2 11.1098 2H18.8898C20.5998 2 21.9998 3.4 21.9998 5.11Z" fill="#ffa317"/>
    </svg>
    <span className="ml-1 font-montserrat text-18 text-black">Guardar</span>
  </button>
</div>
    </div>
    <div className="mt-4 flex gap-2 ml-20">
  {/* Contenedor para la imagen principal */}
  <div className="md:col-span-3 self-start" style={{ marginTop: '-2px' }}>  {/* Ajuste el margen superior */}
    <img
      src="src/assets/Image-19.webp" 
      alt="Calle de Cartagena"
      className="w-889 h-668 object-cover rounded-lg"
    />
  </div>
  
  {/* Contenedor para las imágenes pequeñas */}
  <div className="flex flex-col space-y-2">
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
<div className="mt-4 p-4 bg-white rounded-lg shadow ml-20">
  <div className="flex justify-between items-start">
    <div>
    <h2 className="text-lg font-semibold text-gray-900">Reserva</h2>
      <p className="text-sm text-gray-500">
        {/* SVG integrado para el icono de calendario */}
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#4CAF50" stroke="none">
            <path d="M969 5092 c-39 -20 -62 -41 -84 -77 l-30 -48 -3 -244 -4 -243 -136 0 c-168 0 -249 -16 -361 -72 -166 -82 -299 -253 -336 -433 -13 -60 -15 -316 -15 -1735 0 -1859 -4 -1738 72 -1890 73 -145 203 -257 370 -318 l73 -27 2012 -3 c2250 -3 2088 -8 2242 70 149 75 272 221 324 383 l22 70 0 1715 0 1715 -22 70 c-52 163 -175 309 -323 383 -111 55 -192 72 -362 72 l-136 0 -4 243 -3 244 -30 48 c-22 36 -45 57 -84 77 -51 27 -59 28 -202 28 -163 0 -200 -9 -252 -58 -64 -60 -67 -77 -67 -342 l0 -240 -1070 0 -1070 0 0 235 c0 256 -4 281 -58 339 -52 56 -91 66 -258 66 -147 0 -153 -1 -205 -28z m3719 -3320 l-3 -1209 -27 -39 c-15 -21 -44 -50 -65 -64 l-37 -25 -1996 0 -1997 0 -39 27 c-21 15 -50 44 -64 65 l-25 37 -3 1208 -2 1208 2130 0 2130 0 -2 -1208z"/>
          </g>
        </svg>
          Julio 22, 2024
      </p>
      <p className="text-sm text-gray-500">
        {/* SVG personalizado para el icono de localización */}
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#4CAF50" xmlns="http://www.w3.org/2000/svg" className="inline mr-2">
          <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Cartagena, Colombia
      </p>
      <p className="text-sm text-gray-500">
        <svg fill="#4CAF50" height="20px" width="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2 text-green-500">
          <g>
            <path d="M480.7,501H31.5c-11.3,0-20.4-9.1-20.4-20.4V31.4c0-11.3,9.1-20.4,20.4-20.4h449.2c11.3,0,20.4,9.1,20.4,20.4v449.2      C501.1,491.9,491.9,501,480.7,501z M51.9,460.2h408.3V51.8H51.9V460.2z"/>
            <path d="M136.5,408.4V103.6h40.3v125.2h158.4V103.6h40.3v304.8h-40.3V264.7H176.9v143.7H136.5z"/>
          </g>
        </svg>
        Hotel Caribe
      </p>
      <p className="text-sm text-gray-500">
      <svg
      fill="#4CAF50"
      height="20px"
      width="20px"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 inline mr-2"
    >
      <path d="M57.49,47.74,425.92,416.17a37.28,37.28,0,0,1,0,52.72h0a37.29,37.29,0,0,1-52.72,0l-90-91.55A32,32,0,0,1,274,354.91v-5.53a32,32,0,0,0-9.52-22.78l-11.62-10.73a32,32,0,0,0-29.8-7.44h0A48.53,48.53,0,0,1,176.5,295.8L91.07,210.36C40.39,159.68,21.74,83.15,57.49,47.74Z" fill="none" stroke="#4CAF50" strokeLinejoin="round" strokeWidth="32px"/>
      <path d="M400,32l-77.25,77.25A64,64,0,0,0,304,154.51v14.86a16,16,0,0,1-4.69,11.32L288,192" fill="#4CAF50" stroke="#4CAF50" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px"/>
      <path d="M320,224l11.31-11.31A16,16,0,0,1,342.63,208h14.86a64,64,0,0,0,45.26-18.75L480,112" fill="#4CAF50" stroke="#4CAF50" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px"/>
      <line x1="440" y1="72" x2="360" y2="152" fill="#4CAF50" stroke="#4CAF50" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px"/>
      <path d="M200,368,100.28,468.28a40,40,0,0,1-56.56,0h0a40,40,0,0,1,0-56.56L128,328" fill="#4CAF50" stroke="#4CAF50" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px"/>
    </svg>
        El coste
      </p>
            <p className="text-sm text-gray-500">
            <svg
      fill="#4CAF50"
      height="20px"
      width="20px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 inline mr-2"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M5 1C4.44772 1 4 1.44772 4 2V22C4 22.5523 4.44772 23 5 23C5.55228 23 6 22.5523 6 22V15.693L18.8542 10.8727C20.5846 10.2238 20.5846 7.77627 18.8542 7.12739L6 2.30705V2C6 1.44772 5.55228 1 5 1ZM6 4.44305V13.557L17.6526 9.18732C17.8256 9.12243 17.8256 8.87767 17.6526 8.81278L6 4.44305Z" fill="#4CAF50"/>
    </svg>
              Actividades, tours
            </p>
            <p className="text-gray-700 mt-2">
              Realizamos un viaje de 4 días, sin agencia osea que los tours los compramos particular en sedes que consideramos asequibles
            </p>
            <button className="text-primary-color hover:text-primary-color text-sm mt-2">Leer más</button>
          </div>
          <div className="flex items-center text-lg font-semibold text-gray-900" style={{ marginRight: '95px' }}>
          <p className="mr-2">${"80.000"}</p>
          <p className="text-sm text-gray-500 mr-2">/la noche</p>
            <div className="flex items-center">
            <div className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#4CAF50"/>
          </svg>
          </div>
              <span className="text-sm ml-1">4.84</span>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />

      <div className="space-y-4">
        <div className="flex items-center">
        <div className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#4CAF50"/>
      </svg>
      </div>
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
  <button
  class="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-color hover:text-white  hover:bg-primary-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color transition-colors duration-150"
>
  Mostrar todos los comentarios
</button>

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
