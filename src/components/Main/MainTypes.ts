export type IOperationType = {
  notes: string;
  amount: number;
  id: string;
  withConfirm?: boolean;
};

export type IOperationListType = IOperationType[];
