import React, { useEffect, useState, useCallback } from "react";
import banner from "../assets/Termales-Santa-Rosa-de-Cabal.jpg";
import popular1 from "../assets/HomeCards/Mote-Donde-Mingo.png";
import popular2 from "../assets/HomeCards/Golden-Glamping-guatavita.jpg";
import popular3 from "../assets/HomeCards/PalacionEpiscopalQuibdo.jpg";
import popular4 from "../assets/HomeCards/Safari-casanare.webp";
import { useDispatch, useSelector } from "react-redux";
import { addLuggage } from "../redux/travel/travelSlice";
import {
  actionGetReviews,
  actionMultipleFilterReviews,
} from "../redux/review/reviewActions";
import ImageGalleryModal from "../components/ImageGalleryModal"; // Asegúrate de importar el componente

const Home = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState();
  const [filters, setFilters] = useState({});
  const { filterReviews, isLoadingReviews, reviews } = useSelector(
    (store) => store.reviews
  );
  const [filteredByCategory, setFilteredByCategory] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMultipleFilters = (filters) => {
    if (Object.entries(filters).length) {
      dispatch(actionMultipleFilterReviews(filters));
    } else {
      dispatch(actionGetReviews());
    }
  };

  const fetchMultipleFilter = useCallback(() => {
    handleMultipleFilters(filters);
  }, [filters]);

  useEffect(() => {
    setFilteredByCategory(reviews);
  }, [reviews]);

  useEffect(() => {
    if (filterReviews) {
      setFilters(() => ({ ...filters, typeReviews: filterReviews }));
    }
  }, [filterReviews]);

  useEffect(() => {
    dispatch(actionGetReviews());
  }, [dispatch]);

  useEffect(() => {
    fetchMultipleFilter();
  }, [fetchMultipleFilter]);

  if (isLoadingReviews)
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

  const handleImageClick = (item) => {
    setSelectedReview(item);
    setIsModalOpen(true);
  };

  const handleSort = (e) => {
    switch (e.target.value) {
      case "lowPrice":
        setFilteredByCategory(
          reviews.slice().sort((a, b) => a.price - b.price)
        );
        break;
      case "highPrice":
        setFilteredByCategory(
          reviews.slice().sort((a, b) => b.price - a.price)
        );
        break;
      case "score":
        setFilteredByCategory(
          reviews.slice().sort((a, b) => b.score - a.score)
        );
        break;
      default:
        setFilteredByCategory([...reviews]);
        break;
    }
  };

  return (
    <section className="px-10 py-5 md:px-20 md:py-10 sm:py-8 sm:px-16">
      <figure className="w-full opacity-100 hover:opacity-75 relative">
        <img
          className="w-full image md:h-[18rem] object-cover"
          src={banner}
          alt="banner"
        />
        <figcaption className="absolute inset-0 flex flex-col justify-center items-center w-full h-full top-0 bg-[#05050550]">
          <h1 className="font-bold font-title text-secondary-color md:text-2xl sm:text-base xs:text-sm sm:mx-2 ">
            Descubre colombia con turistea
          </h1>
        </figcaption>
      </figure>

      <div className=" my-2 sm:my-10 flex flex-col sm:flex-row justify-center items-center w-full h-15 sm:h-10">
        <div className="h-full flex my-2 justify-center w-3/5 md:w-2/6 flex border border-highlight-color p-1 sm:py-0 rounded-lg sm:my-0">
          <button
            onClick={() => {
              setCategory(category === 1 ? 0 : 1);
              setFilters(() => {
                let newState = { ...filters };
                filters?.ecology ? delete newState.ecology :null;
                if (filters?.lowCost) {
                  delete newState.lowCost;
                } else {
                  newState = { ...filters, lowCost: true };
                }
                return newState;
              });
            }}
            className="flex items-center flex-row mr-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 sm:w-8 sm:h-8 stroke-secondary-color ${
                category == 1 ? "stroke-width-2" : "stroke-width-1"
              } fill-primary-color`}
              viewBox="0 0 24 24"
            >
              <path d="M15.999 8.5h2c0-2.837-2.755-4.131-5-4.429V2h-2v2.071c-2.245.298-5 1.592-5 4.429 0 2.706 2.666 4.113 5 4.43v4.97c-1.448-.251-3-1.024-3-2.4h-2c0 2.589 2.425 4.119 5 4.436V22h2v-2.07c2.245-.298 5-1.593 5-4.43s-2.755-4.131-5-4.429V6.1c1.33.239 3 .941 3 2.4zm-8 0c0-1.459 1.67-2.161 3-2.4v4.799c-1.371-.253-3-1.002-3-2.399zm8 7c0 1.459-1.67 2.161-3 2.4v-4.8c1.33.239 3 .941 3 2.4z"></path>
            </svg>
            <p
              className={`font-body text-sm md:text-lg sm:text-base ${
                category == 1 ? "font-semibold" : "font-normal"
              } text-black-text`}
            >
              Bajo Costo
            </p>
          </button>

          <button
            onClick={() => {
              setCategory(category === 2 ? 0 : 2);
              setFilters(() => {
                let newState = { ...filters };
                filters?.lowCost ? delete newState.lowCost :null;
                if (filters?.ecology) {
                  delete newState.ecology;
                } else {
                  newState = { ...filters, ecology: true };
                }
                return newState;
              });
            }}
            className="flex items-center flex-row"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 sm:w-8 sm:h-8 stroke-secondary-color ${
                category == 2 ? "stroke-width-2" : "stroke-width-1"
              } fill-primary-color`}
              viewBox="0 0 24 24"
            >
              <path d="M20.787 9.023c-.125.027-1.803.418-3.953 1.774-.323-1.567-1.279-4.501-4.108-7.485L12 2.546l-.726.767C8.435 6.308 7.483 9.25 7.163 10.827 5.005 9.448 3.34 9.052 3.218 9.024L2 8.752V10c0 7.29 3.925 12 10 12 5.981 0 10-4.822 10-12V8.758l-1.213.265zM8.999 12.038c.002-.033.152-3.1 3.001-6.532C14.814 8.906 14.999 12 15 12v.125a18.933 18.933 0 0 0-3.01 3.154 19.877 19.877 0 0 0-2.991-3.113v-.128zM12 20c-5.316 0-7.549-4.196-7.937-8.564 1.655.718 4.616 2.426 7.107 6.123l.841 1.249.825-1.26c2.426-3.708 5.425-5.411 7.096-6.122C19.534 15.654 17.304 20 12 20z"></path>
            </svg>
            <p
              className={`font-body text-sm md:text-lg sm:text-base ${
                category == 2 ? "font-semibold" : "font-normal"
              } text-black-text`}
            >
              Ecoturismo
            </p>
          </button>
        </div>
        <div className="h-full mb-2 sm:mb-0 md:w-1/6 mx-3">
          <label htmlFor="sort"></label>
          <select
            id="sort"
            onChange={(e) => handleSort(e)}
            className="h-full bg-secondary-color font-body md:text-lg sm:text-sm text-black-text py-2 sm:py-0 bg-gray-50 border border-highlight-color text-gray-900 text-sm rounded-lg focus:ring-highlight-color focus:border-highlight-color block w-full"
          >
            <option className="font-body text-sm md:text-lg sm:text-base text-black-text">
              Ordenar por
            </option>
            <option
              className="font-body md:text-base sm:text-xs text-black-text"
              value="lowPrice"
            >
              Precio: menor a mayor
            </option>
            <option
              className="font-body md:text-base sm:text-xs text-black-text"
              value="highPrice"
            >
              Precio: mayor a menor
            </option>
            <option
              className="font-body md:text-base sm:text-xs text-black-text"
              value="score"
            >
              Puntuación
            </option>
          </select>
        </div>
      </div>

      <div className="flex justify-center flex-wrap">
        {filteredByCategory.length > 0 ? (
          filteredByCategory?.map((item) => (
            <div
              key={item.id}
              className="w-1/3 lg:w-1/4 md:w-1/3 sm:w-1/2 xs:w-full"
            >
              <div className="mx-1 my-2 md:mx-2 md:my-4 max-w-sm rounded overflow-hidden shadow-lg">
                <div className="relative">
                  <img
                    className="w-full h-20 md:h-80 sm:h-60 object-cover hover:opacity-75"
                    src={item.mainImage}
                    alt={item.namePlace}
                    onClick={() => handleImageClick({ images: [item.mainImage], namePlace: item.namePlace, score: item.score })}
                  />
                  <button
                    onClick={() => dispatch(addLuggage(item))}
                    className="absolute top-1 end-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" w-6 h-6 sm:w-8 sm:h-8 stroke-gray-input fill-secondary-color"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zm2-10h4V7h2v4h4v2h-4v4h-2v-4H7v-2z"></path>
                    </svg>
                  </button>
                </div>
                <div className=" p-2 md:p-4">
                  <h3 className="font-bold text-base md:text-xl  mb-1">
                    {item.namePlace}
                  </h3>
                  <div className="w-full font-bold text-xs md:text-lg mb-1 ">
                    ${item.price.toLocaleString('es-ES')}
                    <p className="inline font-normal">
                      /
                      {item.typeReviews.toLowerCase() == "alojamiento"
                        ? "noche"
                        : item.typeReviews.toLowerCase() == "alimentación"
                        ? "plato"
                        : item.typeReviews.toLowerCase() == "planes"
                        ? "actividad"
                        : null}
                    </p>
                  </div>
                  <div className="w-full flex gap-4">
                    <div className="w-1/2 sm:w-3/5 me-1">
                      <p className="text-gray-cards text-sm md:text-base">
                        {item.location}
                      </p>
                    </div>
                    <div className="flex items-start justify-end ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-primary-color"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                      </svg>
                      <p className="text-black-text text-xs md:text-base">
                        {item.score}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-cards text-xs md:text-base sm:text-sm mb-2">
                    Reseña por: user3Register
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hay reseñas para mostrar</p>
        )}
      </div>
      <ImageGalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={selectedReview ? selectedReview.images : []}
        namePlace={selectedReview ? selectedReview.namePlace : ""}
        score={selectedReview ? selectedReview.score : ""}
      />
    </section>
  );
};

export default Home;
