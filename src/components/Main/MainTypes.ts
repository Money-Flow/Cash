export type OperationType = {
  notes: string;
  amount: number;
  id: string;
  withConfirm?: boolean;
};

export type OperationListType = OperationType[];
