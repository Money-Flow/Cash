import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { AddForm } from "../AddForm";
import { Table } from "../Table";
import { mainTestIds as testIds } from "../../tests/testIds";
import { addOperation, deleteOperation } from "../../store/actions";
import { selectOperationDataList } from "../../store/selectors";
import main from "./Main.module.css";

export const Main: React.FC = () => {
  const dispatch = useDispatch();
  const operationDataList = useSelector(selectOperationDataList);

  return (
    <div data-testid={testIds.main} className={main.main}>
      <AddForm onSubmit={(data) => dispatch(addOperation(data))} />
      {operationDataList.length > 0 && (
        <Table
          operationList={operationDataList}
          removeItem={(id) => dispatch(deleteOperation(id))}
        />
      )}
    </div>
  );
};
