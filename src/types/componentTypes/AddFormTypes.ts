import { IOperationType } from "./MainTypes";

export type IAddFormPropsType = {
  onSubmit: (arg: IOperationType) => void;
  name?: string;
  amount?: number;
};
