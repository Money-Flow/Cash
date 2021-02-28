import React from "react";

import { Total } from "../Total";
import { Button, ButtonEnumType } from "../Button";
import { tableTestIds as testIds } from "./TableTestIds";
import { TablePropsType } from "./TableTypes";

import table from "./Table.module.css";

export const Table: React.FC<TablePropsType> = ({
  operationList,
  removeItem,
}) => (
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
