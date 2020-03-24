import React, { useState } from "react";

import { testIds } from "./testIds";
import { AddForm } from "../AddForm/AddForm";
import { Table } from "../Table/Table";

import main from "./Main.module.css";

export const Main = () => {
  const [items, changeItems] = useState([]);

  return (
    <div data-testid={testIds.main} className={main.main}>
      <AddForm onSubmit={changeItems} />
      {items.length > 0 && <Table operationList={items} />}
    </div>
  );
};
