import React, { useEffect } from "react";
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
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { loginSucess } from "../redux/userAuth/userAuthSlice";

const AppRouter = () => {
  const { user } = useSelector((store) => store.userAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userCredential) => {
      if (userCredential && !user) {
        dispatch(
          loginSucess({
            id: userCredential.uid,
            name: userCredential.displayName,
            photo: userCredential.photoURL,
            accessToken: userCredential.accessToken,
          })
        );
      }
    });
  }, [user, dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<PrivateRoutes />}>
            <Route index element={<Home />} />
            <Route path="detailsPost" element={<DetailsPost />} />
            <Route path="formReviews" element={<FormReviews />} />
            <Route path="successPlan" element={<SuccessPlan />} />
            <Route path="myProfile" element={<Profile />} />
            <Route path="configProfile" element={<ConfigProfile />} />
            <Route path="detailsPlan" element={<ViewDetails />} />
          </Route>
        </Route>
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/formPlans" element={<FormTravelPlans />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
