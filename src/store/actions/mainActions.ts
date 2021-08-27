import { ADD_OPERATION, DELETE_OPERATION } from "../constants";
import { OperationType } from "../../components/Main/MainTypes";
import { MainActionType } from "../../types";

export const addOperation = (data: OperationType): MainActionType => ({
  type: ADD_OPERATION,
  payload: { data },
});

export const deleteOperation = (id: string): MainActionType => ({
  type: DELETE_OPERATION,
  payload: { id },
});
