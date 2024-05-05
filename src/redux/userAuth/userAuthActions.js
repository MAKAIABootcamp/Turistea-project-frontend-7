import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { loginFail, loginRequest, loginSucess } from "./userAuthSlice";
import { auth } from "../../firebase/firebaseConfig";

export const actionRegisterWithEmailAndPassword = ({
  email,
  password,
  name,
  photo,
}) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
      dispatch(
        loginSucess({
          name: name,
          id: user.uid,
          accessToken: user.accessToken,
          email: email,
          photo: photo,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(loginFail(error.message));
    }
  };
};
