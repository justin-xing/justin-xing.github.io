import { configureStore } from "@reduxjs/toolkit";

import darkReducer from './darkMode';

const store = configureStore({
  reducer: { darkMode: darkReducer },
});

export default store;
