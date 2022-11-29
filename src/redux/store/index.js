import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "../reducers/task.reducer";

const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

export default store;
