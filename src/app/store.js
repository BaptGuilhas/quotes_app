import { configureStore } from '@reduxjs/toolkit';
import idxerReducer from '../features/idxer/IdxerSlice';

export const store = configureStore({
  reducer: {
    idx_nameSlice: idxerReducer,
  },
});
