import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { db } from "../firebase/firebaseConfig";
import { deleteReview } from "../redux/review/reviewSlice";
import Swal from "sweetalert2";
import StarRating from "../components/StarRating";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsCollection = collection(db, "Reviews");
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
        await deleteDoc(doc(db, "Reviews", id));
        dispatch(deleteReview(id));
        setReviews(reviews.filter((review) => review.id !== id));

        Swal.fire("¡Eliminado!", "La reseña ha sido eliminada.", "success");
      } catch (error) {
        console.error("Error eliminando la reseña: ", error);
        Swal.fire("Error", "Hubo un problema al eliminar la reseña", "error");
      }
    }
  };

  return (
    <div className="p-5">
      {/* Barra lateral con menú */}
      <div className="flex">
        <div className="w-1/4 bg-white p-4 shadow rounded">
          <div className="mb-4 text-primary-color">
            <Link to="/MyReviews">
              <button
                className="text-lg font-semibold py-2 px-4 rounded bg-white border border-gray-300 w-full text-left flex justify-between items-center"
                style={{
                  boxShadow:
                    "inset 0 2px 4px rgba(76, 175, 80, 0.4), inset 0 -2px 4px rgba(76, 175, 80, 0.4)",
                  background: "rgba(76, 175, 80, 0.1)",
                }}
              >
                Reseñas
                <svg
                  className="w-4 h-4"
                  fill="#4CAF50"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </Link>
          </div>
          <div className="mb-4 text-primary-color">
            <button className="text-lg font-semibold py-2 px-4 rounded bg-white border border-gray-300 w-full text-left flex justify-between items-center">
              Planes
              <svg
                className="w-4 h-4 text-gray-500"
                fill="#4caf50"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </div>
          <div className="mb-4 text-primary-color">
            <button className="text-lg font-semibold py-2 px-4 rounded bg-white border border-gray-300 w-full text-left flex justify-between items-center">
              Planes de ahorro
              <svg
                className="w-4 h-4 text-gray-500"
                fill="#4caf50"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="w-3/4 ml-8">
          <div className="mb-4 text-primary-color flex items-center justify-between">
            <h1 className="text-2xl font-title">Mis reseñas</h1>
            <div className="flex items-center space-x-4">
              {/* Iconos de búsqueda y agregar */}
              <Link to="/FormReview">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="#4CAF50"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          {/* Línea verde debajo del título */}
          <div className="flex items-center">
            <div className="flex-1 h-[1px] bg-primary-color mr-4"></div>{" "}
            {/* Línea verde */}
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
                    <div>
                      {/* Icono de basura para eliminar */}
                      <svg
                        onClick={() => handleDelete(review.id)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#ffa317"
                        className="cursor-pointer"
                      >
                        <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
                      </svg>
                    </div>
                  </h2>
                  <p className="text-gray-600 font-body mb-4">
                    {review.description}
                  </p>
                  <div className="w-90 h-8 bg-white py-2 px-4 rounded-full shadow flex items-center justify-between mb-4">
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
                to={`/edit-review/${review.id}`}
                className="absolute bottom-2 right-2"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffa317"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.263 2.177a1.75 1.75 0 012.474 0l2.586 2.586a1.75 1.75 0 010 2.474L19.53 10.03l-.012.013L8.69 20.378a1.75 1.75 0 01-.699.409l-5.523 1.68a.75.75 0 01-.935-.935l1.673-5.5a1.75 1.75 0 01.466-.756L14.476 4.963l2.787-2.786zm-2.275 4.371l-10.28 9.813a.25.25 0 00-.067.108l-1.264 4.154 4.177-1.271a.25.25 0 00.1-.059l10.273-9.806-2.94-2.939zM19 8.44l2.263-2.262a.25.25 0 000-.354l-2.586-2.586a.25.25 0 00-.354 0L16.061 5.5 19 8.44z"
                    fill="#ffa317"
                    stroke="none"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <footer className="text-center text-sm text-gray-500 py-4">
        <div className="border-t border-gray-300 my-2"></div>© 2024 Turista,
        Inc. ·{" "}
        <a href="/privacy" className="text-black hover:underline">
          Privacy
        </a>{" "}
        ·{" "}
        <a href="/about" className="text-black hover:underline">
          About us
        </a>
      </footer>
    </div>
  );
};

export default MyReviews;
