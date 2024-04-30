import React from "react";
import { Link } from "react-router-dom";
import product1 from "../assets/Mote-Donde-Mingo.png";
import product2 from "../assets/Hostal-freesoul-Palomino-Colombia.jpg";

const Cart = () => {
  return (
    <section className="flex w-full h-screen">
      <div className="w-1/2 md:w-3/4 sm:w-3/5 bg-[#05050549]"></div>
      <div className=" px-4 w-1/2 md:w-1/3 sm:w-5/12 flex flex-col mt-6 items-center">
        <div className="w-full">
          <h1 className="w-full mb-6 text-base sm:text-2xl md:text-3xl font-title text-primary-color ">
            Detalles de tu Viaje
          </h1>
        </div>
        <div>
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            <li className="w-full flex py-6">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={product1}
                  alt="mote"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="ml-4 flex flex-1 flex-col">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <Link href="#">Mote de queso</Link>
                  </h3>
                  <p className="ml-4">$30.000</p>
                </div>
                <div className="flex items-end justify-between text-sm">
                  <p className="text-gray-500">Alimentación</p>
                  <div className="flex">
                    <button
                      type="button"
                      className="w-6 h-6 stroke-primary-color fill-secondary-color hover:fill-primary-color "
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
              </div>
            </li>
            <li className="w-full flex py-6">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={product2}
                  alt="producto2"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="ml-4 flex flex-1 flex-col">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <Link href="#">Hostal freesould</Link>
                    </h3>
                    <p className="ml-4">$92.000</p>
                  </div>
                <div className="flex items-end justify-between text-sm">
                  <p className="text-gray-500">Hospedaje</p>
                  <div className="flex">
                    <button
                      type="button"
                      className="w-6 h-6 stroke-primary-color fill-secondary-color hover:fill-primary-color "
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
              </div>
            </li>
          </ul>
        </div>

        <button
          type="submit"
          className=" mt-6 font-body md:text-lg sm:text-base text-white bg-highlight-color hover:bg-primary-color hover:border border-primary-color font-semibold rounded-xl w-full px-4 py-2 text-center"
        >
          Completar
        </button>
      </div>
    </section>
  );
};

export default Cart;
