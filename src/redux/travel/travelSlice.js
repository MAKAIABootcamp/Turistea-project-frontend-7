import { createSlice } from "@reduxjs/toolkit";

const initialTravel={
    travels:[],
    luggage:[],
    isLoadingTravels: false,
    errorTravels:null,
}

const travelSlice = createSlice({
    name:'travel',
    initialState: initialTravel,
    reducers:{
        travelsRequest:(state) => {
            state.isLoadingTravels = true;
            state.errorTravels=null;
        },
        fillTravels: (state, action) =>{
            state.travels = action.payload;
            state.isLoadingTravels = false;
            state.errorTravels = null;
        },
        travelFail:(state,action) => {
            state.isLoadingTravels = false;
            state.errorTravels = action.payload;
        },
        addTravel:(state,action) => {
            state.travels.push(action.payload);
            state.isLoadingTravels=false;
        },
        addTravel:(state,action) => {
            state.travels.push(action.payload);
            state.isLoadingTravels=false;
        },
        updateTravel:(state,action) => {
            state.travels = state.travels.map (item => action.payload.id == item.id ? {...item,...action.payload} : item );
            state.isLoadingTravels=false;
        },
        deleteTravel: (state,action) => {
            state.isLoadingTravels = false;
            state.travels = state.travels.filter (item => item.id != action.payload);
        }
    }
})

export const {TravelFail,TravelRequest,fillTravel,addTravel,updateTravel,deleteTravel} = travelSlice.actions;
export default travelSlice.reducer;