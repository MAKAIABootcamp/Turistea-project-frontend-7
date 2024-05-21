import { configureStore } from '@reduxjs/toolkit';
import userAuthReducer from './userAuth/userAuthSlice'
import reviewsReducer from './review/reviewSlice';
import travelPlansReducer from './travelPlan/travelPlanSlice';
import travelReducer from './travel/travelSlice'

const store = configureStore({
    reducer: {
        userAuth:userAuthReducer,
        reviews: reviewsReducer,
        travelsPlan: travelPlansReducer,
        travel: travelReducer
    },
    devTools: process.env.NODE_ENV !== "production"
})

export default store;