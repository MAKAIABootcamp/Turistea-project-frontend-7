import React, { useEffect, useState } from "react";
import banner from "../assets/Termales-Santa-Rosa-de-Cabal.jpg";
import popular1 from "../assets/HomeCards/Mote-Donde-Mingo.png";
import popular2 from "../assets/HomeCards/Golden-Glamping-guatavita.jpg";
import popular3 from "../assets/HomeCards/PalacionEpiscopalQuibdo.jpg";
import popular4 from "../assets/HomeCards/Safari-casanare.webp";
import { useDispatch, useSelector } from "react-redux";
import { addLuggage } from "../redux/travel/travelSlice";
import { actionGetReviews } from "../redux/review/reviewActions";

const Home = () => {
  const reviews = [
    {
      id: 122,
      description: "precios bajos, se tardo 1 hora comida",
      ecology: true,
      lowCost: false,
      mainImage:
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716237018/turistea/wvrypvuuuom1tgx8gool.jpg",
      namePlace: "El coste",
      price: 50000,
      score: 4,
      secondaryImages: [
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716237020/turistea/cddomcjyyzxwcr3pubzk.jpg",
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716237020/turistea/nljnsocevst4w4afugz8.jpg",
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716237020/turistea/sijkpawn5hra0v87pe5b.jpg",
      ],
      title: "Experiencia gastronimica inolvidable",
      typeReviews: "Alimentación",
    },
    {
      id: 34562,
      description: "precios bajos, se tardo 1 hora comida",
      ecology: false,
      lowCost: true,
      mainImage:
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716237018/turistea/wvrypvuuuom1tgx8gool.jpg",
      namePlace: "El coste",
      price: 20000,
      score: 4,
      secondaryImages: [
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716237020/turistea/cddomcjyyzxwcr3pubzk.jpg",
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716237020/turistea/nljnsocevst4w4afugz8.jpg",
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716237020/turistea/sijkpawn5hra0v87pe5b.jpg",
      ],
      title: "Experiencia gastronimica inolvidable",
      typeReviews: "Alimentación",
    },
    {
      id: 32122,
      description: "precios bajos, se tardo 1 hora comida",
      ecology: true,
      lowCost: true,
      mainImage:
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716237018/turistea/wvrypvuuuom1tgx8gool.jpg",
      namePlace: "El coste",
      price: 18000,
      score: 4,
      secondaryImages: [
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716237020/turistea/cddomcjyyzxwcr3pubzk.jpg",
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716237020/turistea/nljnsocevst4w4afugz8.jpg",
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716237020/turistea/sijkpawn5hra0v87pe5b.jpg",
      ],
      title: "Experiencia gastronimica inolvidable",
      typeReviews: "Alimentación",
    },
    {
      id: 4562,
      description:
        "El hotel cumplió completamente con nuestras expectativas. Las habitaciones son amplias e iluminadas. El personal del hotel estuvo siempre muy pendiente para resolver nuestras inquietudes y ayudarnos durante toda nuestra estancia. La piscina es súper agradable.",
      ecology: false,
      lowCost: true,
      mainImage:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/383088716.jpg?k=71be6006eb487737236630d250d423bb581c936592f0b9574ae43d08e1155829&o=&hp=1",
      namePlace: "Hotel desierto De la Tatacoa",
      price: 80000,
      score: 4.5,
      secondaryImages: [
        "https://images.trvl-media.com/lodging/45000000/44300000/44297400/44297371/62d9100a.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/383087830.jpg?k=f2d57476739bf3c33c2e8ea12b530e2a763a215e27b3e8daa5fbbf6f602d680a&o=&hp=1",
        "https://lh5.googleusercontent.com/proxy/_PVZblzyTcXia7BGeUp99DB349B6aZKujzKQ-7WBWUDl_nmpkr8oRkuHMiPj4iUWzQim6CV-vZ2xscr7-5dNe-1mEF3UCXwIzuukyZJCA82j-vS-8MaKtC_R1tZKWhwNLTNGnk6wEJ6ciY7qLxETiWaydjNlAA=w252-h314-k-no",
      ],
      title: "Hospedaje en las cercanías del desierto de la tatacoa",
      typeReviews: "Alojamiento",
    },
    {
      id: 8122,
      description: "precios bajos, se tardo 1 hora comida",
      ecology: true,
      lowCost: true,
      mainImage:
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716237018/turistea/wvrypvuuuom1tgx8gool.jpg",
      namePlace: "El coste",
      price: 20000,
      score: 4,
      secondaryImages: [
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716237020/turistea/cddomcjyyzxwcr3pubzk.jpg",
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716237020/turistea/nljnsocevst4w4afugz8.jpg",
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716237020/turistea/sijkpawn5hra0v87pe5b.jpg",
      ],
      title: "Experiencia gastronimica inolvidable",
      typeReviews: "Alimentación",
    },
    {
      id: 62389,
      description:
        "El hotel cumplió completamente con nuestras expectativas. Las habitaciones son amplias e iluminadas. El personal del hotel estuvo siempre muy pendiente para resolver nuestras inquietudes y ayudarnos durante toda nuestra estancia. La piscina es súper agradable.",
      ecology: false,
      lowCost: true,
      mainImage:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/383088716.jpg?k=71be6006eb487737236630d250d423bb581c936592f0b9574ae43d08e1155829&o=&hp=1",
      namePlace: "Hotel desierto De la Tatacoa",
      price: 70000,
      score: 4.5,
      secondaryImages: [
        "https://images.trvl-media.com/lodging/45000000/44300000/44297400/44297371/62d9100a.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/383087830.jpg?k=f2d57476739bf3c33c2e8ea12b530e2a763a215e27b3e8daa5fbbf6f602d680a&o=&hp=1",
        "https://lh5.googleusercontent.com/proxy/_PVZblzyTcXia7BGeUp99DB349B6aZKujzKQ-7WBWUDl_nmpkr8oRkuHMiPj4iUWzQim6CV-vZ2xscr7-5dNe-1mEF3UCXwIzuukyZJCA82j-vS-8MaKtC_R1tZKWhwNLTNGnk6wEJ6ciY7qLxETiWaydjNlAA=w252-h314-k-no",
      ],
      title: "Hospedaje en las cercanías del desierto de la tatacoa",
      typeReviews: "Alojamiento",
    },
    {
      id: 99123,
      description: "tour guiado, es importante llevar dulce",
      ecology: true,
      lowCost: false,
      mainImage:
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716166871/turistea/qessbzoorrrn2txuik6b.png",
      namePlace: "Tour al nevado",
      price: 300000,
      score: 4,
      secondaryImages: [
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716166872/turistea/kneypnnhctjyved3afvv.png",
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716166872/turistea/v02d1t2b2twxaptawx1i.jpg",
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716166872/turistea/tidjvo6sippahdpmqpog.jpg",
      ],
      title: "El mejor pero algo costoso",
      typeReviews: "Planes",
    },
    {
      id: 987654,
      description: "tour guiado, es importante llevar dulce",
      ecology: true,
      lowCost: true,
      mainImage:
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716166871/turistea/qessbzoorrrn2txuik6b.png",
      namePlace: "Tour al nevado",
      price: 150000,
      score: 4,
      secondaryImages: [
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716166872/turistea/kneypnnhctjyved3afvv.png",
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716166872/turistea/v02d1t2b2twxaptawx1i.jpg",
        "https://res.cloudinary.com/dx3t6es3p/image/upload/v1716166872/turistea/tidjvo6sippahdpmqpog.jpg",
      ],
      title: "El mejor pero algo costoso",
      typeReviews: "Planes",
    },
  ];
  
  const dispatch = useDispatch();
  const [category, setCategory] = useState();
  const { filterReviews, isLoadingReviews } = useSelector((store) => store.reviews);
   console.log(isLoadingReviews)

  // useEffect(() => {
  //   dispatch(actionGetReviews());
  // }, []);
 
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
  
  let filteredReviews = [...reviews];
  console.log(filteredReviews)
  switch (filterReviews) {
    case 1:
      filteredReviews = filteredReviews.filter(
        (item) => item.typeReviews.toLowerCase() == "alojamiento"
      );
      break;
    case 2:
      filteredReviews = filteredReviews.filter(
        (item) => item.typeReviews.toLowerCase() == "alimentación"
      );

      break;
    case 3:
      filteredReviews = filteredReviews.filter(
        (item) => item.typeReviews.toLowerCase() == "planes"
      );
      break;
    default:
      break;
  }

  

  const [filteredByCategory, setFilteredByCategory] = useState([
    ...filteredReviews,
  ]);

  console.log(filteredByCategory)

  const handleFilterCategory = (category) => {
    setCategory(category);
    switch (category) {
      case 1:
        setFilteredByCategory(
          filteredReviews.filter((item) => item.ecology == true)
        );
        break;
      case 2:
        setFilteredByCategory(
          filteredReviews.filter((item) => item.lowCost == true)
        );

        break;
      default:
        setFilteredByCategory([...filteredReviews]);
        break;
    }
  };

  const handleSort = (e) => {
    console.log(e.target.value);
    switch (e.target.value) {
      case "lowPrice":
        setFilteredByCategory(
          filteredReviews.slice().sort((a, b) => a.price - b.price)
        );
        break;
      case "highPrice":
        setFilteredByCategory(
          filteredReviews.slice().sort((a, b) => b.price - a.price)
        );
        break;
      case "score":
        setFilteredByCategory(
          filteredReviews.slice().sort((a, b) => b.score - a.score)
        );
        break;

      default:
        setFilteredByCategory([...filteredReviews]);
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
          {/* <button className="flex items-center flex-row mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 mr-2 stroke-primary-color fill-secondary-color"
              viewBox="0 0 24 24"
            >
              <path d="M14.844 20H6.5C5.121 20 4 18.879 4 17.5S5.121 15 6.5 15h7c1.93 0 3.5-1.57 3.5-3.5S15.43 8 13.5 8H8.639a9.812 9.812 0 0 1-1.354 2H13.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-7C4.019 13 2 15.019 2 17.5S4.019 22 6.5 22h9.593a10.415 10.415 0 0 1-1.249-2zM5 2C3.346 2 2 3.346 2 5c0 3.188 3 5 3 5s3-1.813 3-5c0-1.654-1.346-3-3-3zm0 4.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5 6.5z"></path>
              <path d="M19 14c-1.654 0-3 1.346-3 3 0 3.188 3 5 3 5s3-1.813 3-5c0-1.654-1.346-3-3-3zm0 4.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 19 18.5z"></path>
            </svg>
            <p className="font-body md:text-lg sm:text-sm text-black-text">
              Destino
            </p>
          </button> */}
          <button
            onClick={() => handleFilterCategory(category == 1 ? 0 : 1)}
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
            onClick={() => handleFilterCategory(category == 2 ? 0 : 2)}
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
        {/* <button className="h-full flex  w-1/4 md:w-2/6 flex items-center border border-highlight-color p-1 sm:py-0 rounded-lg sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" w-6 h-6 sm:w-8 sm:h-8 stroke-secondary-color fill-primary-color"
            viewBox="0 0 24 24"
          >
            <path d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z"></path>
          </svg>
          <p className="font-body text-sm md:text-lg sm:text-base text-black-text">
            Filtrar
          </p>
        </button> */}
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
        {/* <button className="h-3/4 bg-primary-color rounded-full flex justify-center items-center p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 sm:w-6 sm:h-6 stroke-primary-color fill-secondary-color"
            viewBox="0 0 24 24"
          >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
            <path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"></path>
          </svg>
        </button> */}
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
                    ${item.price}
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
                        Guainia
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
          <p> No hay reseñas para mostrar</p>
        )}
      </div>

      <div
        className={`md:flex-row p-5 md:p-20  ${
          filteredByCategory.length > 0 ? "flex" : "hidden"
        }`}
      >
        <figure className="w-1/3 m-2 opacity-100 hover:opacity-75 relative">
          <img
            className="w-full h-full object-cover rounded-md"
            src={popular2}
            alt="popular2"
          />
          <figcaption className="rounded-b-md absolute inset-0 flex flex-col justify-center px-4 w-full h-1/4 top-3/4 bg-[#05050550]">
            <h3 className="font-bold font-body text-secondary-color  text-sm md:text-xl">
              Experiencia de glamping en Guatavita
            </h3>
            <p className="text-secondary-color text-sm md:text-base  ">
              12 comentarios
            </p>
          </figcaption>
        </figure>
        <div className="w-1/3 m-2">
          <figure className="w-full mb-2 opacity-100 hover:opacity-75 relative">
            <img
              className="w-full md:h-80 sm:h-60 object-cover rounded-md"
              src={popular1}
              alt="popular1"
            />
            <figcaption className=" rounded-b-md absolute inset-0 flex flex-col  justify-start px-4 pt-2 w-full h-1/3 top-2/3 bg-[#05050550]">
              <h3 className="font-bold font-body text-secondary-color text-sm md:text-xl">
                El mote de queso más popular
              </h3>
              <p className="text-secondary-color text-xs md:text-sm ">
                10 comentarios
              </p>
            </figcaption>
          </figure>
          <figure className="w-full mt-2 opacity-100 hover:opacity-75 relative">
            <img
              className="w-full md:h-80 sm:h-60 object-cover rounded-md"
              src={popular3}
              alt="popular3"
            />
            <figcaption className="rounded-b-md absolute inset-0 flex flex-col justify-center px-4 pt-2 w-full  h-1/3 top-2/3 bg-[#05050550]">
              <h3 className="font-bold font-body text-secondary-color  text-sm md:text-xl">
                Palacio en Quibdo
              </h3>
              <p className="text-secondary-color text-xs md:text-sm ">
                15 comentarios
              </p>
            </figcaption>
          </figure>
        </div>
        <figure className="w-1/3 m-2 opacity-100 hover:opacity-75 relative">
          <img
            className="w-full h-full object-cover rounded-md"
            src={popular4}
            alt="popular4"
          />
          <figcaption className="rounded-b-md absolute inset-0 flex flex-col justify-center px-4 w-full h-1/4 top-3/4 bg-[#05050550]">
            <h3 className="font-bold font-body text-secondary-color  text-sm md:text-xl">
              Safari en Casanare
            </h3>
            <p className="text-secondary-color text-sm md:text-base ">
              20 comentarios
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Home;
