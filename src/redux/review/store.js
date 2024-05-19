import { configureStore } from '@reduxjs/toolkit';
import reseñaReducer from './reviewSlice'; // Asegúrate de que esta ruta es correcta

const store = configureStore({
  reducer: {
    reseñas: reseñaReducer,
  },
});

export default store;
