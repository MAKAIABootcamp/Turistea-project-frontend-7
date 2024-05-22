import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { database } from "../firebase/firebaseConfig";
import { deleteReviews } from "../redux/review/reviewSlice";
import Swal from "sweetalert2";
import StarRating from "../components/StarRating";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsCollection = collection(database, "Reviews");
      const reviewsSnapshot = await getDocs(reviewsCollection);
      const reviewsData = reviewsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(reviewsData);
    };

    fetchReviews();
  }, []);

  const handleDelete = async (id) => {
    const confirmResult = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
    });

    if (confirmResult.isConfirmed) {
      try {
        await deleteDoc(doc(database, "Reviews", id));
        dispatch(deleteReviews(id));
        setReviews(reviews.filter((review) => review.id !== id));

        Swal.fire("¡Eliminado!", "La reseña ha sido eliminada.", "success");
      } catch (error) {
        console.error("Error eliminando la reseña: ", error);
        Swal.fire("Error", "Hubo un problema al eliminar la reseña", "error");
      }
    }
  };

  return (
    <div className="p-5 h-5/6">
      {/* Barra lateral con menú */}
      <div className="flex">
        {/* Contenido principal */}
        <div className="w-full ml-8">
          <div className="pb-4 border-b-2 border-primary-line flex justify-between mb-6">
            <h1 className="w-full font-bold font-title text-primary-color md:text-3xl sm:text-base xs:text-sm sm:mx-2 ">
              Mis Reseñas
            </h1>
            <div className="flex gap-2">
              <Link to={`/formReviews`} className="bg-primary-color rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 md:w-6 md:h-6 fill-secondary-color"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Lista de reseñas */}
          {reviews.map((review) => (
            <div
              key={review.id}
              className="w-[878px] bg-white p-6 shadow rounded mb-4 text-primary-color relative" // Eliminado height fija
            >
              {/* Título encima de la imagen */}
              <h1 className="text-2xl font-body mb-4">{review.namePlace}</h1>
              <div className="flex items-center justify-between">
                {/* Contenedor de la imagen */}
                <div className="flex-none relative">
                  <img
                    src={review.mainImage}
                    alt={`Imagen de ${review.namePlace}`}
                    className="w-80 h-70 object-cover rounded-lg" // Ajusta las dimensiones según sea necesario
                  />
                </div>
                {/* Contenido textual y botones */}
                <div className="flex-1 ml-4 p-3 text-primary-color">
                  <h2 className="text-xl font-body flex justify-between items-center mb-2">
                    {review.namePlace}
                    {/* <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 stroke-primary-color fill-secondary-color hover:fill-highlight-color hover:stroke-highlight-color"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
                      </svg>
                    </div> */}
                  </h2>
                  <p className="text-gray-600 font-body mb-4">
                    {review.description}
                  </p>
                  <div className="w-1/3 h-8 bg-white py-2 px-4 rounded-full shadow flex items-center justify-between mb-4">
                    {review.typeReviews && (
                      <span className="text-primary-color">
                        {review.typeReviews}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 font-body mb-4">
                    {review.location}
                  </p>
                  <div className="flex items-center space-x-2 text-primary-color">
                    <StarRating rating={review.score} editable={false} />
                    <span className="text-sm ml-1 font-body flex items-center">
                      {review.score} (Calificación)
                    </span>
                  </div>
                </div>
              </div>
              {/* Icono de lápiz para editar posicionado en la esquina inferior derecha */}
              <Link
                to={`/editReview/${review.id}`}
                className="absolute bottom-2 right-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 stroke-primary-color fill-secondary-color hover:fill-highlight-color hover:stroke-highlight-color"
                  viewBox="0 0 24 24"
                >
                  <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
