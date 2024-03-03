import { createSlice } from '@reduxjs/toolkit';

const refreshSlice = createSlice({
  name: 'refresh',
  initialState: {
    refreshToken: null,
  },
  reducers: {
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    clearRefreshToken: (state) => {
      state.refreshToken = null;
    },
  },
});

export const { setRefreshToken, clearRefreshToken } = refreshSlice.actions;
export const selectRefreshToken = (state: any) => state.refresh.refreshToken;
export const refreshReducer = refreshSlice.reducer;