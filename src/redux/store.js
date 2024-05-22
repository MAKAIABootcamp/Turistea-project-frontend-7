import { configureStore } from '@reduxjs/toolkit';
import userAuthReducer from './userAuth/userAuthSlice'
import reviewsReducer from './review/reviewSlice';
import travelPlansReducer from './travelPlan/travelPlanSlice';
import travelsReducer from './travel/travelSlice'
import savingsReducer from './planAhorro/savingsSlice'
const store = configureStore({
    reducer: {
        userAuth:userAuthReducer,
        reviews: reviewsReducer,
        travelsPlan: travelPlansReducer,
        travels: travelsReducer,
        savings: savingsReducer,
    },
    devTools: process.env.NODE_ENV !== "production"
})

export default store;