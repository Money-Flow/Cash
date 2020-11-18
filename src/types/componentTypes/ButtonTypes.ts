import { SyntheticEvent } from "react";

export enum ButtonEnumType {
  submit = "submit",
  reset = "reset",
  button = "button",
}

export type IButtonTypes =
  | ButtonEnumType.submit
  | ButtonEnumType.reset
  | ButtonEnumType.button;

type ICommonButtonProps = {
  text: string;
  withConfirm?: boolean;
  disabled?: boolean;
};

export type ISubmitButton = ICommonButtonProps & {
  type: ButtonEnumType.submit;
  onClick: (event: SyntheticEvent) => void;
  text: string;
};

type IButton = ICommonButtonProps & {
  type: ButtonEnumType.reset | ButtonEnumType.button;
  onClick: (event: SyntheticEvent) => void;
  text: string;
};

export type IButtonProps = IButton | ISubmitButton;
