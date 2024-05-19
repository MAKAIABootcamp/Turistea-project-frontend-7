import { createSlice } from "@reduxjs/toolkit";

const initialTravel={
    travel:[],
    isLoadingTravel: false,
    errorTravel:null,
}

const travelSlice = createSlice({
    name:'travel',
    initialState: initialTravel,
    reducers:{
        travelRequest:(state) => {
            state.isLoadingTravel = true;
            state.errorTravel=null;
        },
        fillTravel: (state, action) =>{
            state.travel = action.payload;
            state.isLoadingTravel = false;
            state.errorTravel = null;
        },
        travelFail:(state,action) => {
            state.isLoadingTravel = false;
            state.errorTravel = action.payload;
        },
        addTravel:(state,action) => {
            state.travel.push(action.payload);
            state.isLoadingTravel=false;
        },
        updateTravel:(state,action) => {
            state.travel = state.travel.map (item => action.payload.id == item.id ? {...item,...action.payload} : item );
            state.isLoadingTravel=false;
        },
        deleteTravel: (state,action) => {
            state.isLoadingTravel = false;
            state.travel = state.travel.filter (item => item.id != action.payload);
        }
    }
})

export const {TravelFail,TravelRequest,fillTravel,addTravel,updateTravel,deleteTravel} = travelSlice.actions;
export default travelSlice.reducer;