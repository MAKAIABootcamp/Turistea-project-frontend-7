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

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="register" element={<Register />} />
          <Route index element={<Home />} />
          <Route path="detailsPost" element={<DetailsPost />} />
          <Route path="cart" element={<Cart />} />
          <Route path="successPlan" element={<SuccessPlan />} />
          <Route path="form" element={<FormTravelPlans />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
