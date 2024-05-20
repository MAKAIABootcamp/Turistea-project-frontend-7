import React, { useState } from "react";
import imgPrincipal from "../assets/imgLogin.jpg";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  actionLoginProvider,
  actionLoginWithEmailAndPassword,
} from "../redux/userAuth/userAuthActions";
import Swal from "sweetalert2";
import { loginFail } from "../redux/userAuth/userAuthSlice";
import { googleProvider } from "../firebase/firebaseConfig";
import PhoneLogin from "./PhoneLogin";

const Login = () => {
  const navigate = useNavigate();

  const { user, isAuth, isLoading, error } = useSelector(
    (store) => store.userAuth
  );
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Por ingrese un correo válido")
        .required("Debe digitar su correo electrónico"),
      password: Yup.string().required("Debe digitar una contraseña"),
    }),
    onSubmit: async (values) => {
      dispatch(actionLoginWithEmailAndPassword(values));
    },
  });

  const handleLoginProvider = (provider) => {
    if (provider) {
      dispatch(actionLoginProvider(provider));
    } else {
      // navigate(`/PhoneLogin`);
      setOpenModal(true);
    }
  };

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
      text: "Error al iniciar sesión",
      icon: "error",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(loginFail(null));
      }
    });
  }

  if (isAuth && user) {
    Swal.fire({
      allowOutsideClick: false,
      title: `Bienvenido ${user.name}`,
      text: "Has ingresado correctamente a Turistea",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  }
  return (
    <section className="flex h-screen">
      <figure className="w-1/2 md:w-3/4 sm:w-3/5">
        <img
          className="h-full w-full  object-cover"
          src={imgPrincipal}
          alt="imgPrincipal"
        />
      </figure>
      <aside className=" w-1/2 md:w-1/3 sm:w-5/12 px-10 lg:px-20 flex flex-col justify-center items-center">
        <Link to={`/`} className="flex items-center mb-8">
          <img src={logo} className="object-cover" alt="Logo" />
        </Link>
        <form
          onSubmit={formik.handleSubmit}
          className="w-full flex flex-col justify-center"
        >
          <div className="mb-5">
            <input
              type="email"
              id="email"
              className="bg-trasparent border border-highlight-color text-black-text text-sm rounded-xl focus:ring-highlight-color focus:border-highlight-color w-full p-2.5 "
              placeholder="name@email.com"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="text-highlight-color text-xs font-semibold">
                {formik.errors.name}
              </span>
            ) : null}
          </div>
          <div className="mb-5">
            <input
              type="password"
              id="password"
              className="bg-trasparent border border-highlight-color text-black-text text-sm rounded-xl focus:ring-highlight-color focus:border-highlight-color w-full p-2.5 "
              placeholder="xxxxxxxx"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <span className="text-highlight-color text-xs font-semibold">
                {formik.errors.password}
              </span>
            ) : null}
          </div>
          <button
            type="submit"
            className="font-body md:text-lg sm:text-base text-white bg-highlight-color hover:bg-primary-color hover:border border-primary-color font-semibold rounded-xl w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Ingresar
          </button>
        </form>
        <p className="text-black-text font-body mt-6 text-sm text-center pb-5 border-b border-gray-input">
          ¿Aún no tienes cuenta?{" "}
          <Link
            to={`/register`}
            className="font-body text-highlight-color underline decoration-solid hover:text-primary-color hover:font-semibold"
          >
            Registrate
          </Link>
        </p>
        <div className="mt-4">
          <button
            onClick={() => handleLoginProvider(googleProvider)}
            className="py-1 px-0.5 border border-highlight-color hover:border-primary-color bg-highlight-color hover:bg-primary-color rounded-full  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-5 fill-secondary-color"
              viewBox="0 0 24 24"
            >
              <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
            </svg>
          </button>
          <button
            onClick={() => handleLoginProvider()}
            className="py-1 mx-2 px-0.5 border border-highlight-color hover:border-primary-color bg-highlight-color hover:bg-primary-color rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-5 fill-secondary-color"
              viewBox="0 0 24 24"
            >
              <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
            </svg>
          </button>
        
          {/* <button className="mx-2 py-1 px-0.5 border border-primary-color bg-primary-color rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-5 fill-secondary-color"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
                </svg>
              </button> */}
        </div>
      </aside>
      {openModal ? (
            <div className="absolute flex justify-center items-center bg-[#05050549] w-screen h-screen">
              <PhoneLogin />
            </div>
          ) : null}

    </section>
  );
};

export default Login;
