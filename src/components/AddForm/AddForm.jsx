import React, { useState } from "react";

import { testIds } from "./testIds";

import operation from "./AddForm.module.css";

export const AddForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleButtonChange = event => {
    event.preventDefault();
    onSubmit(oldArray => [...oldArray, { name: name, amount: amount }]);
    setName("");
    setAmount("");
  };

  const isSubmitDisabled = () => !name.trim().length || !amount.trim().length;

  return (
    <form
      onSubmit={event => handleButtonChange(event)}
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
        onChange={event => setAmount(event.target.value)}
        required
      />

      <input
        type="submit"
        className={operation.button}
        data-testid={testIds.button}
        disabled={isSubmitDisabled()}
        value="Add"
        onSubmit={event => {
          handleButtonChange(event);
        }}
      />
    </form>
  );
};
