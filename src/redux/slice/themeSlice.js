import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isDark  : false,
}

export const themeSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    switchTheme : (state) => {
      state.isDark = !state.isDark 
    },
  },
})

// Action creators are generated for each case reducer function
export const { switchTheme } = themeSlice.actions

export default themeSlice.reducer