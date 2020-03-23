import React, { useEffect, useState } from "react";

import { testIds } from "./testIds";

import operation from "./NewOperation.module.css";

export const NewOperation = ({
  name,
  setName,
  amount,
  setAmount,
  setJournal
}) => {
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);

  const handleInputChange = event => {
    switch (event.target.name) {
      case "name":
        setName(formattingName(event.target.value));
        break;
      case "amount":
        setAmount(formattingAmount(event.target.value));
        break;
    }
    checksFields();
  };

  const handleButtonChange = () => {
    setJournal(oldArray => [...oldArray, { name: name, amount: amount }]);
    setName("");
    setAmount("");
  };

  const sendValue = event => {
    if (event.key === "Enter" && (name.length && amount.length) > 0) {
      handleButtonChange();
    }
  };

  useEffect(() => {
    checksFields();
  });

  const checksFields = () => {
    if ((name.length && amount.length) > 0) {
      setIsDisabledBtn(false);
    } else {
      setIsDisabledBtn(true);
    }
  };

  const formattingAmount = str => str.replace(/\D/g, "");
  const formattingName = str => str.replace(/\d/g, "");

  return (
    <section className={operation.section}>
      <input
        className={operation.input}
        name="name"
        data-testid={testIds.inputName}
        value={name}
        onKeyPress={event => sendValue(event)}
        onChange={event => handleInputChange(event)}
        placeholder="Name"
      />
      <input
        className={operation.input}
        name="amount"
        data-testid={testIds.inputAmount}
        placeholder="Amount"
        onKeyPress={event => sendValue(event)}
        value={amount}
        onChange={event => handleInputChange(event)}
      />

      <button
        className={operation.button}
        data-testid={testIds.button}
        disabled={isDisabledBtn}
        onClick={() => handleButtonChange()}
      >
        Add
      </button>
    </section>
  );
};
