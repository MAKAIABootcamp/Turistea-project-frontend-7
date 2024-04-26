import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import DetailsPost from "../pages/DetailsPost/DetailsPost";
import Cart from "../pages/Cart/Cart";
import SuccessPlan from "../pages/SuccessPlan/SuccessPlan";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
