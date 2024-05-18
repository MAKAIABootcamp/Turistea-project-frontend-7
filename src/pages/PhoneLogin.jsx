import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Swal from "sweetalert2";
import { auth } from "../firebase/firebaseConfig";
import InsertCode from "./InsertCode";
const phoneRegex = /^[0-9]+$/;

const PhoneLogin = () => {
  const [showValidation, setShowValidation] = useState(true);
  const generateRecaptcha = () => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {},
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const sendSms = (number, recaptchaVerifier) => {
    signInWithPhoneNumber(auth, `+57${number}`, recaptchaVerifier)
      .then((response) => {
        window.confirmationResult = response;
        console.log(response);
        Swal.fire(
          "Excelente",
          `Te enviaremos un mensaje para confirmar a ${number}`,
          "success"
        );
      })
      .then(() => {
        setShowValidation(false)
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "Oops!",
          `Ocurrió un error al realizar tu solicitud ${error.message}`,
          "error"
        );
      });
  };

  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .required("Debe ingresar un teléfono")
        .matches(phoneRegex, "Solo Números")
        .max(10, "Número de celular debe tener máximo 10 dígitos")
        .min(10, "Número de celular debe tener mínimo 10 dígitos"),
    }),
    onSubmit: async (values) => {
      generateRecaptcha(values.phone);
      const appVerifier = window.recaptchaVerifier;
      sendSms(values.phone, appVerifier);
      //   dispatch(actionLoginWithEmailAndPassword(values));
    },
  });
  return (
    showValidation ?
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full flex flex-col justify-center items-center bg-secondary-color rounded-lg px-6 py-8"
      >
        <h2 className="font-title text-center font-bold text-xl md:text-3xl mb-6 text-primary-color">
          Iniciar con número celular
        </h2>
        <div className="mb-5 w-4/5">
          <input
            type="text"
            id="phone"
            className="bg-trasparent border border-highlight-color text-black-text text-sm rounded-xl focus:ring-highlight-color focus:border-highlight-color w-full p-2.5 "
            placeholder="3211234556"
            {...formik.getFieldProps("phone")}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <span className="text-highlight-color text-xs font-semibold">
              {formik.errors.phone}
            </span>
          ) : null}
        </div>
        <button
          type="submit"
          className="w-4/5 font-body md:text-lg sm:text-base text-white bg-highlight-color hover:bg-primary-color hover:border border-primary-color focus:border border-primary-color font-semibold rounded-xl px-5 py-2.5 text-center"
        >
          Enviar código
        </button>
      </form>
      <div id="recaptcha-container"></div>
    </div>
    :
    <InsertCode/>
    
  );
};

export default PhoneLogin;
