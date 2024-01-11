import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeSection: 'Home',
};

const activeSectionSlice = createSlice({
  name: 'activeSection',
  initialState,
  reducers: {
    setActiveSection(state, action) {
      state.activeSection = action.payload;
    },
  },
});

export const activeSectionActions = activeSectionSlice.actions;
export const activeSectionReducers = activeSectionSlice.reducer;
