import React from "react";

import { totalTestIds as testIds } from "./TotalTestIds";
import { TotalPropsType } from "./TotalTypes";

export const Total: React.FC<TotalPropsType> = ({ amountList = [] }) => {
  const total: number = amountList.reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );

  return (
    <>
      {!!amountList.length && (
        <div>
          Total: $<span data-testid={testIds.total}>{total}</span>
        </div>
      )}
    </>
  );
};
