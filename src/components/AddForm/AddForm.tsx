import React, { SyntheticEvent, useState } from "react";

import { IExpense } from "../Main/Main";
import { Button, ButtonType } from "../Button/Button";

import { v4 as createId } from "uuid";
import { testIds } from "./testIds";

import operation from "./AddForm.module.css";

export type IProps = {
  onSubmit: (arg: IExpense) => void;
  name?: string;
  amount?: number;
};

export const AddForm = ({ onSubmit, name = "", amount = 0 }: IProps) => {
  const [nameState, setNameState] = useState(name);
  const [amountState, setAmountState] = useState(amount);

  const isSubmitDisabled = () => !nameState.trim().length;

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSubmit({ nameState, amountState, id: createId() });
    setNameState("");
    setAmountState(0);
  };

  return (
    <form onSubmit={handleSubmit} className={operation.form}>
      <input
        type="text"
        className={operation.input}
        name="name"
        data-testid={testIds.inputName}
        value={nameState}
        onChange={(event) => setNameState(event.target.value)}
        placeholder="Name"
        required
      />

      <input
        type="number"
        className={operation.input}
        name="amount"
        data-testid={testIds.inputAmount}
        value={amountState}
        placeholder="Amount"
        onChange={(event) => setAmountState(Number(event.target.value))}
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
