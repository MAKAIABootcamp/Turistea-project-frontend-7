import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Cart from "../../pages/Cart";

const Layout = () => {
  const [showLuggage, setShowLuggage] = useState(false);
  const [filterSelected, setFilterSelected] = useState(1);
  const handleShowLuggage = () => {
    setShowLuggage(true)
  };

  
  return (
    <div>
      <Navbar luggage={handleShowLuggage} filter={(num)=> setFilterSelected(num)} />
      <Outlet/>
      <Footer/>
      
      {showLuggage ? (
            <a
            onClick={() => setShowLuggage(false)}
             className=" fixed top-0 flex justify-center items-center bg-[#05050549] w-screen h-screen">
              <Cart />
            </a>
          ) : null}
    </div>
    
  );
};

export default Layout;
