import React, { SyntheticEvent, useState } from "react";

import { IExpense } from "../Main/Main";
import { Button, ButtonType } from "../Button/Button";

import { v4 as createId } from "uuid";
import { testIds } from "./testIds";

import operation from "./AddForm.module.css";

export type IProps = {
  onSubmit: (arg: IExpense) => void;
  nameOfExpenses?: string;
  amountOfExpenses?: number;
};

export const AddForm = ({
  onSubmit,
  nameOfExpenses = "",
  amountOfExpenses = 0,
}: IProps) => {
  const [name, setName] = useState(nameOfExpenses);
  const [amount, setAmount] = useState(amountOfExpenses);

  const isSubmitDisabled = () => !name.trim().length;

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSubmit({ name, amount, id: createId() });
    setName("");
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit} className={operation.form}>
      <input
        type="text"
        className={operation.input}
        name="name"
        data-testid={testIds.inputName}
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
        required
      />

      <input
        type="number"
        className={operation.input}
        name="amount"
        data-testid={testIds.inputAmount}
        value={amount}
        placeholder="Amount"
        onChange={(event) => setAmount(Number(event.target.value))}
        required
      />

      <Button
        type={ButtonType.submit}
        text="Add"
        disabled={isSubmitDisabled()}
      />
    </form>
  );
};
