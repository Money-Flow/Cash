import { OperationType } from "../../components/Main/MainTypes";

export type MainActionType = {
  type: string;
  payload: {
    data?: OperationType;
    id?: string;
  };
};
