import React from "react";
import { Link } from "react-router-dom";
import product2 from "../assets/imagensuccess.png";

const ViewDetails = () => {
  return (
    <section className="flex justify-between w-full h-screen px-10 py-5 mb-4 md:px-20 md:py-10 sm:py-8 sm:px-16">
      <div className="rounded-lg shadow shadow-2xl p-6 border w-2/5 h-full md:w-1/2 sm:w-5/12 flex flex-col items-center">
        <div className="w-full">
          <h2 className="font-semibold w-full mb-2 text-lg md:text-2xl font-title text-highlight-color ">
            Mi Viaje
          </h2>
        </div>
        <ul className="overflow-auto mb-2 w-full">
          <li className="w-full flex p-4 mt-2 shadow-xl rounded-lg border">
            <div className="h-24 w-2/5 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={product2}
                alt="producto2"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="ml-4 w-2/5 flex flex-1 flex-row items-center">
              <div className="w-full flex flex-col">
                <p className="text-gray-input text-xs md:text-sm">Hospedaje</p>
                <Link className="text-sm md:text-base font-bold">
                  Hostal freesould
                </Link>
                <p className="text-gray-input text-xs md:text-sm">
                  Palomino, La Guajira
                </p>
                <p className="text-sm md:text-base font-semibold">
                  $92.000
                  <p className="inline font-normal text-gray-input">/noche</p>
                </p>
              </div>
            </div>
          </li>
          <li className="w-full flex p-4 mt-2 shadow-xl rounded-lg border">
            <div className="h-24 w-2/5 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={product2}
                alt="producto2"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="ml-4 w-2/5 flex flex-1 flex-row items-center">
              <div className="w-full flex flex-col">
                <p className="text-gray-input text-xs md:text-sm">Hospedaje</p>
                <Link className="text-sm md:text-base font-bold">
                  Hostal freesould
                </Link>
                <p className="text-gray-input text-xs md:text-sm">
                  Palomino, La Guajira
                </p>
                <p className="text-sm md:text-base font-semibold">
                  $92.000
                  <p className="inline font-normal text-gray-input">/noche</p>
                </p>
              </div>
            </div>
          </li>
          <li className="w-full flex p-4 mt-2 shadow-xl rounded-lg border">
            <div className="h-24 w-2/5 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={product2}
                alt="producto2"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="ml-4 w-2/5 flex flex-1 flex-row items-center">
              <div className="w-full flex flex-col">
                <p className="text-gray-input text-xs md:text-sm">Hospedaje</p>
                <Link className="text-sm md:text-base font-bold">
                  Hostal freesould
                </Link>
                <p className="text-gray-input text-xs md:text-sm">
                  Palomino, La Guajira
                </p>
                <p className="text-sm md:text-base font-semibold">
                  $92.000
                  <p className="inline font-normal text-gray-input">/noche</p>
                </p>
              </div>
            </div>
          </li>
        </ul>

        <div className="w-full flex flex-col pt-4 mt-6 border-t border-gray-input">
          <div className="w-full flex justify-between">
            <p className="w/1/2 text-sm md:text-base font-semibold text-start font-body text-black-text">
              Total
            </p>
            <p className="w-1/2 text-sm md:text-base font-semibold text-end font-body text-black-text">
              $348.000
            </p>
          </div>
        </div>
      </div>
      <div className="px-1 w-2/5 md:w-5/12 sm:w-3/5 bg-secondary mr-2">
        <h1 className="w-full mb-6 text-base sm:text-2xl md:text-3xl font-title text-highlight-color">
          Tu Ahorro
        </h1>
        <div className="w-full">
          <div className="flex items-center">
            <h2 className="mr-2 text-body font-semibold text-lg md:text-xl text-primary-color">
              Periodicidad:
            </h2>
            <p className="inline text-gray-cards text-body text-sm md:text-base">
              Mensual
            </p>
          </div>
          <div className="flex items-center">
            <h2 className="mr-2 text-body font-semibold text-lg md:text-xl text-primary-color">
              Valor:
            </h2>
            <p className="inline text-gray-cards text-body text-sm md:text-base">
              $125.000
            </p>
          </div>
          <div className="flex items-center">
            <h2 className="mr-2 text-body font-semibold text-lg md:text-xl text-primary-color">
              Fecha Inicio:
            </h2>
            <p className="inline text-gray-cards text-body text-sm md:text-base">
              03 may 2024
            </p>
          </div>
          <div className="flex items-center">
            <h2 className="mr-2 text-body font-semibold text-lg md:text-xl text-primary-color">
              Fecha Finalización:
            </h2>
            <p className="inline text-gray-cards text-body text-sm md:text-base">
              03 ago 2024
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-body font-semibold text-lg md:text-xl mt-6 mb-4 text-black-text">
            Tu Progreso
          </h2>
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-primary-color text-xs font-medium text-secondary-color text-center p-0.5 leading-none rounded-full w-[33%]">
              33%
            </div>
          </div>
        </div>
        <form>
          <h2 className="text-body font-semibold text-lg md:text-xl mt-6 mb-4 text-black-text">
            Marca los ahorros cumplidos
          </h2>

          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              checked={true}
              className="w-4 h-4 text-primary-color bg-gray-100 border-gray-300 rounded focus:ring-transparent"
            />
            <label
              for="link-checkbox"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              03 may 2024 - 03 jun 2024
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-primary-color bg-gray-100 border-gray-300 rounded focus:ring-transparent"
            />
            <label
              for="link-checkbox"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              03 jun 2024 - 03 jul 2024
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              className="w-4 h-4 text-primary-color bg-gray-100 border-gray-300 rounded focus:ring-transparent"
            />
            <label
              for="link-checkbox"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              03 jul 2024 - 03 ago 2024
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ViewDetails;
