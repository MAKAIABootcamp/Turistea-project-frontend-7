import { createSlice } from '@reduxjs/toolkit';


const savingsSlice = createSlice({
  name: 'savings',
  initialState: {
    datesBox: [],
    countBox: 0
  },
  reducers: {
    setCheckboxes: (state, action) => {
      state.datesBox = action.payload;
      state.countBox = action.payload.length;
    },
    toggleCheckbox: (state, action) => {
      const index = action.payload;
      if (index >= 0 && index < state.datesBox.length) {
        state.datesBox[index].checked = !state.datesBox[index].checked;
        
      } else {
        console.error("Invalid index for toggleCheckbox:", index);
      }
    }
  }
});

export const { setCheckboxes, toggleCheckbox } = savingsSlice.actions;
export default savingsSlice.reducer;