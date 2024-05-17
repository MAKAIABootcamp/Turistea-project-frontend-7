import { configureStore } from '@reduxjs/toolkit';
import userAuthReducer from './userAuth/userAuthSlice'
import userPerfilReducer from './configUser/userPerfil';

const store = configureStore({
    reducer: {
        userPerfil:userPerfilReducer,
        userAuth:userAuthReducer
    },
    devTools: process.env.NODE_ENV !== "production"
})

export default store;