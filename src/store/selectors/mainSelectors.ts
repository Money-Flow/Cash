import { createSelector } from "reselect";
import { RootState } from "../../types/store/StoreTypes";

const operationSelector = (state: RootState) => state.operation;

export const selectOperationDataList = createSelector(
  operationSelector,
  (operation) => operation.operationDataList
);
