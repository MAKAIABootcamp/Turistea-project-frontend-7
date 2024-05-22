import React, { useCallback, useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useBeforeUnload,
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import DetailsPost from "../pages/DetailsPost";
import Cart from "../pages/Cart";
import SuccessPlan from "../pages/SuccessPlan";
import FormTravelPlans from "../pages/FormTravelPlans";
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
import '../index.scss'

const AppRouter = () => {
  const { user } = useSelector((store) => store.userAuth);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  //Nos aseguramos de guardar la última ruta en la que estuvimos antes de que sucediera la recarga

  const savePath = useCallback(() => {
    sessionStorage.setItem("currentRoute", JSON.stringify(location.pathname));
  }, [location.pathname]);

  useEffect(() => {
    savePath();
  },[savePath])

  useEffect(() => {
    const storeRoute = JSON.parse(sessionStorage.getItem("currentRoute"));
    if (storeRoute) {
      navigate(storeRoute);
    }
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (userCredential) => {
      if (userCredential && !user) {
        dispatch(
          loginSucess({
            id: userCredential.uid,
            name: userCredential.displayName,
            photo: userCredential.photoURL,
            accessToken: userCredential.accessToken,
            email: userCredential.email || null,
            phone: userCredential.phoneNumber || null,
          })
        );
      }
    });
  }, [user, dispatch]);

  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="detailsPost" element={<DetailsPost />} />
          <Route path="configProfile" element={<ConfigProfile />} />
          <Route path="detailsPlan" element={<ViewDetails />} />
          <Route path="formReviews" element={<FormReviews />} />
          <Route path="myProfile" element={<Profile />} />
          <Route path="successPlan" element={<SuccessPlan />} />
        </Route>
        <Route path="/formPlans" element={<FormTravelPlans />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<PrivateRoutes />}></Route>
    </Routes>
  );
};

export default AppRouter;
