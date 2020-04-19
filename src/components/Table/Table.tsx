import React from "react";

import { Total } from "../Total/Total";
import { testIds } from "./testIds";
import { Button } from "../Button/Button";

import table from "./Table.module.css";

import { IExpense } from "../Main/Main";

type IProps = {
  operationList: IExpense[];
  removeItem: (id: string) => void;
};

export const Table = ({ operationList, removeItem }: IProps) => {
  return (
    <table className={table.table} data-testid={testIds.table}>
      <tbody>
        {operationList.map((item, index) => (
          <tr data-testid={`${testIds.row}-${index}`} key={index}>
            <td className={table.name} data-testid={testIds.name}>
              {item.name}
            </td>
            <td className={table.amount} data-testid={testIds.amount}>
              {item.amount}
            </td>
            <td className={table.removeItem}>
              <Button
                onClick={() => removeItem(item.id)}
                withConfirm={true}
                text="Delete"
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
