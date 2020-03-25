import React, { useState } from "react";

import { testIds } from "./testIds";

import operation from "./AddForm.module.css";

export const AddForm = ({ handleSubmit }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const isSubmitDisabled = () => !name.trim().length;

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        handleSubmit({ name: name, amount: amount });
        setName("");
        setAmount(0);
      }}
      className={operation.section}
    >
      <input
        type="text"
        className={operation.input}
        name="name"
        data-testid={testIds.inputName}
        value={name}
        onChange={event => setName(event.target.value)}
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
        onChange={event => setAmount(Number(event.target.value))}
        required
      />

      <input
        type="submit"
        className={operation.button}
        data-testid={testIds.button}
        disabled={isSubmitDisabled()}
        value="Add"
      />
    </form>
  );
};
