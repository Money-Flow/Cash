import { ADD_OPERATION, DELETE_OPERATION } from "../constants";
import { IOperationType } from "../../components/Main/MainTypes";
import { MainActionType } from "../../types";

export const addOperation = (data: IOperationType): MainActionType => ({
  type: ADD_OPERATION,
  payload: { data },
});

export const deleteOperation = (id: string): MainActionType => ({
  type: DELETE_OPERATION,
  payload: { id },
});
