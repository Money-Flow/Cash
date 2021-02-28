import React from "react";

import { totalTestIds as testIds } from "./TotalTestIds";
import { ITotalProps } from "./TotalTypes";

export const Total: React.FC<ITotalProps> = ({ amountList = [] }) => {
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
