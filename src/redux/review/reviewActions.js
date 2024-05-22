import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { reviewRequest, reviewFail, addReview } from "./reviewSlice";

const COLLECTION_NAME = "Reviews";
const collectionRef = collection(db, COLLECTION_NAME);

export const actionAddReview = (newReview) => {
  return async (dispatch) => {
    dispatch(reviewRequest());
    try {
      console.log("Adding new review to Firestore:", newReview);
      const docRef = await addDoc(collectionRef, newReview);
      dispatch(
        addReview({
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

export const actionUpdateReview = (updatedReview) => {
  return async (dispatch) => {
    dispatch(reviewRequest());
    try {
      const docRef = doc(db, COLLECTION_NAME, updatedReview.id);
      await updateDoc(docRef, updatedReview);
      dispatch(addReview(updatedReview));
      console.log("Review successfully updated with ID:", updatedReview.id);
    } catch (error) {
      console.error("Error updating review in Firestore:", error);
      dispatch(reviewFail(error.message));
    }
  };
};

// Acción para eliminar una reseña
export const actionDeleteReview = (reviewId) => async (dispatch) => {
  try {
    await deleteDoc(doc(db, 'Reviews', reviewId));
    dispatch({
      type: 'detele_review',
      payload: reviewId,
    });
    Swal.fire('Deleted!', 'Your review has been deleted.', 'success');
  } catch (error) {
    console.error('Error deleting review: ', error);
    Swal.fire('Error!', 'There was a problem deleting the review.', 'error');
  }
};
