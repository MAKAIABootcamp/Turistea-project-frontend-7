// src/redux/reseña/reseñaSlice.js

import { createSlice } from '@reduxjs/toolkit';

const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    review: [],
    isLoadingReview: false,
    errorReview: null,
  },
  reducers: {
    reviewRequest: (state) => {
      state.isLoadingReview = true;
      state.errorReview = null;
    },
    addreview: (state, action) => {
      state.review.push(action.payload);
      state.isLoadingReview = false;
      state.errorReview = null;
    },
    reviewFail: (state, action) => {
      state.isLoadingReview = false;
      state.errorReview = action.payload;
    },
  },
});

export const {
  reviewRequest,  
  reviewFail, 
  addreview,
} = reviewSlice.actions;

export default reviewSlice.reducer;
