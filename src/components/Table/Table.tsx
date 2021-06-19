import React from "react";

import { Total } from "components/Total";
import { Button } from "components/Button";
import { ButtonEnumType, IOperationListType } from "types";
import { tableTestIds as testIds } from "tests/testIds";

import table from "components/Table/Table.module.css";

type TableProps = {
  operationList: IOperationListType;
  removeItem: (T: string) => void;
};

export const Table: React.FC<TableProps> = ({ operationList, removeItem }) => {
  return (
    <table className={table.table} data-testid={testIds.table}>
      <tbody>
        {operationList.map(({ notes, amount, id }, index) => (
          <tr data-testid={`${testIds.row}-${index}`} key={id}>
            <td className={table.name} data-testid={testIds.name}>
              {notes}
            </td>
            <td className={table.amount} data-testid={testIds.amount}>
              {amount}
            </td>
            <td className={table.removeItem}>
              <Button
                onClick={() => removeItem(id)}
                withConfirm
                text="Delete"
                type={ButtonEnumType.button}
              />
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td />
          <td>
            <Total amountList={operationList.map((x) => x.amount)} />
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
