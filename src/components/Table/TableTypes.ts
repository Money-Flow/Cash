import { IOperationListType } from "../Main/MainTypes";

export type TablePropsType = {
  operationList: IOperationListType;
  removeItem: (T: string) => void;
};
