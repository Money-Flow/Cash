import React from "react";
import testIds from "./testIds";
import { ITotalProps } from "../../types/TotalTypes";

const Total = ({ amountList = [] }: ITotalProps): JSX.Element => {
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

export default Total;
