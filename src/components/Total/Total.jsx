import React from "react";
import { testIds } from "./testIds";

export const Total = ({ operationList = [] }) => {
  const total = operationList.reduce((acc, currentValue) => {
    return acc + currentValue;
  }, 0);

  return (
    <>
      {operationList.length > 0 && (
        <div>
          Total: $<span data-testid={testIds.total}>{total}</span>
        </div>
      )}
    </>
  );
};
