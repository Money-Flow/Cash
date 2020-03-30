import React from "react";

import { testIds } from "./testIds";

import table from "./Table.module.css";

export const Table = ({ operationList }) => {
  return (
    <table className={table.table} data-testid={testIds.table}>
      {operationList.map((item, index) => (
        <tr data-testid={testIds.row} key={index}>
          <td className={table.name} data-testid={testIds.name}>
            {item.name}
          </td>
          <td className={table.amount} data-testid={testIds.amount}>
            {item.amount}
          </td>
        </tr>
      ))}
    </table>
  );
};
