import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationPin,
  faHotel,
  faUtensils,
  faPersonHiking,
} from "@fortawesome/free-solid-svg-icons";
const SuccessPlan = () => {
  return (
    <div className="flex flex-col  items-center">
      <div className="flex flex-col my-14  shadow-orange-200 items-center shadow-md w-8/12 h-max">
        <img className="w-64 h-60" src="src/assets/imagensuccess.png" />
        <h1 className="font-title text-3xl mb-10 font-bold"> Todo listo, buen viaje!</h1>
        <section className="flex flex-col gap-5">
          <div className="flex flex-row gap-2 items-center font-body text-m">
            <FontAwesomeIcon icon={faCalendar} className="text-highlight-color" />
            <p> Mayo 3, 2024</p>
          </div>
          <div className="flex flex-row gap-2 items-center font-body text-m">
            <FontAwesomeIcon icon={faLocationPin} className="text-highlight-color" />
            <p> Cartagena, Colombia</p>
          </div>
          <div className="flex flex-row gap-2 items-center font-body text-m">
            <FontAwesomeIcon icon={faHotel} className="text-highlight-color"/>
            <p> Hotel Caribe</p>
          </div>
          <div className="flex flex-row gap-2 items-center font-body text-m">
            <FontAwesomeIcon icon={faUtensils} className="text-highlight-color" />
            <p> El coste </p>
          </div>
          <div className="flex flex-row gap-2 items-center font-body text-m">
            <FontAwesomeIcon icon={faPersonHiking} className="text-highlight-color"/>
            <p>
              Actividades principales: Senderismo, Cabalgata , visita a lugares
              coloniales.
            </p>
          </div>
        </section>
        <button className="text-white bg-highlight-color hover:bg-primary-color hover:border border-primary-color font-body text-m rounded-lg w-80 font-bold h-10 mt-6 mb-4"> Ver mi plan de viaje </button>
      </div>
    </div>
  );
};

export default SuccessPlan;
