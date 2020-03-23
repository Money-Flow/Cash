import React, { useState } from "react";

import { testIds } from "./testIds";
import { NewOperation } from "../NewOperation/NewOperation";
import { Table } from "../Table/Table";

import main from "./Main.module.css";

export const Main = () => {
  const [name, setName] = useState("");
  const [journal, setJournal] = useState([]);
  const [amount, setAmount] = useState("");
  return (
    <div data-testid={testIds.main} className={main.main}>
      <NewOperation
        name={name}
        setName={setName}
        amount={amount}
        setAmount={setAmount}
        setJournal={setJournal}
      />
      {journal.length > 0 && <Table journal={journal} />}
    </div>
  );
};
