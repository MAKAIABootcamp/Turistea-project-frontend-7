import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { actionLoginPhoneWithCode } from "../redux/userAuth/userAuthActions";

const InsertCode = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: Yup.object({
      code: Yup.string()
        .required("Debe ingresar un código")
        .max(6, "Código debe tener máximo 10 dígitos")
        .min(6, "Código debe tener mínimo 10 dígitos"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      dispatch(actionLoginPhoneWithCode(values.code));
    },
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full flex flex-col justify-center items-center bg-secondary-color rounded-lg px-6 py-8"
      >
        <h2 className="font-title text-center font-bold text-xl md:text-2xl mb-6 text-primary-color">
          Ingrese el código de verificación
        </h2>
        <div className="mb-5 w-4/5">
          <input
            type="text"
            id="code"
            className="bg-trasparent border border-highlight-color text-black-text text-sm rounded-xl focus:ring-highlight-color focus:border-highlight-color w-full p-2.5 "
            placeholder="xxxxxx"
            {...formik.getFieldProps("code")}
          />
          {formik.touched.code && formik.errors.code ? (
            <span className="text-highlight-color text-xs font-semibold">
              {formik.errors.code}
            </span>
          ) : null}
        </div>
        <button
          type="submit"
          className="w-4/5 font-body md:text-lg sm:text-base text-white bg-highlight-color hover:bg-primary-color hover:border border-primary-color focus:border border-primary-color font-semibold rounded-xl px-5 py-2.5 text-center"
        >
          Iniciar
        </button>
      </form>
    </div>
  );
};

export default InsertCode;
