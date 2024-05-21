// src/redux/review/reviewSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { deleteDoc, doc } from 'firebase/firestore';
import { database } from '../../firebase/firebaseConfig';

const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    reviews: [], // Asegúrate de que sea una matriz vacía
    isLoadingReview: false,
    errorReview: null,
  },
  reducers: {
    reviewRequest: (state) => {
      state.isLoadingReview = true;
      state.errorReview = null;
    },
    addReview: (state, action) => {
      state.reviews.push(action.payload); // Usa 'reviews' aquí
      state.isLoadingReview = false;
      state.errorReview = null;
    },
    reviewFail: (state, action) => {
      state.isLoadingReview = false;
      state.errorReview = action.payload;
    },
    deleteReview: (state, action) => {
      state.reviews = state.reviews.filter(review => review.id !== action.payload);
    }
  },
});

export const {
  reviewRequest,  
  reviewFail, 
  addReview,
  deleteReview,
} = reviewSlice.actions;

export default reviewSlice.reducer;

// Thunk for deleting a review
export const deleteReviewAsync = (reviewId) => async (dispatch) => {
  try {
    await deleteDoc(doc(database, 'Reviews', reviewId));
    dispatch(deleteReview(reviewId));
  } catch (error) {
    dispatch(reviewFail(error.message));
  }
};
