import React from "react";

import { Total } from "../Total/Total";
import { testIds } from "./testIds";
import { RemoveItem } from "../RemoveItem/RemoveItem";

import table from "./Table.module.css";

type IExpance = {
  name: string;
  amount: number;
  id: string;
};

type IProps = {
  operationList: IExpance[];
  deleteItem: (event: React.MouseEvent) => void;
};

export const Table = ({ operationList, deleteItem }: IProps) => {
  return (
    <table className={table.table} data-testid={testIds.table}>
      <tbody>
        {operationList.map((item, index) => (
          <tr data-testid={testIds.row} key={index}>
            <td className={table.name} data-testid={testIds.name}>
              {item.name}
            </td>
            <td className={table.amount} data-testid={testIds.amount}>
              {item.amount}
            </td>
            <div> </div>
            <td className={table.removeItem}>
              <RemoveItem id={item.id} deleteItem={deleteItem} />
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
