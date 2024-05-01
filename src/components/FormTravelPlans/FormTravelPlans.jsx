import React from "react";
import { Link } from "react-router-dom";
import product1 from "../../assets/Mote-Donde-Mingo.png";
import product2 from "../../assets/Hostal-freesoul-Palomino-Colombia.jpg";

const FormTravelPlans = () => {
  return (
    <section className="flex justify-between w-full h-screen px-10 py-5 mb-4 md:px-20 md:py-10 sm:py-8 sm:px-16">
      <div className="px-1 w-2/5 md:w-5/12 sm:w-3/5 bg-secondary mr-2">
        <nav class="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 fill-gray-input hover:fill-primary-color"
            viewBox="0 0 24 24"
          >
            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
          </svg>

          <Link class="ms-1 text-sm font-medium text-gray-input hover:text-primary-color md:ms-2">
            Back
          </Link>
        </nav>
        <h1 className="w-full mb-6 text-base sm:text-2xl md:text-3xl font-title text-highlight-color ">
          Confirma tu plan de ahorros
        </h1>
        <form className="w-full">
          <h2 className="text-body font-semibold text-lg md:text-xl my-6 text-black-text">
            ¿Como deseas viajar?
          </h2>
          <div className="flex justify-start gap-6 items-center">
            <div className="w-1/4">
              <label
                htmlFor="date"
                className="text-black-text text-body font-semibold text-sm md:text-lg"
              >
                Fecha
              </label>
              <select
                id="date"
                className="p-2 mt-2 font-body md:text-lg sm:text-sm bg-secondary-color border border-highlight-color text-gray-cards text-sm rounded-lg focus:ring-highlight-color focus:border-highlight-color block w-full"
              >
                <option className="font-body md:text-base sm:text-xs text-black-text">
                  Selecione una fecha
                </option>
                <option className="font-body md:text-base sm:text-xs text-black-text">
                  Jul-27-24
                </option>
              </select>
            </div>
            <div className="w-1/6">
              <label
                htmlFor="persons"
                className="text-black-text text-body font-semibold text-sm md:text-lg"
              >
                Personas
              </label>
              <input
                id="persons"
                type="number"
                placeholder="1"
                className="p-2 mt-2 text-center font-body md:text-lg sm:text-sm bg-secondary-color border border-highlight-color text-gray-cards text-sm rounded-lg focus:ring-highlight-color focus:border-highlight-color block w-full"
              />
            </div>
            <div className="w-1/4 flexflex-col justify-center">
              <label
                htmlFor="days"
                className="text-black-text text-body font-semibold text-sm md:text-lg"
              >
                ¿Cuantos dias?
              </label>
              <input
                id="days"
                type="number"
                placeholder="1"
                className="p-2 mt-2 text-center font-body md:text-lg sm:text-sm bg-secondary-color border border-highlight-color text-gray-cards text-sm rounded-lg focus:ring-highlight-color focus:border-highlight-color block w-1/2"
              />
            </div>
          </div>
          <h2 className="text-body font-semibold text-lg md:text-xl mt-6 mb-4 text-black-text">
            Seleciona la periodicidad de tu ahorrro
          </h2>
          <div className="flex justify-start gap-4 items-center">
            <button
              type="submit"
              className="p-2 text-center font-body md:text-lg sm:text-sm bg-secondary-color border border-highlight-color text-gray-cards hover:text-highlight-color hover:font-bold hover:border-2 dtext-sm rounded-lg focus:ring-highlight-color focus:border-highlight-color"
            >
              Semanal
            </button>
            <button
              type="submit"
              className="p-2 text-center font-body md:text-lg sm:text-sm bg-secondary-color border border-highlight-color text-gray-cards hover:text-highlight-color hover:font-bold hover:border-2 text-sm rounded-lg focus:ring-highlight-color focus:border-highlight-color"
            >
              Quincenal
            </button>
            <button
              type="submit"
              className="p-2 text-center font-body md:text-lg sm:text-sm bg-secondary-color border border-highlight-color text-gray-cards hover:text-highlight-color hover:font-bold hover:border-2 text-sm rounded-lg focus:ring-highlight-color focus:border-highlight-color"
            >
              Mensual
            </button>
          </div>
          <div className="my-6">
            <label
              htmlFor="extra"
              className="text-body font-semibold text-lg md:text-xl text-black-text"
            >
              ¿Deseas añadir un monto para gastos extra?
            </label>
            <input
              id="extra"
              type="number"
              placeholder="300.000"
              className="p-2 mt-2 text-center font-body md:text-lg sm:text-sm bg-secondary-color border border-highlight-color text-gray-cards text-sm rounded-lg focus:ring-highlight-color focus:border-highlight-color block w-1/2"
            />
          </div>
          <button
            type="submit"
            className="m-4 w-11/12 font-body md:text-lg sm:text-base text-white bg-highlight-color hover:bg-primary-color hover:border border-primary-color font-semibold rounded-xl px-4 py-2 text-center"
          >
            Confirmar
          </button>
        </form>
      </div>
      <div className="rounded-lg shadow shadow-2xl p-6 border w-2/5 h-full mb-4 md:w-1/2 sm:w-5/12 flex flex-col items-center">
        <div className="w-full">
          <h2 className="w-full mb-2 text-lg md:text-2xl font-title text-highlight-color ">
            Resumen de mi viaje
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
                <p className="text-gray-input text-xs md:text-sm">Palomino, La Guajira</p>
                <p className="text-sm md:text-base font-semibold">
                  $92.000
                  <p className="inline font-normal text-gray-input">/noche</p>
                </p>
              </div>
              <div className="w-fullflex justify-end">
                <button
                  type="button"
                  className="w-4 h-4 stroke-highlight-color fill-secondary-color hover:fill-highlight-color "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
                  </svg>
                </button>
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
                <p className="text-gray-input text-xs md:text-sm">Palomino, La Guajira</p>
                <p className="text-sm md:text-base font-semibold">
                  $92.000
                  <p className="inline font-normal text-gray-input">/noche</p>
                </p>
              </div>
              <div className="w-fullflex justify-end">
                <button
                  type="button"
                  className="w-4 h-4 stroke-highlight-color fill-secondary-color hover:fill-highlight-color "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
                  </svg>
                </button>
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
                <p className="text-gray-input text-xs md:text-sm">Palomino, La Guajira</p>
                <p className="text-sm md:text-base font-semibold">
                  $92.000
                  <p className="inline font-normal text-gray-input">/noche</p>
                </p>
              </div>
              <div className="w-fullflex justify-end">
                <button
                  type="button"
                  className="w-4 h-4 stroke-highlight-color fill-secondary-color hover:fill-highlight-color "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
        <div className="w-full  divide-y divide-gray-200">
          <div className="w-full flex flex-col mt-6 pb-4">
            <div className="w-full flex justify-between">
              <p className="w/1/2 text-xs md:text-sm text-start font-body text-gray-input">
                $SubTotal
              </p>
              <p className="w-1/2 text-xs md:text-sm text-end font-body text-gray-input">
                $348.000
              </p>
            </div>
            <div className="w-full flex justify-between">
              <p className="w/1/2 text-xs md:text-sm text-start font-body text-gray-input">
                $Monto Extra
              </p>
              <p className="w-1/2 text-xs md:text-sm text-end font-body text-gray-input">
                $0
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col pt-4">
            <div className="w-full flex justify-between">
              <p className="w/1/2 text-xs md:text-sm font-semibold text-start font-body text-black-text">
                Total
              </p>
              <p className="w-1/2 text-xs md:text-sm font-semibold text-end font-body text-black-text">
                $348.000
              </p>
            </div>
            <div className="w-full flex justify-between">
              <p className="w/1/2 text-xs md:text-sm font-semibold text-start font-body text-black-text">
                Valor del ahorro
              </p>
              <p className="w-1/2 text-xs md:text-sm text-end font-semibold font-body text-black-text">
                $0
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormTravelPlans;
