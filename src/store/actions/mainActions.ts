import { ADD_OPERATION, DELETE_OPERATION } from "store/constants";
import { IOperationType, MainActionType } from "types";

export const addOperation = (data: IOperationType): MainActionType => ({
  type: ADD_OPERATION,
  payload: { data },
});

export const deleteOperation = (id: string): MainActionType => ({
  type: DELETE_OPERATION,
  payload: { id },
});
