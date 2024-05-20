import { configureStore } from '@reduxjs/toolkit';
import userAuthReducer from './userAuth/userAuthSlice'
import savingsReducer from './planAhorro/savingsSlice'
const store = configureStore({
    reducer: {
        userAuth:userAuthReducer,
        savings: savingsReducer,
    },
    devTools: process.env.NODE_ENV !== "production"
})

export default store;