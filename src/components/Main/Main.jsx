import React, { useState } from "react";

import { testIds } from "./testIds.js";
import { AddForm } from "../AddForm/AddForm.jsx";
import { Table } from "../Table/Table.tsx";

import main from "./Main.module.css";

export const Main = () => {
  const [items, changeItems] = useState([]);

  const addItems = (newItem) => {
    changeItems((oldArray) => [...oldArray, newItem]);
  };

  const removeItems = (id) => {
    console.log(id);
    changeItems(() => items.filter((x) => x.id !== id));
  };

  return (
    <div data-testid={testIds.main} className={main.main}>
      <AddForm onSubmit={addItems} />
      {items.length > 0 && (
        <Table operationList={items} deleteItem={removeItems} />
      )}
    </div>
  );
};
