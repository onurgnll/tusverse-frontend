import { configureStore } from '@reduxjs/toolkit'
import  {thunk}  from 'redux-thunk'
import authSlice from '../features/authSlice'
export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})