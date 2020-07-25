import React from "react";
import { testIds } from "./testIds";

export type IProps = {
  amountList: number[];
};

export const Total = ({ amountList = [] }: IProps) => {
  const total = amountList.reduce((acc, currentValue) => {
    return acc + currentValue;
  }, 0);

  return (
    <>
      {amountList.length > 0 && (
        <div>
          Total: $<span data-testid={testIds.total}>{total}</span>
        </div>
      )}
    </>
  );
};
