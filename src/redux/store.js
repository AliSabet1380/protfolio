import { configureStore } from '@reduxjs/toolkit';
import { activeSectionReducers } from './sectionSlice';

export const store = configureStore({
  reducer: { activeSection: activeSectionReducers },
});
