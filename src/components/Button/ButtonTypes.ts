import { SyntheticEvent } from "react";

export enum ButtonEnumType {
  submit = "submit",
  reset = "reset",
  button = "button",
}

export type ButtonTypes =
  | ButtonEnumType.submit
  | ButtonEnumType.reset
  | ButtonEnumType.button;

type CommonButtonPropsType = {
  text: string;
  withConfirm?: boolean;
  disabled?: boolean;
};

export type SubmitButton = CommonButtonPropsType & {
  type: ButtonEnumType.submit;
  onClick: (event: SyntheticEvent) => void;
  text: string;
};

type ButtonType = CommonButtonPropsType & {
  type: ButtonEnumType.reset | ButtonEnumType.button;
  onClick: (event: SyntheticEvent) => void;
  text: string;
};

export type ButtonPropsType = ButtonType | SubmitButton;
