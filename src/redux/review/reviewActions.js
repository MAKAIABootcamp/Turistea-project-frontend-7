import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  orderBy,
} from "firebase/firestore";
import { database } from "../../firebase/firebaseConfig";
import {
  fillReviews,
  reviewsFail,
  reviewsRequest,
  filterReviews,
} from "./reviewSlice";

const COLLECTION_NAME = "Reviews";
const collectionRef = collection(database, COLLECTION_NAME);

const actionAddReview = (newReview) => {
  return async (dispatch) => {
    dispatch(reviewsRequest());
    try {
      const docRef = await addDoc(collectionRef, newReview);
      dispatch(
        fillReviews({
          id: docRef.id,
        })
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      dispatch(reviewsFail(e.message));
    }
  };
};

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

export const actionMultipleFilterReviews = (filters) => {
  return async (dispatch) => {
    dispatch(reviewsRequest());
    const reviews = [];
    const cadenaDeConsulta = [];
    try {
      for (const key in filters) {
        // if (key === "price") {
        //   if (filters[key] === "desc") {
        //     cadenaDeConsulta.push(orderBy(key, filters[key]));
        //   } else {
        //     cadenaDeConsulta.push(orderBy(key));
        //   }
        // } else if (key === "score") {
        //   cadenaDeConsulta.push(orderBy(key,filters[key]));
        // } else 
        if (filters[key] !== "all") {
          cadenaDeConsulta.push(where(key, "==", filters[key]));
        }
      }

      const q = query(collectionRef, ...cadenaDeConsulta);

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        reviews.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      // console.log(reviews);
      dispatch(filterReviews(reviews));
    } catch (error) {
      console.error(error);
      dispatch(reviewsFail(error.message));
    }
  };
};
