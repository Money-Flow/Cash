import React, { SyntheticEvent, useState } from "react";

import { v4 as createId } from "uuid";

import { Button, ButtonEnumType } from "../Button";
import { AddFormPropsType } from "./AddFormTypes";
import { addFormTestIds as testIds } from "./AddFormTestIds";

import styles from "./AddForm.module.css";

export const AddForm: React.FC<AddFormPropsType> = ({
  onSubmit,
  name = "",
  amount = 0,
}) => {
  const [nameState, setNameState] = useState<string>(name);
  const [amountState, setAmountState] = useState<number>(amount);

  const isSubmitDisabled = (): boolean => !nameState.trim().length;

  const handleSubmit = (event: SyntheticEvent): void => {
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
