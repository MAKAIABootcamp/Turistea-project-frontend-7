import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Cart from "../../pages/Cart";

const Layout = () => {
  const [showLuggage, setShowLuggage] = useState(false);

  const handleShowLuggage = () => {
    setShowLuggage(true)
  };
  
  return (
    <div>
      <Navbar luggage={handleShowLuggage} />
      <Outlet/>
      <Footer/>
      
      {showLuggage ? (
            <span
            onClick={() => setShowLuggage(false)}
             className=" fixed top-0 flex justify-center items-center bg-[#05050549] w-screen h-screen">
              <Cart />
            </span>
          ) : null}
    </div>
    
  );
};

export default Layout;
