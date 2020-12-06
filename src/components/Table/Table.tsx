import React from "react";

import Total from "../Total/Total";
import testIds from "./testIds";
import Button from "../Button/Button";
import { ButtonEnumType, IOperationListType } from "../../types";

import table from "./Table.module.css";

type TableProps = {
  operationList: IOperationListType;
  removeItem: (T: string) => void;
};

const Table = ({ operationList, removeItem }: TableProps): JSX.Element => {
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

export default Table;
