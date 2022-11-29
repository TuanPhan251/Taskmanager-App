import { createAction } from "@reduxjs/toolkit";

export const createTaskAction = createAction("CREATE_TASK");
export const updateTaskAction = createAction("UPDATE_TASK");
export const deleteTaskAction = createAction("DELETE_TASK");
