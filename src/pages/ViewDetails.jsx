import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import product2 from "../assets/imagensuccess.png";
import { getAuth } from "firebase/auth";
import { collection, query, where, getDocs, doc, getDoc, updateDoc } from "firebase/firestore";
import { database } from "../firebase/firebaseConfig";
import {
  setCheckboxes,
  toggleCheckbox,
} from "../redux/planAhorro/savingsSlice";

const calculateCheckboxes = (startDate, endDate, periodicity) => {
  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split("/").map(Number);
    return new Date(year, month - 1, day);
  };

  const checkboxes = [];
  const start = parseDate(startDate);
  const end = parseDate(endDate);

  let currentDate = start;

  const periodMap = {
    Semanal: 7,
    Quincenal: 15,
    Mensual: 30,
  };

  const daysToAdd = periodMap[periodicity];

  while (currentDate <= end) {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + daysToAdd);

    if (nextDate > end) {
      nextDate.setTime(end.getTime());
    }

    checkboxes.push({
      dateRange: `${currentDate.toLocaleDateString(
        "en-GB"
      )} - ${nextDate.toLocaleDateString("en-GB")}`,
      checked: false,
    });

    currentDate = new Date(nextDate);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return checkboxes;
};

const ViewDetails = () => {
  const [infoAhorro, setAhorro] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [Periodicidad, setPeriodicidad] = useState("");
  const [FechaInicio, setFechaInicio] = useState("");
  const [FechaFinalizacion, setFechaFinalizacion] = useState("");
  const [Valor, setValor] = useState("");
  const [Total, setotal] = useState(" ");
  const [dataBoxes, setBoxes] = useState([]);
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      console.log(user)

      if (user) {
        console.log("UID del usuario:", user.uid);

        const planAhorroRef = collection(database, "PlanAhorro");
        const q = query(planAhorroRef, where("idUser", "==", user.uid));

        try {
          const querySnapshot = await getDocs(q);

          const data = [];
          querySnapshot.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id });
          });
          setAhorro(data);

          if (querySnapshot.size === 0) {
            console.log("No se encontraron documentos para el usuario.");
          } else {
            const ahorroData = data[0];
            const { periodicidad, valor, dateInicial, dateFinal, id, idTravel, total } = ahorroData;

            if (id) {
              console.log("Periodicidad:", periodicidad);
              console.log("FechaInicio:", dateInicial);
              console.log("FechaFinalizacion:", dateFinal);

              setPeriodicidad(periodicidad);
              setFechaInicio(dateInicial);
              setFechaFinalizacion(dateFinal);
              setValor(valor);
              setotal(total);
              fetchTravelData(idTravel);


              const checkboxes = calculateCheckboxes(dateInicial, dateFinal, periodicidad);
              setBoxes(checkboxes);
              console.log(checkboxes);
              dispatch(setCheckboxes(checkboxes));

              const updateFirestore = async () => {
                const docRef = doc(database, "PlanAhorro", id);

                try {
                  await updateDoc(docRef, {
                    datesBox: checkboxes,
                    countBox: checkboxes.length
                  });
                  console.log("Document successfully updated!");
                } catch (error) {
                  console.error("Error updating document: ", error);
                }
              };
              updateFirestore();
            } else {
              console.error("Document ID esta indefinido.");
            }
          }
        } catch (error) {
          console.error("Error al obtener documentos:", error);
        }
      } else {
        console.log("No hay usuario autenticado.");
      }
    };

    fetchData();
  }, [dispatch]);

  const fetchTravelData = async (idTravel, idUser) => {
    if (!idTravel) return;

    try {
      const travelDoc = await getDoc(doc(database, "Travels", idTravel));

      if (travelDoc.exists()) {
        const travelData = travelDoc.data();
        const reviewIds = travelData.reviews;
        if (reviewIds && reviewIds.length > 0) {
          fetchReviews(reviewIds[0]);
        }
      } else {
        console.log("No se encontró la información Travels!");
      }
    } catch (error) {
      console.error("Error al cargar los datos: ", error);
    }
  };

  const fetchReviews = async (reviewId) => {
    if (!reviewId) return;

    try {
      const reviewDoc = await getDoc(doc(database, "Reviews", reviewId));
      if (reviewDoc.exists()) {
        setReviews(reviewDoc.data());
      } else {
        console.log("No se encuentra la información en Reviews!");
      }
    } catch (error) {
      console.error("Error al cargar los datos: ", error);
    }
  };

  const handleCheckboxChange = (index, checked) => {
    const newBoxes = dataBoxes.map((box, i) => {
      if (i === index) {
        return { ...box, checked };
      }
      return box;
    });
    setBoxes(newBoxes);
    dispatch(toggleCheckbox(index));
    calculateProgress(newBoxes);
  };

  const calculateProgress = (checkboxes) => {
    const total = checkboxes.length;
    const checked = checkboxes.filter(box => box.checked).length;
    const progressPercentage = (checked / total) * 100;
    setProgress(progressPercentage);
  };

  useEffect(() => {
    calculateProgress(dataBoxes);
  }, [dataBoxes]);

  console.log(reviews);




  return (
    <section className="flex justify-between w-full h-screen px-10 py-5 mb-4 md:px-10 md:py-10 sm:flex-col sm:justify-center md:flex-row sm:px-10 max-[760px]:flex-col  " >
      <div className="rounded-lg w-1/2 shadow shadow-2xl p-6 border h-full md:w-1/2 flex flex-col items-center max-[760px]:w-full">
        <div className="w-full">
          <h2 className="font-semibold w-full mb-2 text-lg md:text-2xl font-title text-highlight-color ">
            Mi Viaje
          </h2>
        </div>
        <ul className="overflow-auto mb-2 w-full">
          {Array(reviews).map((review, index) => (
            <li key={index} className="w-full flex p-4 mt-2 shadow-xl rounded-lg border">
              <div className="h-24 w-2/4 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={review.mainImage}
                  alt="producto2"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="ml-4 w-2/5 flex flex-1 flex-row items-center">
                <div className="w-full flex flex-col">
                  <p className="text-gray-input text-xs md:text-sm">{review.typeReviews ? review.typeReviews : "Sin información"}</p>
                  <Link className="text-sm md:text-base font-bold">
                    {review.namePlace ? review.namePlace : "Sin información"}
                  </Link>
                  <p className="text-gray-input text-xs md:text-sm">
                    {review.nameCity ? review.nameCity : "Sin información"}
                  </p>
                  <p className="text-sm md:text-base font-semibold">
                    {review.price ? review.price : "Sin información"}
                    <span className="inline font-normal text-gray-input">
                      /día
                    </span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="w-full flex flex-col pt-4 mt-6 border-t border-gray-input">
          <div className="w-full flex justify-between">
            <p className="w/1/2 text-sm md:text-base font-semibold text-start font-body text-black-text">
              Total
            </p>
            <p className="w-1/2 text-sm md:text-base font-semibold text-end font-body text-black-text">
              {Total ? `${Total}` : "Sin informacion"}
            </p>
          </div>
        </div>
      </div>
      <div className="px-5 w-1/2 md:w-5/12  bg-secondary max-[760px]:w-full max-[760px]:mt-10 ">
        <h1 className="w-full mb-6 text-base sm:text-2xl md:text-3xl font-title text-highlight-color">
          Tu Ahorro
        </h1>
        <div className="w-full">
          <div className="flex items-center">
            <h2 className="mr-2 text-body font-semibold text-lg md:text-xl text-primary-color">
              Periodicidad:
            </h2>
            <p className="inline text-gray-cards text-body text-sm md:text-base">
              {Periodicidad ? Periodicidad : "Sin informacion"}
            </p>
          </div>
          <div className="flex items-center">
            <h2 className="mr-2 text-body font-semibold text-lg md:text-xl text-primary-color">
              Valor:
            </h2>
            <p className="inline text-gray-cards text-body text-sm md:text-base">
              {Valor ? Valor : "Sin informacion"}
            </p>
          </div>
          <div className="flex items-center">
            <h2 className="mr-2 text-body font-semibold text-lg md:text-xl text-primary-color">
              Fecha Inicio:
            </h2>
            <p className="inline text-gray-cards text-body text-sm md:text-base">
              {FechaInicio ? FechaInicio : "Sin informacion"}
            </p>
          </div>
          <div className="flex items-center">
            <h2 className="mr-2 text-body font-semibold text-lg md:text-xl text-primary-color">
              Fecha Finalización:
            </h2>
            <p className="inline text-gray-cards text-body text-sm md:text-base">
              {FechaFinalizacion ? FechaFinalizacion : "Sin informacion"}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-body font-semibold text-lg md:text-xl mt-6 mb-4 text-black-text">
            Tu Progreso
          </h2>
          <div className="relative w-full bg-gray-300 rounded-full h-6">
            <div
              className="bg-primary-color h-6 rounded-full"
              style={{ width: `${progress}%` }}
            />
            <span className="absolute left-0 right-0 text-center text-xs font-medium text-primary-color">
              {Math.round(progress)}%
            </span>
          </div>
          <h2 className="text-body font-semibold text-lg md:text-xl mt-6 mb-4 text-black-text">
            Marca los ahorros cumplidos
          </h2>
          {dataBoxes && dataBoxes.length > 0 ? (
            <ul>
              {dataBoxes.map((checkbox, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="checkbox"
                      checked={checkbox.checked}
                      onChange={(e) =>
                        handleCheckboxChange(index, e.target.checked)
                      }
                      className="w-4 h-4 text-primary-color bg-gray-100 border-gray-300 rounded focus:ring-transparent"
                    />
                    {checkbox.dateRange}
                  </label>
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay datos de fechas disponibles.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ViewDetails;
