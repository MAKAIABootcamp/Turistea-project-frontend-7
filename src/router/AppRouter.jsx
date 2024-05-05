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
import ConfigProfile from "../pages/ConfigProfile";
import ViewDetails from "../pages/ViewDetails";
import FormReviews from "../pages/FormReviews";
import Profile from "../pages/Profile";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="detailsPost" element={<DetailsPost />} />
          <Route path="formReviews" element={<FormReviews/>} />
          <Route path="successPlan" element={<SuccessPlan />} />
          <Route path="myProfile" element={<Profile/>}/>
          <Route path="configProfile" element={<ConfigProfile />}/>
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
