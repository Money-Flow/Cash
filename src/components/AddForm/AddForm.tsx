import React, { SyntheticEvent, useState } from "react";

import { v4 as createId } from "uuid";

import { Button } from "../Button/Button";
import { ButtonEnumType, IAddFormPropsType } from "../../types";
import { addFormTestIds as testIds } from "../../tests/testIds";
import styles from "./AddForm.module.css";

export const AddForm: React.FC<IAddFormPropsType> = ({
  onSubmit,
  name = "",
  amount = 0,
}) => {
  const [nameState, setNameState] = useState(name);
  const [amountState, setAmountState] = useState(amount);

  const isSubmitDisabled = () => !nameState.trim().length;

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSubmit({ notes: nameState, amount: amountState, id: createId() });
    setNameState("");
    setAmountState(0);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        className={styles.input}
        name="name"
        data-testid={testIds.inputName}
        value={nameState}
        onChange={(event) => setNameState(event.target.value)}
        placeholder="Name"
        required
      />

      <input
        type="number"
        className={styles.input}
        name="amount"
        data-testid={testIds.inputAmount}
        value={amountState}
        placeholder="Amount"
        onChange={(event) => setAmountState(Number(event.target.value))}
        required
      />

      <Button
        type={ButtonEnumType.submit}
        text="Add"
        onClick={handleSubmit}
        disabled={isSubmitDisabled()}
      />
    </form>
  );
};
