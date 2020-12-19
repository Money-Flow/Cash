import React from "react";
import { useDispatch, useSelector } from "react-redux";

import AddForm from "../AddForm/AddForm";
import Table from "../Table/Table";
import testIds from "./testIds";
import main from "./Main.module.css";
import { addOperation, deleteOperation } from "../../store/actions";
import { selectOperationDataList } from "../../store/selectors";

const Main = (): JSX.Element => {
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

export default Main;
