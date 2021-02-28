import { IOperationType } from "../Main/MainTypes";

export type IAddFormPropsType = {
  onSubmit: (arg: IOperationType) => void;
  name?: string;
  amount?: number;
};
