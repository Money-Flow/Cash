import React from "react";

import { testIds } from "./testIds";

import table from "./Table.module.css";

export const Table = ({ operationList }) => {
  return (
    <table className={table.table} data-testid={testIds.table}>
      {operationList.map((item, index) => (
        <tr key={index}>
          <td className={table.name} data-testid={testIds.tableName}>
            {item.name}
          </td>
          <td className={table.amount} data-testid={testIds.tableAmount}>
            {item.amount}
          </td>
        </tr>
      ))}
    </table>
  );
};
