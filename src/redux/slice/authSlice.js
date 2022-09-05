import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  islogin : false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isLogin: (state) => {
      state.islogin = true
    },
    isLogout: (state) => {
      state.islogin = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { isLogin,isLogout } = authSlice.actions

export default authSlice.reducer