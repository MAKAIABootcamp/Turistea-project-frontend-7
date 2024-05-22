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
import { Link, useNavigate } from "react-router-dom";
import { getAuth, updateProfile, deleteUser } from "firebase/auth";
import { updateUserProfile } from "../redux/userAuth/userAuthActions";
import fileUpload from "../services/fileUpload";
const supportedFormats = ["jpg", "png", "webp"];
import Swal from 'sweetalert2'
const ConfigProfile = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [currentSection, setCurrentSection] = useState('personalInfo'); // State to track current section

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName);
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  const handleUpdateProfile = async () => {
    try {
      await updateProfile(user, {
        displayName,
        photoURL,
      });
      dispatch(updateUserProfile(displayName, photoURL));
      setEditing(false);
    } catch (error) {
      console.error("Error al subir los cambios al Perfil:", error);
    }
  };

  const handleNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  const handleChangeFile = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadedUrl = await fileUpload(file);
      if (uploadedUrl) {
        setPhotoURL(uploadedUrl);
        await updateProfile(user, { photoURL: uploadedUrl });
        dispatch(updateUserProfile(displayName, uploadedUrl));
      } else {
        console.error("Error al subir el archivo al Cloundinary.");
      }
    }
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    handleUpdateProfile();
  };

  const handleDeleteAccount = async () => {
    Swal.fire({
      title: "¿Estas seguro que quieres eliminar tu cuenta? Esta acción no se puede revertir.",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Eliminar",
      denyButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          
          await deleteUser(auth.currentUser); 
          navigate("/login"); 
          Swal.fire("Se eliminó tu cuenta exitosamente", "", "success");
        } catch (error) {
          console.error("Error al eliminar la cuenta:", error);
          Swal.fire("Hubo un error al eliminar tu cuenta", "", "error");
        }
      }
    });
  }

  if (!user) {
    return <p>Informacion del usuario no registrado.</p>;
  }

  return (
    <div className="flex flex-row max-[680px]:flex-col gap-4 h-full w-full justify-evenly">
      <section className="mt-12 max-[680px]:px-10">
        <h2 className="text-2xl text-primary-color font-title text-center leading-10 font-medium">
          Ajustes de la Cuenta
        </h2>
        <nav className="flex flex-col w-72 max-[680px]:w-full gap-5 pt-7 font-body text-m h-72 bg-white rounded-lg items-center shadow shadow-gray-300 mt-7">
          <li
            className="list-none text-black bg-white h-10 px-1 pt-2 mx-2 hover:bg-blue-100 w-5/6 rounded-lg cursor-pointer"
            onClick={() => setCurrentSection('personalInfo')}
          >
            <FontAwesomeIcon
              className="w-5 h-5 mx-2 text-highlight-color"
              icon={faUser}
            />
            Información Personal
          </li>
          
          <li
            className="list-none text-black bg-white h-10 px-1 pt-2 mx-2 hover:bg-blue-100 w-5/6 rounded-lg cursor-pointer"
            onClick={handleDeleteAccount}
          >
            <FontAwesomeIcon
              className="w-5 h-5 mx-2 text-highlight-color"
              icon={faTrashCan}
            />
            Eliminar cuenta
          </li>
        </nav>
      </section>

      {currentSection === 'personalInfo' && (
        <section className="w-4/6 h-full max-[680px]:w-full max-[680px]:px-10 font-body mb-10">
          <div className="relative my-5 mx-5 max-[680px]:justify-center">
            <img className="w-40 h-40 rounded-full cover" src={photoURL} alt="User Profile" />

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
                <input
                  type="file"
                  accept={supportedFormats.map((format) => `.${format}`).join(",")}
                  className="text-highlight-color text-xs font-body mt-10 hover:text-primary-color w-80 h-9"
                  onChange={handleChangeFile}
                />
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
            <dt className="py-2 flex flex-row justify-between text-sm font-medium leading-6 font-semibold text-gray-900 sm:px-0 border-gray-300 mr-7">
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
                  Guardar
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
          <div className="px-4 py-2 sm:grid sm:grid-cols-1 sm:px-0 border-gray-300 mr-7">
            <dt className="py-2 flex flex-row justify-between text-sm font-medium leading-6 font-semibold text-gray-900 sm:px-0 border-gray-300 mr-7">
              Correo electrónico
            </dt>
            <dd className="mt-1 text-sm leading-2 text-gray-700 sm:col-span-2 sm:mt-0 divide-y divide-gray-300 border-b py-2">
              {user.email ? user.email : "No registra"}
            </dd>
          </div>
          <div className="px-4 py-2 sm:grid sm:grid-cols-1 sm:px-0 border-gray-300 mr-7">
            <dt className="py-2 flex flex-row justify-between text-sm font-medium leading-6 font-semibold text-gray-900 sm:px-0 border-gray-300 mr-7">
              Celular
            </dt>
            <dd className="mt-1 text-sm leading-2 text-gray-700 sm:col-span-2 sm:mt-0 divide-y divide-gray-300 border-b py-2">
              {user.phone ? user.phone : "No registra"}
            </dd>
          </div>
          <div className="px-4 py-2 sm:grid sm:grid-cols-1 sm:px-0 border-gray-300 mr-7">
            <dt className="py-2 flex flex-row justify-between text-sm font-medium leading-6 font-semibold text-gray-900 sm:px-0 border-gray-300 mr-7">
              Género
            </dt>
            <dd className="mt-1 text-sm leading-2 text-gray-700 sm:col-span-2 sm:mt-0 divide-y divide-gray-300 border-b py-2">
              {user.genero ? user.genero : "No registra"}
            </dd>
          </div>
        </section>
      )}

      {currentSection === 'privacySecurity' && (
        <section className="w-4/6 h-full font-body mb-10">
          <div className="px-4 py-2 sm:grid sm:grid-cols-1 sm:px-0 border-gray-300 mr-7">
            <h2 className="text-2xl text-primary-color font-title text-center leading-10 font-medium">
              Privacidad y Seguridad
            </h2>
            
          </div>
        </section>
      )}
    </div>
  );
};

export default ConfigProfile;
