import { MainActionType } from "../../types";
import { OperationType } from "../../components/Main/MainTypes";
import { ADD_OPERATION, DELETE_OPERATION } from "../constants";

type MainStateType = {
  operationDataList: (OperationType | undefined)[];
};

const initialState: MainStateType = {
  operationDataList: [],
};

export const main = (
  state: MainStateType = initialState,
  { type, payload }: MainActionType
): MainStateType => {
  switch (type) {
    case ADD_OPERATION:
      return {
        operationDataList: [...state.operationDataList, payload.data],
      };
    case DELETE_OPERATION:
      return {
        operationDataList: state.operationDataList.filter(
          (operation) => operation && operation.id !== payload.id
        ),
      };
    default:
      return state;
  }
};
