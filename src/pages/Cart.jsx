import React from "react";
import { Link, useNavigate } from "react-router-dom";
import product1 from "../assets/HomeCards/Mote-Donde-Mingo.png";
import product2 from "../assets/HomeCards/Hostal-freesoul-Palomino-Colombia.jpg";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { deleteTravel } from "../redux/travel/travelSlice";

const Cart = () => {
  const navigate = useNavigate();
  const {travel} = useSelector ( store => store.travel)
  const dispatch = useDispatch();
  
  console.log(travel)
  // const reviewsInLuggage = [
  //   {
  //     id: 122,
  //     image: product1,
  //     name: "Mote de queso",
  //     price: 30000,
  //     category: "Alimentación",
  //   },
  //   {
  //     id: 34562,
  //     image: product2,
  //     name: "Hostal freesould",
  //     price: 92000,
  //     category: "Alojamiento",
  //   },
  // ];

  const handleSubmit = (event) => {
    event.preventDefault();
    travel.length >0 ? navigate (`/formPlans`):
    Swal.fire({
      allowOutsideClick: false,
      text: "Debe agregar experiencias a su maleta",
      icon: "error",
    }).then((result) => {
      if (result.isConfirmed) {
        // dispatch(loginFail(null));
        navigate (`/`)
      }
    });
  }
  return (
    <section className="flex w-full h-screen justify-end">
      {/* <div className="w-1/2 md:w-3/4 sm:w-3/5 bg-[#05050549]"></div> */}
      <div className=" px-4 w-4/5 md:w-1/3 sm:w-2/5 flex flex-col items-center bg-secondary-color">
        <div className="w-full mt-6">
          <h1 className="w-full mb-6 text-xl sm:text-2xl md:text-3xl font-title font-semibold text-primary-color ">
            Detalles de tu viaje
          </h1>
        </div>
        <div>
          <ul role="list" className="mb-6 divide-y divide-gray-200 px-4">
            {
              travel.length >0 ?
            travel?.map((review,index) => (
              <li key={index}  className="w-full flex py-6">
                <div className="w-2/5 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="h-20 w-full object-cover object-center"
                  />
                </div>
                <div className=" w-1/3 ml-4 flex flex-1 flex-col">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <Link href="#">{review.name}</Link>
                    </h3>
                    <p className="ml-4">${review.price}</p>
                  </div>
                  <div className="flex items-end justify-between text-sm">
                    <p className="text-gray-500">{review.category}</p>
                    <div className="flex">
                      <button
                        onClick={() => dispatch(deleteTravel(review.id))}
                        type="button"
                        className="w-6 h-6 stroke-primary-color fill-secondary-color hover:fill-primary-color "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            )): <span> Debe añadir experiencias a su maleta</span>
          }
          </ul>
        </div>

        <button
          onClick={(e) => handleSubmit(e)}
          type="button"
          className=" mt-6 font-body md:text-lg sm:text-base text-white bg-highlight-color hover:bg-primary-color hover:border border-primary-color font-semibold rounded-xl w-full px-4 py-2 text-center"
        >
          Completar
        </button>
      </div>
    </section>
  );
};

export default Cart;
