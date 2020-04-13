import React, { useState } from "react";

import { testIds } from "./testIds.js";
import { AddForm } from "../AddForm/AddForm.jsx";
import { Table } from "../Table/Table.tsx";

import main from "./Main.module.css";

export const Main = () => {
  const [items, changeItems] = useState([]);

  const addItem = (newItem) => {
    changeItems((oldArray) => [...oldArray, newItem]);
  };

  const removeItem = (id) => {
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
