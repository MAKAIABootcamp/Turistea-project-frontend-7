import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig"; // Ajusta la ruta según sea necesario
import { reviewRequest, reviewFail, addreview } from "./reviewSlice";

const COLLECTION_NAME = "Reviews"; // Nombre de la colección
const collectionRef = collection(db, COLLECTION_NAME); // Referencia de la colección

export const actionAddReview = (newReview) => {
  return async (dispatch) => {
    dispatch(reviewRequest());
    try {
      console.log("Adding new review to Firestore:", newReview);
      const docRef = await addDoc(collectionRef, newReview);
      dispatch(
        addreview({
          id: docRef.id,
          ...newReview,
        })
      );
      console.log("Review successfully added with ID:", docRef.id);
    } catch (error) {
      console.error("Error adding review to Firestore:", error);
      dispatch(reviewFail(error.message));
    }
  };
};
