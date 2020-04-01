import React from "react";
import { testIds } from "./testIds";

export const Total = ({ amountList = [] }) => {
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
