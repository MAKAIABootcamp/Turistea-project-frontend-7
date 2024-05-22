import React, { useState } from "react";
import backgroundImage from "../assets/fondoRegister.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import fileUpload from "../services/fileUpload";
import { actionRegisterWithEmailAndPassword } from "../redux/userAuth/userAuthActions";
import Swal from "sweetalert2";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,16}$/;
const supportedFormats = ["jpg", "png", "webp"];

const Register = () => {
  const [img, setImg] = useState(null);
  const [touchedPhoto, setTouchedPhoto] = useState(false);

  const navigate = useNavigate();
  const { isAuth, isLoading, error } = useSelector((store) => store.userAuth);
  const dispatch = useDispatch();

  const handleChangefile = (event) => {
    const fileItem = event.target.files[0];
    setImg(fileItem);
    setTouchedPhoto(true);
    formik.values.photo = fileItem? fileItem.name : ''
    console.log(formik.values.photo)
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      photo: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "El nombre no debe exceder los 20 caracteres")
        .required("Debe digitar su nombre completo"),
      email: Yup.string()
        .email("Por ingrese un correo válido")
        .required("Debe digitar su correo electrónico"),
      password: Yup.string()
        .required("Debe digitar una contraseña")
        .matches(
          passwordRegex,
          "Contraseña debe tener una minúscula, una mayúscula y al menos un caracter no alfanumérico,(min 8 caracteres - max 16 caracteres)."
        ),
      photo: Yup.mixed()
        .required("Seleccione una foto de perfil")
        .test("fileFormat", "Solo archivos .jpg .png .webp", (value) => {
          if (value) {
            return supportedFormats.includes(value.split(".").pop());
          }
          return true;
        }),
    }),
    onSubmit: async (values) => {
      const photoProfile = await fileUpload(img);
      values.photo = photoProfile;
      dispatch(actionRegisterWithEmailAndPassword(values));
    },
  });

  if (isLoading)
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

  if (error) {
    Swal.fire({
      position: "top-end",
      allowOutsideClick: false,
      text: "Ha ocurrido un error al crear la cuenta",
      icon: "error",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(loginFail(null))
      }
    });
  }

  if (isAuth) {
    Swal.fire({
      position: "top-end",
      allowOutsideClick: false,
      text: "Has creado tu cuenta con exito",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
  }

  return (
    <div
      className="bg-cover bg-center  flex flex-col items-center  h-screen "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <form
        onSubmit={formik.handleSubmit}
        className="w-2/4 h-11/12 mt-7 py-5 flex flex-col items-center font-body bg-white rounded-2xl"
      >
        <h1 className="font-title text-4xl mb-6 text-primary-color">
          Registrate
        </h1>
        <div className="mb-5 w-2/3">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 font-semibold text-primary-color"
          >
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            className="bg-trasparent border border-highlight-color text-black-text text-sm rounded-xl focus:ring-3 focus:ring-highlight-color focus:border-highlight-color w-full p-2.5 "
            placeholder="Pepito Perez"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <span className="text-highlight-color text-xs font-semibold">
              {formik.errors.name}
            </span>
          ) : null}
        </div>
        <div className="mb-5 w-2/3">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 font-semibold text-primary-color"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            className="bg-trasparent border border-highlight-color text-black-text text-sm rounded-xl focus:ring-3 focus:ring-highlight-color focus:border-highlight-color w-full p-2.5 "
            placeholder="name@email.com"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <span className="text-highlight-color text-xs font-semibold">
              {formik.errors.email}
            </span>
          ) : null}
        </div>
        <div className="mb-5 w-2/3">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-semibold  text-primary-color"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="bg-trasparent border border-highlight-color text-black-text text-sm rounded-xl focus:ring-3 focus:ring-highlight-color focus:border-highlight-color w-full p-2.5"
            placeholder="xxxxx"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <span className="w-4/5 text-highlight-color text-xs font-semibold">
              {formik.errors.password}
            </span>
          ) : null}
        </div>
        <div className="mb-5 w-2/3">
          <label
            htmlFor="photo"
            className="block mb-2 text-sm font-semibold  text-primary-color"
            onClick={()=>setTouchedPhoto(true)}
          >
            Foto de perfil
            <div className="mt-2 bg-trasparent border border-highlight-color text-black-text text-sm rounded-xl focus:ring-3 focus:ring-highlight-color focus:border-highlight-color w-full p-2.5">
              <span className="text-sm text-gray-500 font-normal">
                {img ? img.name : "Selecione un archivo"}
              </span>
            </div>
          </label>
          <input
            className="hidden w-full text-sm text-transparent rounded-xl cursor-pointer bg-trasparent focus:ring-3 focus:ring-highlight-color focus:border-highlight-color"
            id="photo"
            type="file"
            onChange={(e)=> handleChangefile(e)}
          />
          {touchedPhoto && formik.errors.photo ? (
            <span className="text-highlight-color text-xs font-semibold">
              {formik.errors.photo}
            </span>
          ) : null}
        </div>
        <button
          type="submit"
          className="text-white w-3/4 font-body bg-highlight-color hover:bg-primary-color hover:border border-primary-color font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Ingresar
        </button>
        <p className="text-black-text font-body mt-6 text-sm text-center">
          ¿Ya tienes una cuenta?{" "}
          <Link
            to={`/login`}
            className="font-body text-highlight-color underline decoration-solid hover:text-primary-color hover:font-semibold"
          >
            Inicia sesión aqui
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
