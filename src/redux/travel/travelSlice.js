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
        travelsFail:(state,action) => {
            state.isLoadingTravels = false;
            state.errorTravels = action.payload;
        },
        addLuggage:(state,action) => {
            state.luggage.push(action.payload);
            state.isLoadingTravels=false;
        },
        deleteLuggage: (state,action) => {
            state.isLoadingTravels = false;
            state.luggage = state.luggage.filter (item => item.id != action.payload);
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

export const {travelsFail,travelsRequest,fillTravels,addTravel,updateTravel,deleteTravel,addLuggage,updateLuggage,deleteLuggage} = travelSlice.actions;
export default travelSlice.reducer;