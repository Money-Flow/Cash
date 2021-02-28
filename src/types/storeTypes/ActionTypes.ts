import { IOperationType } from "../componentTypes/MainTypes";

export type MainActionType = {
  type: string;
  payload: {
    data?: IOperationType;
    id?: string;
  };
};
