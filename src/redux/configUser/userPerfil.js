import { createSlice } from "@reduxjs/toolkit";
const initialUser = {
  user: [],
};

const configSlice = createSlice({
  name: "userPerfil",
  initialState: initialUser,
  reducers: {
    loadProfile: (state, action) => {
      state.user = action.payload;
      
    },
  },
});

export const { loadProfile } = configSlice.actions; //Creator actions
export default configSlice.reducer; //Función reductora