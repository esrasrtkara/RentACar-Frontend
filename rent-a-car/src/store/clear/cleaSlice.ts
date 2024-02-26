import { createSlice } from '@reduxjs/toolkit';

const clearSlice = createSlice({
  name: 'clear',
  initialState: {}, // initialState'i boş bırakabilirsiniz, çünkü bu sadece temizleme amacıyla kullanılacak
  reducers: {
    clearState: () => ({}), // Reducer state'i sıfırlar
  },
});

export const { clearState } = clearSlice.actions;
export const CLEAR_STATE = 'clear/CLEAR_STATE';

export default clearSlice.reducer;
