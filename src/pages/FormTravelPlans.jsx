import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import SelectDate from "../components/SelectDate";

const FormTravelPlans = () => {
  const navigate = useNavigate();
  const [dateSelected, setDateSelected] = useState();
  const { travel } = useSelector((store) => store.travel);

  const formik = useFormik({
    initialValues: {
      days: "",
      persons: "",
      extra: "",
      frecuency:""
    },
    validationSchema: Yup.object({
      days: Yup.string().required(" ingrese un dia"),
    }),
    onSubmit: async (values) => {
      console.log(values,"values")
      // dispatch(actionLoginWithEmailAndPassword(values));
    },
  });

  const handleDateSelected = (date) => {
    console.log("object", date);
    setDateSelected(date);
  };
  return (
    <section className="flex justify-between w-full h-screen px-10 py-5 mb-4 md:px-20 md:py-10 sm:py-8 sm:px-16">
      <div className="px-1 w-2/5 bg-secondary mr-2 border">
        <nav className="flex items-center mb-4">
          <button className="flex" onClick={() => navigate(-1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-gray-input hover:fill-primary-color"
              viewBox="0 0 24 24"
            >
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
            </svg>

            <p className="ms-1 text-sm font-medium text-gray-input hover:text-primary-color md:ms-2">
              Back
            </p>
          </button>
        </nav>
        <h1 className="w-full mb-6 text-base sm:text-2xl md:text-3xl font-title text-highlight-color ">
          Confirma tu plan de ahorros
        </h1>
        <form className="w-full border p-2" onSubmit={formik.handleSubmit}>
          <h2 className="font-body font-semibold text-lg md:text-xl mb-6 text-primary-color text-center">
            ¿Como deseas viajar?
          </h2>
          <div className="w-full flex mb-4 justify-center items-center">
            <label
              htmlFor="date"
              className="w-1/2 text-black-text font-body text-sm md:text-lg"
            >
              ¿Cuando?
            </label>
            <SelectDate className="border border-red-500"  getDate={handleDateSelected} />
          </div>
          <div className="w-full flex justify-start gap-6 items-center">
            <div className="w-2/5 flex">
              <label
                htmlFor="persons"
                className="w-3/4 text-black-text font-body text-sm md:text-lg"
              >
                ¿Cuantas Personas?
              </label>
              <input
                name="persons"
                type="number"
                placeholder="1"
                className="w-2/6 p-2 ms-2 text-center font-body md:text-lg sm:text-sm bg-secondary-color border border-highlight-color text-gray-cards text-sm rounded-lg focus:ring-highlight-color focus:border-highlight-color block w-full"
                {...formik.getFieldProps("persons")}
              />
              {formik.touched.persons && formik.errors.persons ? (
              <span className="text-highlight-color text-xs font-semibold">
                {formik.errors.persons}
              </span>
            ) : null}
            </div>
            <div className="w-2/5 flex flex">
              <label
                htmlFor="days"
                className="w-3/4 text-black-text font-body text-sm md:text-lg"
              >
                ¿Cuantos Dias?
              </label>
              <input
                name="days"
                type="number"
                placeholder="1"
                className="w-2/6 p-2 text-center font-body md:text-lg sm:text-sm bg-secondary-color border border-highlight-color text-gray-cards text-sm rounded-lg focus:ring-highlight-color focus:border-highlight-color block w-1/2"
                {...formik.getFieldProps("days")}
              />
              {formik.touched.days && formik.errors.days ? (
              <span className="text-highlight-color text-xs font-semibold">
                {formik.errors.days}
              </span>
            ) : null}
            </div>
          </div>
          <h2 className="font-body text-start text-lg md:text-xl mt-6 mb-4 text-black-text">
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

          <div className="my-6 flex flex-col justify-center items-center">
            <label
              htmlFor="extra"
              className="font-body text-lg md:text-xl text-black-text"
            >
              ¿Deseas añadir un monto para gastos extra?
            </label>
            <input
              name="extra"
              type="number"
              placeholder="300.000"
              className="p-2 mt-2 text-center font-body md:text-lg sm:text-sm bg-secondary-color border border-highlight-color text-gray-cards text-sm rounded-lg focus:ring-highlight-color focus:border-highlight-color block w-1/2"
            {...formik.getFieldProps("extra")}
            />
            {formik.touched.extra && formik.errors.extra ? (
              <span className="text-highlight-color text-xs font-semibold">
                {formik.errors.extra}
              </span>
            ) : null}
          </div>
          <button
            type="submit"
            className="m-4 w-11/12 font-body md:text-lg sm:text-base text-white bg-highlight-color hover:bg-primary-color hover:border border-primary-color font-semibold rounded-xl px-4 py-2 text-center"
          >
            Confirmar
          </button>
        </form>
      </div>
      <div className=" w-2/5 rounded-lg shadow shadow-2xl p-6 border flex flex-col items-center">
        <div className="w-full">
          <h2 className="w-full mb-2 text-lg md:text-2xl font-title text-highlight-color ">
            Resumen de mi viaje
          </h2>
        </div>
        <ul className="overflow-auto mb-2 w-full">
          {travel?.map((review) => (
            <li
              key={review.id}
              className="w-full flex p-4 mt-2 shadow-xl rounded-lg border"
            >
              <div className="h-24 w-2/5 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="ml-4 w-2/5 flex flex-1 flex-row items-center">
                <div className="w-full flex flex-col">
                  <p className="text-gray-input text-xs md:text-sm">
                    {review.category}
                  </p>
                  <Link className="text-sm md:text-base font-bold">
                    {review.name}
                  </Link>
                  <p className="text-gray-input text-xs md:text-sm">
                    Palomino, La Guajira
                  </p>
                  <span className="text-sm md:text-base font-semibold">
                    {review.price}
                    <p className="inline font-normal text-gray-input">/noche</p>
                  </span>
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
          ))}
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
