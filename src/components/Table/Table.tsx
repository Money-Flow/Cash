import React from "react";

import Total from "../Total/Total";
import testIds from "./testIds";
import Button from "../Button/Button";

import table from "./Table.module.css";

import { ITableProps } from "../../types/componentTypes/TableTypes";
import { ButtonEnumType } from "../../types/componentTypes/ButtonTypes";

const Table = ({ operationList, removeItem }: ITableProps): JSX.Element => {
  return (
    <table className={table.table} data-testid={testIds.table}>
      <tbody>
        {operationList.map(({ nameState, amountState, id }, index) => (
          <tr data-testid={`${testIds.row}-${index}`} key={id}>
            <td className={table.name} data-testid={testIds.name}>
              {nameState}
            </td>
            <td className={table.amount} data-testid={testIds.amount}>
              {amountState}
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
            <Total amountList={operationList.map((x) => x.amountState)} />
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
