import { configureStore } from '@reduxjs/toolkit'
import changeBackgroundReducer from "./features/ChangeBackground";

export default configureStore({
  reducer: {
    changeBackground: changeBackgroundReducer,
  },
})