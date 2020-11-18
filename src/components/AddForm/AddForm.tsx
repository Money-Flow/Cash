import React, { SyntheticEvent, useState } from "react";

import { v4 as createId } from "uuid";
import Button from "../Button/Button";

import testIds from "./testIds";

import operation from "./AddForm.module.css";
import { ButtonEnumType } from "../../types/componentTypes/ButtonTypes";
import { IAddFormProps } from "../../types/componentTypes/AddFormTypes";

const AddForm = ({
  onSubmit,
  name = "",
  amount = 0,
}: IAddFormProps): JSX.Element => {
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
        type={ButtonEnumType.submit}
        text="Add"
        onClick={handleSubmit}
        disabled={isSubmitDisabled()}
      />
    </form>
  );
};

export default AddForm;
