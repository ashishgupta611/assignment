import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
  language: 'en' | 'ar';
}

const initialState: SettingsState = {
  language: 'en',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<'en' | 'ar'>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = settingsSlice.actions;
export default settingsSlice.reducer;
