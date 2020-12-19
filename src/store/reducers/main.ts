import { MainActionType, IOperationType } from "../../types";
import { ADD_OPERATION, DELETE_OPERATION } from "../../constants/actionTypes";

type MainStateType = {
  operationDataList: (IOperationType | undefined)[];
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
