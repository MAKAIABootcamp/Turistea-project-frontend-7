import React, { useState } from "react";
import { differenceInDays } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import SelectDate from "../components/SelectDate";
import "../index.scss";
import Swal from "sweetalert2";
import { actionAddTravelPlans } from "../redux/travelPlan/travelPlanActions";

const FormTravelPlans = () => {
  const navigate = useNavigate();
  const [dateSelected, setDateSelected] = useState("");
  const [savingValue, setSavingValue] = useState("");
  const [frecuency, setFrecuency] = useState("");
  const { luggage } = useSelector((store) => store.travels);
  const {isLoadingTravelPlans,errorTravelPlans, travelPlansFail , success} = useSelector ((store) => store.travelsPlan )
  const { user } = useSelector((store) => store.userAuth);
  
  const dispatch = useDispatch()

  const calculateSubtotal = (persons, days) => {
    let accumulator = 0;
    luggage.map((items) => {
      accumulator += items.price;
    });
    return accumulator * persons * days;
  };

  const calculateValueSaving = (total, frecuency, date) => {
    const today = new Date();
    const datePlan = new Date(date);

    const daysDifference = differenceInDays(datePlan, today);
    // console.log(daysDifference, "dias");

    const months = daysDifference / 30 ;
    const biweekly = months * 2;
    const weeks = months * 4;

    let valueSaving =null

    switch (frecuency) {
      case "Semanal":
        valueSaving =total / weeks, "sem";
        break;
      case "Quincenal":
        valueSaving = total / biweekly;
        break;
      case "Mensual":
        valueSaving = total / months;
        break;
    }
    return  Math.round(valueSaving)
  };

    
  const handleDateSelected = (date) => {
    setDateSelected(date);
  };

  const formik = useFormik({
    initialValues: {
      days: "",
      persons: "",
      extra: "",
      savings:""
    },
    validationSchema: Yup.object({
      days: Yup.number()
        .min(1, "Debe ser como mínimo 1")
        .required("Ingrese un día"),
      persons: Yup.number()
        .min(1, "Debe ser como mínimo 1")
        .required("Ingrese al menos una persona"),
      extra: Yup.number()
        .min(20000, "Debe ser como mínimo 20000")
        .required("Ingrese un valor extra"),
    }),
    onSubmit: async (values) => {
      
      if (dateSelected != "" && frecuency != "" && luggage.length>0 ) {
        values.dateEnd = dateSelected;
        values.dateStart = new Date();
        values.frecuency = frecuency;
        values.subtotal = calculateSubtotal(values.persons, values.days);
        values.total = values.subtotal + values.extra;
        values.savings= calculateValueSaving(values.total, values.frecuency, values.date);
        values.travels= luggage;
        values.userId= user.id
        dispatch(actionAddTravelPlans(values))
      }
      else{
        Swal.fire({
          position: "top-end",
          allowOutsideClick: false,
          text: "Campos incompletos",
          icon: "error",
        });
      }
    },
  });

  if (isLoadingTravelPlans)
    return (
      <div className="flex px-12">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-6 h-6 text-gray-200 animate-spin fill-highlight-color"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
        <h2 className="ms-2">Cargando...</h2>
      </div>
    );

  if (errorTravelPlans) {
    Swal.fire({
      position: "top-end",
      allowOutsideClick: false,
      text: "Ha ocurrido un error al crear el plan de ahorro",
      icon: "error",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(travelPlansFail(null))
      }
    });
  };

  if (success) {
    Swal.fire({
      allowOutsideClick: false,
      title: `Creado`,
      text: "Has creado correctamente tu plan de ahorros",
      icon:"success"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/myProfile");
      }
    });
  }

  return (
    <section className="flex justify-between w-full h-screen px-10 py-5 mb-4 md:px-20 md:py-10 sm:py-8 sm:px-16">
      <div className="px-1 w-1/2 lg:w-2/5 bg-secondary mr-2 ">
        <nav className="flex items-center mb-4">
          <button className="flex items-center " onClick={() => navigate(-1)}>
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
        <h1 className="w-full mb-6  text-base sm:text-2xl md:text-3xl font-title text-highlight-color ">
          Confirma tu plan de ahorros
        </h1>
        <form className="w-full p-2 ms-2" onSubmit={formik.handleSubmit}>
          <h2 className="font-body font-semibold text-lg md:text-xl mb-8 text-primary-color text-start">
            ¿Como deseas viajar?
          </h2>
          <div className="w-full flex mb-4 justify-center items-center">
            <label
              htmlFor="date"
              className="w-1/2 text-black-text font-body text-sm md:text-lg"
            >
              ¿Cuando?
            </label>
            <SelectDate
              className="border border-red-500"
              getDate={handleDateSelected}
            />
          </div>
          <div className="w-full flex justify-start gap-6 items-center">
            <div className="w-2/5 flex items-center justify-around">
              <label
                htmlFor="persons"
                className="w-3/4 text-black-text font-body text-sm md:text-lg"
              >
                ¿Cuantas Personas?
              </label>
              <input
                name="persons"
                type="number"
                className="w-2/6 h-3/4 p-2 ms-2 text-center font-body md:text-lg sm:text-sm bg-secondary-color border border-highlight-color text-gray-cards text-sm rounded-lg focus:ring-highlight-color focus:border-highlight-color block"
                {...formik.getFieldProps("persons")}
              />
            </div>
            <div className="w-2/5 flex items-center justify-around">
              <label
                htmlFor="days"
                className="w-3/4 text-black-text font-body text-sm md:text-lg"
              >
                ¿Cuantos Dias?
              </label>
              <input
                name="days"
                type="number"
                className="w-2/6 h-3/4 p-2 md:text-base text-sm  text-center font-body md:text-lg sm:text-sm bg-secondary-color border border-highlight-color text-gray-cards text-sm rounded-lg focus:ring-highlight-color focus:border-highlight-color block"
                {...formik.getFieldProps("days")}
              />
            </div>
          </div>
          {formik.touched.persons && formik.errors.persons ? (
            <span className="w-full text-highlight-color text-xs font-semibold">
              {formik.errors.persons}
            </span>
          ) : null}
          {formik.touched.days && formik.errors.days ? (
            <span className=" ms-4 text-highlight-color text-xs font-semibold">
              {formik.errors.days}
            </span>
          ) : null}
          <h2 className="font-body text-start text-base md:text-lg mt-6 mb-4 text-black-text">
            Seleciona la periodicidad de tu ahorrro
          </h2>
          <div className="flex justify-start gap-4 items-center">
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setFrecuency("Semanal");
              }}
              className={`p-2 text-center font-body md:text-base text-sm bg-secondary-color border border-highlight-color text-gray-cards ${
                frecuency == "Semanal"
                  ? "text-highlight-color font-bold border-2 ring-highlight-color border-highlight-color"
                  : ""
              } hover:text-highlight-color hover:font-bold hover:border-2 text-sm rounded-lg focus:ring-highlight-color focus:border-highlight-color`}
            >
              Semanal
            </button>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setFrecuency("Quincenal");
              }}
              className={`p-2 text-center font-body md:text-base text-sm bg-secondary-color border border-highlight-color text-gray-cards ${
                frecuency == "Quincenal"
                  ? "text-highlight-color font-bold border-2 ring-highlight-color border-highlight-color"
                  : ""
              } hover:text-highlight-color hover:font-bold hover:border-2 text-sm rounded-lg focus:ring-highlight-color focus:border-highlight-color`}
            >
              Quincenal
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setFrecuency("Mensual");
              }}
              type="submit"
              className={`p-2 text-center font-body md:text-base text-sm bg-secondary-color border border-highlight-color text-gray-cards ${
                frecuency == "Mensual"
                  ? "text-highlight-color font-bold border-2 ring-highlight-color border-highlight-color"
                  : ""
              } hover:text-highlight-color hover:font-bold hover:border-2 text-sm rounded-lg focus:ring-highlight-color focus:border-highlight-color`}
            >
              Mensual
            </button>
          </div>

          <div className="my-6 flex flex-col items-start ">
            <label
              htmlFor="extra"
              className="font-body text-base md:text-lg text-black-text"
            >
              Añade un monto para gastos extra o imprevistos
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
      <div className=" w-1/2 lg:w-2/5 rounded-lg shadow shadow-2xl p-6 border flex flex-col items-center">
        <div className="w-full">
          <h2 className="w-full mb-2 text-lg md:text-2xl font-title text-highlight-color ">
            Resumen de mi viaje
          </h2>
        </div>
        <ul className="overflow-auto mb-2 w-full">
          {luggage?.map((review) => (
            <li
              key={review.id}
              className="w-full flex p-4 mt-2 shadow-xl rounded-lg border"
            >
              <div className="h-24 w-2/5 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={review.mainImage}
                  alt={review.namePlace}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="ml-4 w-2/5 flex flex-1 flex-row items-center">
                <div className="w-full flex flex-col">
                  <p className="text-gray-input text-xs md:text-sm">
                    {review.typeReviews}
                  </p>
                  <Link className="text-sm md:text-base font-bold">
                    {review.namePlace}
                  </Link>
                  <p className="text-gray-input text-xs md:text-sm">
                    Palomino, La Guajira
                  </p>
                  <span className="text-sm md:text-base font-semibold">
                    ${review.price.toLocaleString("es-ES")}
                    <p className="inline font-normal text-gray-input">
                      {" "}
                      /
                      {review.typeReviews.toLowerCase() == "alojamiento"
                        ? "noche"
                        : review.typeReviews.toLowerCase() == "alimentación"
                        ? "plato"
                        : review.typeReviews.toLowerCase() == "planes"
                        ? "actividad"
                        : null}
                    </p>
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
                ${calculateSubtotal(formik.values.persons, formik.values.days)}
              </p>
            </div>
            <div className="w-full flex justify-between">
              <p className="w/1/2 text-xs md:text-sm text-start font-body text-gray-input">
                $Monto Extra
              </p>
              <p className="w-1/2 text-xs md:text-sm text-end font-body text-gray-input">
                ${formik.values.extra || 0}
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col pt-4">
            <div className="w-full flex justify-between">
              <p className="w/1/2 text-xs md:text-sm font-semibold text-start font-body text-black-text">
                Total
              </p>
              <p className="w-1/2 text-xs md:text-sm font-semibold text-end font-body text-black-text">
                $
                {calculateSubtotal(formik.values.persons, formik.values.days) +
                  formik.values.extra || 0}
              </p>
            </div>
            <div className="w-full flex justify-between">
              <p className="w/1/2 text-xs md:text-sm font-semibold text-start font-body text-black-text">
                Valor del ahorro
              </p>
              <p className="w-1/2 text-xs md:text-sm text-end font-semibold font-body text-black-text">
                ${calculateValueSaving(calculateSubtotal(formik.values.persons, formik.values.days) + formik.values.extra, frecuency, dateSelected)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormTravelPlans;
