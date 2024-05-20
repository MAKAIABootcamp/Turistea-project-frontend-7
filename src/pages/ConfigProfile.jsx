import React from "react";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBell,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { getAuth } from "firebase/auth";
import { updateUserProfile } from "../redux/userAuth/userAuthActions";
import fileUpload from "../services/fileUpload";
const supportedFormats = ["jpg", "png", "webp"];
const ConfigProfile = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName);
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  const handleUpdateProfile = () => {
    dispatch(updateUserProfile(displayName, photoURL));
    setDisplayName(displayName);
    setPhotoURL(photoURL);
  };

  const handleNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  const handleChangefile = (e) => {
    const fileItem = e.target.files[0];
    const photoURL = URL.createObjectURL(fileItem); // Obtiene la URL de la foto
    setPhotoURL(photoURL);
  };

  const handleEdit = () => {
    setEditing(true); // Al hacer clic en "Editar", se activa el modo de edición
  };

  const handleSave = () => {
    dispatch(updateUserProfile(displayName, photoURL));
    setEditing(false); // Al guardar los cambios, se desactiva el modo de edición
  };

  if (!user) {
    return <p>User information is not registered.</p>;
  }

  return (
    <div className="flex flex-row gap-4 h-full w-full justify-evenly">
      <section className="mt-12">
        <h2 className="text-2xl text-primary-color font-title text-center leading-10 font-medium">
          Ajustes de la Cuenta
        </h2>
        <nav className="flex flex-col  w-72 gap-5 pt-7 font-body text-m  h-72 bg-white rounded-lg items-center shadow shadow-gray-300 mt-7 ">
          <li className="list-none text-black bg-white h-10 px-2 pt-2  mx-2   hover:bg-blue-100 w-5/6 rounded-lg">
            <FontAwesomeIcon
              className="w-5 h-5 mx-2 text-highlight-color"
              icon={faUser}
            />
            Información Personal
          </li>
          <li className="list-none text-black bg-white h-10 px-2 pt-2  mx-2  hover:bg-blue-100 w-5/6 rounded-lg">
            <FontAwesomeIcon
              className="w-5 h-5 mx-2 text-highlight-color"
              icon={faBell}
            />
            Privacidad y Seguridad
          </li>
          <li className="list-none text-black bg-white h-10 px-2 pt-2  mx-2  hover:bg-blue-100 w-5/6 rounded-lg">
            <FontAwesomeIcon
              className="w-5 h-5 mx-2 text-highlight-color"
              icon={faTrashCan}
            />
            Eliminar cuenta
          </li>
        </nav>
      </section>

      <section className=" w-4/6 h-full font-body mb-10">
        <div className="relative my-5 mx-5 ">
          <img className="w-40 h-40 rounded-full" src={photoURL} />

          <button className="bg-highlight-color w-8 h-8 absolute top-32 left-3 rounded-full">
            <FontAwesomeIcon
              className="w-5 h-5 text-secondary-color"
              onClick={handleEdit}
              icon={faPencil}
            />
          </button>

          {!editing ? (
            <button className="bg-highlight-color w-8 h-8 absolute top-32 left-3 rounded-full">
              <FontAwesomeIcon
                className="w-5 h-5 text-secondary-color"
                onClick={handleEdit}
                icon={faPencil}
              />
            </button>
          ) : (
            <>
              <input type="file" className="text-highlight-color text-xs font-body mt-10 hover:text-primary-color w-80 h-9 " onChange={handleChangefile} />

              <span
                className="text-highlight-color hover:text-primary-color cursor-pointer"
                onClick={handleSave}
              >
                Guardar
              </span>
            </>
          )}
        </div>

        <div className="px-4 py-2 sm:grid sm:grid-cols-1 sm:px-0 border-gray-300 mr-7">
          <dt className="py-2 flex flex-row justify-between  text-sm font-medium leading-6 font-semibold text-gray-900 sm:px-0 border-gray-300 mr-7">
            Nombre Completo
            {!editing ? (
              <span
                className="text-highlight-color hover:text-primary-color cursor-pointer"
                onClick={handleEdit}
              >
                Editar
              </span>
            ) : (
              <span
                className="text-highlight-color hover:text-primary-color cursor-pointer"
                onClick={handleSave}
              >
                {" "}
                Guardar{" "}
              </span>
            )}
          </dt>
          <dd className="mt-1 text-sm leading-2 text-gray-700 sm:col-span-2 sm:mt-0 divide-y divide-gray-300 border-b py-2">
            {!editing ? (
              <div>{displayName}</div>
            ) : (
              <input
                type="text"
                value={displayName}
                onChange={handleNameChange}
              />
            )}
          </dd>
        </div>
        <div className="px-4 py-2 sm:grid sm:grid-cols-1  sm:px-0 border-gray-300 mr-7">
          <dt className="py-2 flex flex-row justify-between  text-sm font-medium leading-6 font-semibold text-gray-900 sm:px-0 border-gray-300 mr-7">
            Correo electrónico
          </dt>
          <dd className="mt-1 text-sm leading-2 text-gray-700 sm:col-span-2 sm:mt-0 divide-y divide-gray-300 border-b py-2">
            {user.email ? user.email : "No registra"}
          </dd>
        </div>
        <div className="px-4 py-2 sm:grid sm:grid-cols-1  sm:px-0 border-gray-300 mr-7">
          <dt className="py-2 flex flex-row justify-between  text-sm font-medium leading-6 font-semibold text-gray-900 sm:px-0 border-gray-300 mr-7">
            Celular
          </dt>
          <dd className="mt-1 text-sm leading-2 text-gray-700 sm:col-span-2 sm:mt-0 divide-y divide-gray-300 border-b py-2">
            {user.phone ? user.phone : "No registra"}
          </dd>
        </div>
        <div className="px-4 py-2 sm:grid sm:grid-cols-1  sm:px-0 border-gray-300 mr-7">
          <dt className="py-2 flex flex-row justify-between  text-sm font-medium leading-6 font-semibold text-gray-900 sm:px-0 border-gray-300 mr-7">
            Género
          </dt>
          <dd className="mt-1 text-sm leading-2 text-gray-700 sm:col-span-2 sm:mt-0 divide-y divide-gray-300 border-b py-2">
            {user.genero ? user.genero : "No registra"}
          </dd>
        </div>
      </section>
    </div>
  );
};

export default ConfigProfile;
