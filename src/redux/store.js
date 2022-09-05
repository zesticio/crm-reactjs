import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slice/authSlice";
import themeReducer from "../redux/slice/themeSlice";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk'

const reducers = combineReducers({
  auth : authReducer,
  theme : themeReducer
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.REACT_APP_NODE_ENV !== "production",
  middleware: [thunk],
});
