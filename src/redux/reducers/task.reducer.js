import { createReducer } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const storage = localStorage.getItem("tasks");
const initialState = {
  taskList: JSON.parse(storage) || [],
  };

const taskReducer = createReducer(initialState, {
  CREATE_TASK: (state, action) => {
    const { values } = action.payload;
    const newTask = {
      ...values,
      id: uuidv4(),
    };
    const newTaskList = [newTask, ...state.taskList];
    localStorage.setItem("tasks", JSON.stringify(newTaskList));

    return {
      ...state,
      taskList: newTaskList,
    };
  },
  UPDATE_TASK: (state, action) => {
    const { values, id } = action.payload;
    const updateTask = {
      ...values,
      id,
    };
    const newTaskList = [...state.taskList];
    let index = newTaskList.findIndex((task) => task.id === id);
    newTaskList.splice(index, 1, updateTask);

    localStorage.setItem("tasks", JSON.stringify(newTaskList));

    return {
      ...state,
      taskList: newTaskList,
    };
  },
  DELETE_TASK: (state, action) => {
    const { id } = action.payload;
    const newTaskList = state.taskList.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(newTaskList));

    return {
      ...state,
      taskList: newTaskList,
    };
  },
});

export default taskReducer;
