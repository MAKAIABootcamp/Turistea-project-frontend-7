import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <section className="flex w-full h-screen">
      <div className="w-1/2 md:w-3/4 sm:w-3/5 bg-[#05050549]">
        {/* <img
          className="h-full w-full  object-cover"
          src={imgPrincipal}
          alt="imgPrincipal"
        /> */}
      </div>
      <div className=" px-4 w-1/2 md:w-1/3 sm:w-5/12 flex flex-col mt-6 items-center">
        <div className="w-full">
          <h2 className="w-full mb-6 text-base sm:text-2xl md:text-3xl font-title text-highlight-color ">
            Detalles de tu Viaje
          </h2>
        </div>
        <div>
          <h1 className="w-full mb-6 text-sm sm:text-base md:text-lg font-title text-primary-color">
            Detalles de tu Viaje
          </h1>
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            <li className="flex py-6">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                  alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <a href="#">Throwback Hip Bag</a>
                    </h3>
                    <p className="ml-4">$90.00</p>
                  </div>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
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
            <li className="flex py-6">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
                  alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <a href="#">Medium Stuff Satchel</a>
                    </h3>
                    <p className="ml-4">$32.00</p>
                  </div>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <p className="text-gray-500">Alimentacion</p>
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
