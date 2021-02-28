import { IOperationType } from "../../components/Main/MainTypes";

export type MainActionType = {
  type: string;
  payload: {
    data?: IOperationType;
    id?: string;
  };
};
