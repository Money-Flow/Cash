import React, { useState } from "react";

import testIds from "./testIds";
import AddForm from "../AddForm/AddForm";
import Table from "../Table/Table";

import main from "./Main.module.css";
import { IExpense } from "../../types/componentTypes/MainTypes";

const Main = (): JSX.Element => {
  const [items, changeItems] = useState<IExpense[]>([]);

  const addItem = (newItem: IExpense) => {
    changeItems((oldArray) => [...oldArray, newItem]);
  };

  const removeItem = (id: string): void => {
    changeItems(() => items.filter((x) => x.id !== id));
  };

  return (
    <div data-testid={testIds.main} className={main.main}>
      <AddForm onSubmit={addItem} />
      {items.length > 0 && (
        <Table operationList={items} removeItem={removeItem} />
      )}
    </div>
  );
};

export default Main;
