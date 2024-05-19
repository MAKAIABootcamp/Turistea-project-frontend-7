import { collection, addDoc } from "firebase/firestore"; 
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
