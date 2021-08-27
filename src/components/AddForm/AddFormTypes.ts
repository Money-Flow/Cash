import { OperationType } from "../Main/MainTypes";

export type AddFormPropsType = {
  onSubmit: (arg: OperationType) => void;
  name?: string;
  amount?: number;
};
