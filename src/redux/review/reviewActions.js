import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { database } from "../../firebase/firebaseConfig";
import { fillReviews, reviewsFail, reviewsRequest } from "./reviewSlice";

const COLLECTION_NAME='Reviews'
const collectionRef=collection(database, COLLECTION_NAME)

const actionAddReview = (newReview) =>{
    return async (dispatch) => {
        dispatch(reviewsRequest())
        try {
          const docRef = await addDoc(collectionRef, newReview);
          dispatch(fillReviews({
            id: docRef.id
          }))
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
          dispatch(reviewsFail(e.message))
        }

    }
}

export const actionGetReviews = () => {
  return async (dispatch) => {
    dispatch(reviewsRequest());
    const reviews = [];
    try {
      const querySnapshot = await getDocs(collectionRef);
      querySnapshot.forEach((doc) => {
        reviews.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      dispatch(fillReviews(reviews));
    } catch (error) {
      console.error(error);
      dispatch(reviewsFail(error.message));
    }
  };
};
