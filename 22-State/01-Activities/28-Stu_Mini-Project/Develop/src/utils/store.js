import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers.js";

export const store = configureStore({
  reducer: reducers,
});
