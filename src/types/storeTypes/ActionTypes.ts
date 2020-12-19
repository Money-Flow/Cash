import { IOperationType } from "../MainTypes";

export type MainActionType = {
  type: string;
  payload: {
    data?: IOperationType;
    id?: string;
  };
};
