import { configureStore } from '@reduxjs/toolkit';
import reviewReducer from './reviewSlice'; // Asegúrate de que esta ruta es correcta

const store = configureStore({
  reducer: {
    review: reviewReducer,
  },
});

export default store;
