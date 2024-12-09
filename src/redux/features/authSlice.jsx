import {  createSlice } from '@reduxjs/toolkit'
import { login } from '../actions/authActions';

const initialState = {
  logged: false,
  userId: null,
  accessToken: null,


  notifications: [],

  notificationCount: 0,

  loggedUser: false,
  openLoginDialog: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedStatus: (state, action) => {
      state.logged = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload.success == 1) {
          state.logged = true
          state.loggedUser = action.payload.data.admin
          
        }
      })
  },

});

export const {setLoggedStatus } = authSlice.actions

export default authSlice.reducer;
