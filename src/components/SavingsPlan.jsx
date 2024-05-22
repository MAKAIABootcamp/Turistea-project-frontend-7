
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { database } from "../firebase/firebaseConfig";

import { collection, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";

import { getAuth } from "firebase/auth";
import Swal from 'sweetalert2';

const SavingsPlan = () => {
  const [infoAhorro, setAhorro] = useState([]);
  //const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const SavingsPlan = collection(database, "SavingsPlan");
        const q = query(SavingsPlan, where("userId", "==", user.uid));

        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });

        setAhorro(data);

        if (querySnapshot.size === 0) {
          console.log("No se encontraron documentos para el usuario.");
        }
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (idDocumento) => {
    const documentRef = doc(database, "SavingsPlan", idDocumento);
    Swal.fire({
      title: "¿Estas seguro que quieres eliminar tu Plan de Ahorro?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Eliminar",
      denyButtonText: `Cancelar`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteDoc(documentRef);
          Swal.fire("Se eliminó tu plan de ahorro exitosamente", "", "success");
          setAhorro(infoAhorro.filter(plan => plan.id !== idDocumento));
        } catch (error) {
          console.error("Error al eliminar la cuenta:", error);
          Swal.fire("Hubo un error al eliminar tu cuenta", "", "error");
        }
      }
    });
  };

  return (
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
              <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-4 pt-2">
        {infoAhorro.length === 0 ? (
          <p>No tienes ningún plan de ahorro creado.</p>
        ) : (
          infoAhorro.map((plan) => (
            <div key={plan.id} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100">
              <div className="w-full flex flex-col justify-between p-4 leading-normal">
                <div className="mb-4 pb-2 flex justify-between border-b-2 border-primary-color">
                  <h3 className="font-body text-primary-color font-semibold text-sm md:text-lg">
                    Plan ciudad
                  </h3>
                  <div className="flex gap-2">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 stroke-primary-color fill-secondary-color hover:fill-highlight-color hover:stroke-highlight-color"
                        viewBox="0 0 24 24"
                      >
                        <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path>
                      </svg>
                    </button>
                    <button onClick={() => handleDelete(plan.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 stroke-primary-color fill-secondary-color hover:fill-highlight-color hover:stroke-highlight-color"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="mr-2 text-xs md:text-base font-bold text-black-text">
                      Fecha de finalizacion:
                    </h4>
                    <p className="inline font-normal text-xs md:text-sm text-gray-input">
                      {plan.dateEnd ? plan.dateEnd : "No registra informacion"}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <h4 className="mr-2 text-xs md:text-base font-bold text-black-text">
                      Valor del ahorro:
                    </h4>
                    <p className="inline font-normal text-xs md:text-sm text-gray-input">
                      {plan.savings ? plan.savings : "No registra informacion"}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <h4 className="mr-2 text-xs md:text-base font-bold text-black-text">
                      Periodicidad:
                    </h4>
                    <p className="inline font-normal text-xs md:text-sm text-gray-input">
                      {plan.frecuency ? plan.frecuency : "No registra informacion"}
                    </p>
                  </div>
                </div>
                
                <Link to={`/detailsPlan/:${plan.id}`}>
                  <button
                    type="submit"
                    
                    className="my-4 font-body text-xs md:text-base font-bold text-secondary-color bg-highlight-color hover:bg-primary-color hover:border border-primary-color font-semibold rounded-xl lg:w-1/3 px-5 py-2 text-center"
                  >
                    Ver detalles
                  </button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default SavingsPlan;
