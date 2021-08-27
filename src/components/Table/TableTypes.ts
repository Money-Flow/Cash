import { OperationListType } from "../Main/MainTypes";

export type TablePropsType = {
  operationList: OperationListType;
  removeItem: (id: string) => void;
};
