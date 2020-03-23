import React from "react";

import { testIds } from "./testIds";

import table from "./Table.module.css";

export const Table = ({ journal }) => {
  return (
    <table className={table.table} data-testid={testIds.table}>
      {journal.map(currentValue => (
        <tr>
          <td className={table.name} data-testid={testIds.tableName}>
            {currentValue.name}
          </td>
          <td className={table.amount} data-testid={testIds.tableAmount}>
            {currentValue.amount}
          </td>
        </tr>
      ))}
    </table>
  );
};
