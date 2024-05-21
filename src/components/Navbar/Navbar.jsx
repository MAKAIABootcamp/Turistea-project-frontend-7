import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { actionLogout } from "../../redux/userAuth/userAuthActions";
import { selectedFilter } from "../../redux/review/reviewSlice";

const Navbar = ({ luggage }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const location = useLocation();

  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.userAuth);
  const { filterReviews } = useSelector((store) => store.reviews);

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(actionLogout());
  };

  const handleFilterSelected = (event, btnNumber) => {
    event.preventDefault();
    dispatch(selectedFilter(btnNumber));
  };
  const handleLuggage = (e) => {
    e.preventDefault();
    luggage(true)
    setShowFilterMenu(false);
    setShowUserMenu(false);
  };
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to={`/`}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Logo" />
          </Link>
          <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* este es el boton de la maleta */}
            <button onClick={(e) => {handleLuggage(e)}} className="mr-2">
              <svg
                className="w-6 h-6 fill-primary-color"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M176 56V96H336V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zM128 96V56c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56V96v32V480H128V128 96zM64 96H96V480H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zM448 480H416V96h32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64z" />
              </svg>
            </button>
            {/* este es el boton del usuario */}
            <div>
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-transparent dark:focus:ring-gray-600"
                id="user-menu-button"
                onClick={() => {
                  setShowUserMenu(!showUserMenu);
                  setShowFilterMenu(false);
                }}
              >
                {user?.photo ? (
                  <img
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-primary-color"
                    src={user.photo}
                    alt={user.name}
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 stroke-primary-color bg-secondary-color fill-secondary-color"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5" />
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  </svg>
                )}
              </button>
              {showUserMenu ? (
                <div
                  className="absolute top-8 right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="user-dropdown"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      {user?.name}
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <Link
                        to={`/myProfile`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Perfil
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/configProfile`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Configuraciones
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={(e) => handleLogout(e)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Cerrar Sesion
                      </button>
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>

            {location.pathname === "/" ? (
              /* boton menu de los filtros*/
              <button
                type="button"
                onClick={() => {
                  setShowFilterMenu(!showFilterMenu);
                  setShowUserMenu(false);
                }}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
              >
                <svg
                  className="w-5 h-5 stroke-primary-color hover: stroke-higthligth-color"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 17 14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            ) : null}
          </div>
          {
            /* mostrar menu de los filtros */
            location.pathname === "/" ? (
              <div
                className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                  showFilterMenu ? "block" : "hidden"
                }`}
                id="navbar-user"
              >
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-secondary-color md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                  <li>
                    <button
                      onClick={(e) => handleFilterSelected(e, 'all')}
                      className={`w-full block py-2 px-3 ${
                        filterReviews === "all"
                          ? "text-secondary-color bg-primary-color md:bg-transparent md:text-primary-color "
                          : "text-gray-900 bg-secondary-color md:hover:bg-transparent md:hover:text-primary-color hover:bg-gray-100"
                      } rounded  md:p-0 `}
                      aria-current="page"
                    >
                      Todo
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={(e) => handleFilterSelected(e, "Alojamiento")}
                      className={`w-full block py-2 px-3 ${
                        filterReviews === "Alojamiento"
                          ? "text-secondary-color bg-primary-color md:bg-transparent md:text-primary-color "
                          : "text-gray-900 bg-secondary-color md:hover:bg-transparent md:hover:text-primary-color hover:bg-gray-100"
                      } rounded  md:p-0 `}
                      aria-current="page"
                    >
                      Alojamiento
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={(e) => handleFilterSelected(e, "Alimentación")}
                      className={`w-full block py-2 px-3 ${
                        filterReviews === "Alimentación"
                          ? "text-secondary-color bg-primary-color md:bg-transparent md:text-primary-color "
                          : "text-gray-900 bg-secondary-color md:hover:bg-transparent md:hover:text-primary-color hover:bg-gray-100"
                      } rounded  md:p-0 `}
                    >
                      Alimentación
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={(e) => handleFilterSelected(e, "Planes")}
                      className={`w-full block py-2 px-3 ${
                        filterReviews === "Planes"
                          ? "text-secondary-color bg-primary-color md:bg-transparent md:text-primary-color "
                          : "text-gray-900 bg-secondary-color md:hover:bg-transparent md:hover:text-primary-color hover:bg-gray-100"
                      } rounded  md:p-0 `}
                    >
                      Planes
                    </button>
                  </li>
                </ul>
              </div>
            ) : null
          }
        </div>
      </nav>
    </>
  );
};

export default Navbar;
