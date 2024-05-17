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
        loginSucess: (state,action) =>{
            state.user=action.payload;
            state.isAuth=true;
            state.isLoading=false;
            state.error=null;
        },
        loginRequest: (state) => {
            state.isLoading = true;
            state.error=null;
        },
        loginFail:(state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        logout: (state) =>{
            state.user = initialUser.user
            state.isAuth=initialUser.isAuth
            state.isLoading= initialUser.isLoading;
            state.error= initialUser.error;
        }
    }
});

export const {loginSucess,loginRequest,loginFail,logout}=userAuthSlice.actions;
export default userAuthSlice.reducer