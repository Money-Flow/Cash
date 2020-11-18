import { IExpense } from "./MainTypes";

export type ITableProps = {
  operationList: IExpense[];
  removeItem: (id: string) => void;
};
