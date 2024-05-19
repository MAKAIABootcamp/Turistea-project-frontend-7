import { createSlice } from "@reduxjs/toolkit";

const initialTravelPlans={
    travelPlans:[],
    isLoadingTravelPlans: false,
    errorTravelPlans:null,
}

const travelPlansSlice = createSlice({
    name:'travelPlans',
    initialState: initialTravelPlans,
    reducers:{
        travelPlansRequest:(state) => {
            state.isLoadingTravelPlans = true;
            state.errorTravelPlans=null;
        },
        fillTravelPlans: (state, action) =>{
            state.travelPlans = action.payload;
            state.isLoadingTravelPlans = false;
            state.errorTravelPlans = null;
        },
        travelPlansFail:(state,action) => {
            state.isLoadingTravelPlans = false;
            state.errorTravelPlans = action.payload;
        },
        addTravelPlans:(state,action) => {
            state.travelPlans.push(action.payload);
            state.isLoadingTravelPlans=false;
        },
        updateTravelPlans:(state,action) => {
            state.travelPlans = state.travelPlans.map (item => action.payload.id == item.id ? {...item,...action.payload} : item );
            state.isLoadingTravelPlans=false;
        },
        deleteTravelPlans: (state,action) => {
            state.isLoadingTravelPlans = false;
            state.travelPlans = state.travelPlans.filter (item => item.id != action.payload);
        }
    }
})

export const {TravelPlansFail,TravelPlansRequest,fillTravelPlans,addTravelPlans,updateTravelPlans,deleteTravelPlans} = travelPlansSlice.actions;
export default travelPlansSlice.reducer;