import { createSlice } from "@reduxjs/toolkit";

const initialReviews={
    reviews:[],
    isLoadingReviews: false,
    errorReviews:null,
    filterReviews:null,
}

const reviewsSlice = createSlice({
    name:'reviews',
    initialState: initialReviews,
    reducers:{
        reviewsRequest:(state) => {
            state.isLoadingReviews = true;
            state.errorReviews=null;
        },
        fillReviews: (state, action) =>{
            state.reviews = action.payload;
            state.isLoadingReviews = false;
            state.errorReviews = null;
        },
        reviewsFail:(state,action) => {
            state.isLoadingReviews = false;
            state.errorReviews = action.payload;
        },
        addReviews:(state,action) => {
            state.reviews.push(action.payload);
            state.isLoadingReviews=false;
        },
        updateReviews:(state,action) => {
            state.reviews = state.reviews.map (item => action.payload.id == item.id ? {...item,...action.payload} : item );
            state.isLoadingReviews=false;
        },
        deleteReviews: (state,action) => {
            state.isLoadingReviews = false;
            state.reviews = state.reviews.filter (item => item.id != action.payload);
        },
        selectedFilter:(state,action) => {
            state.filterReviews = action.payload
        }
    }
})

export const {reviewsFail,reviewsRequest,fillReviews,addReviews,updateReviews,deleteReviews,selectedFilter} = reviewsSlice.actions;
export default reviewsSlice.reducer;