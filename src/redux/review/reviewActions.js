import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig"; // Ajusta la ruta según sea necesario
import { reseñasRequest, reseñasFail, addReseña } from "./reviewSlice";

const COLLECTION_NAME = "Reviews"; // Nombre de la colección
const collectionRef = collection(db, COLLECTION_NAME); // Referencia de la colección

export const actionAddReseña = (newReseña) => {
  return async (dispatch) => {
    dispatch(reseñasRequest());
    try {
      console.log("Adding new review to Firestore:", newReseña);
      const docRef = await addDoc(collectionRef, newReseña);
      dispatch(
        addReseña({
          id: docRef.id,
          ...newReseña,
        })
      );
      console.log("Review successfully added with ID:", docRef.id);
    } catch (error) {
      console.error("Error adding review to Firestore:", error);
      dispatch(reseñasFail(error.message));
    }
  };
};
