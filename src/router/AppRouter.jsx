import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import DetailsPost from "../pages/DetailsPost";
import Cart from "../pages/Cart";
import SuccessPlan from "../pages/SuccessPlan";
import FormTravelPlans from "../components/FormTravelPlans/FormTravelPlans";
import Perfil from "../pages/Perfil";
import ConfigPerfil from "../pages/configPerfil";
import ViewDetails from "../pages/ViewDetails";
import CrearReseña from "../pages/CrearReseña";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="detailsPost" element={<DetailsPost />} />
          <Route path="formReseñas" element={<CrearReseña/>} />
          <Route path="successPlan" element={<SuccessPlan />} />
          <Route path="myProfile" element={<Perfil/>}/>
          <Route path="configPerfil" element={<ConfigPerfil />}/>
          <Route path="detailsPlan" element={<ViewDetails />}/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="formPlans" element={<FormTravelPlans />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
