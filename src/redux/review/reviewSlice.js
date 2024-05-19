// src/redux/reseña/reseñaSlice.js

import { createSlice } from '@reduxjs/toolkit';

const reseñaSlice = createSlice({
  name: 'reseñas',
  initialState: {
    reseñas: [],
    isLoadingReseñas: false,
    errorReseñas: null,
  },
  reducers: {
    reseñasRequest: (state) => {
      state.isLoadingReseñas = true;
      state.errorReseñas = null;
    },
    addReseña: (state, action) => {
      state.reseñas.push(action.payload);
      state.isLoadingReseñas = false;
      state.errorReseñas = null;
    },
    reseñasFail: (state, action) => {
      state.isLoadingReseñas = false;
      state.errorReseñas = action.payload;
    },
  },
});

export const {
  reseñasRequest,
  addReseña,
  reseñasFail,
} = reseñaSlice.actions;

export default reseñaSlice.reducer;
