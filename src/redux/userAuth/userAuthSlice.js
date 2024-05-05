import { createSlice } from '@reduxjs/toolkit';

const initialUser = {
    user:null,
    isAuth:false,
    isLoading:false,
    error:null
}

const userAuthSlice = createSlice({
    name:"userAuth",
    initialState: initialUser,
    reducers:{
        login: (state,action) =>{
            state.user=action.payload;
            state.isAuth=true;
            state.isLoading=false;
            state.error=null;
        },
        setIsLoadind: (state) => {
            state.isLoading = true;
            state.error=null;
        },
        setError:(state) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const {login,setIsLoadind,setError}=userAuthSlice.actions;
export default userAuthSlice.reducer