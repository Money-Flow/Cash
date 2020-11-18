import { IExpense } from "./MainTypes";

export type IAddFormProps = {
  onSubmit: (arg: IExpense) => void;
  name?: string;
  amount?: number;
};
