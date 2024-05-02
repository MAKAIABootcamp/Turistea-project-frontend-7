import React from "react";

const PlanesDeAhorro = () => (
  <section className="px-10 py-5 md:px-20 md:py-10 sm:py-8 sm:px-16">
    <div className="pb-4 border-b-2 border-primary-line flex justify-between">
      <h1 className="font-bold font-title text-primary-color md:text-3xl sm:text-base xs:text-sm sm:mx-2 ">
        Mis Planes de Ahorro
      </h1>
      <div className="flex gap-2">
        <button className="bg-primary-color rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 fill-secondary-color"
            viewBox="0 0 24 24"
          >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
            <path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"></path>
          </svg>
        </button>
        <button className="bg-primary-color rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 fill-secondary-color"
            viewBox="0 0 24 24"
          >
            <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
          </svg>
        </button>
      </div>
    </div>
    <div className="mt-4">
      <div
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="/docs/images/blog/image-4.jpg"
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default PlanesDeAhorro;
