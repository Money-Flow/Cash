import React, { useState } from "react";

import { testIds } from "./testIds";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

import styles from "./Button.module.css";

export enum ButtonType {
  submit = "submit",
  reset = "reset",
  button = "button",
}

type ICommonButtonProps = {
  text: string;
  withConfirm?: boolean;
  disabled?: boolean;
};

type ISubmitButton = ICommonButtonProps & {
  type: ButtonType.submit;
};

type IButton = ICommonButtonProps & {
  onClick: () => void;
  type: ButtonType.reset | ButtonType.button;
};

export type IProps = IButton | ISubmitButton;

function isSubmit(props: IProps): props is ISubmitButton {
  return props.type === ButtonType.submit;
}

export const Button = (props: IProps) => {
  const [showConfirm, setShowConfirm] = useState(false);
  let onClick: Function;

  const {
    withConfirm = false,
    text,
    type = ButtonType.button,
    disabled = false,
  } = props;

  if (!isSubmit(props)) {
    onClick = props.onClick;
  }

  const btnClass = classNames({
    button: type === "button",
    submit: type === "submit",
    reset: type === "reset",
  });

  return (
    <div className={styles.wrapper} data-testid={testIds.wrapper}>
      <button
        className={styles[btnClass]}
        data-testid={testIds.btn}
        onClick={() => (withConfirm ? setShowConfirm(true) : onClick())}
        type={type}
        disabled={disabled}
      >
        {text}
      </button>
      {showConfirm && (
        <div
          className={styles.confirmationWrapper}
          data-testid={testIds.confirmationWrapper}
        >
          <button
            className={styles.confirmButtons}
            data-testid={testIds.btnConfirm}
            onClick={() => {
              onClick();
              setShowConfirm(false);
            }}
            value="confirm"
          >
            <FontAwesomeIcon
              color="green"
              data-testid={testIds.iconConfirm}
              icon={faCheck}
            />
          </button>
          <button
            className={styles.confirmButtons}
            data-testid={testIds.btnCancel}
            value="cancel"
            onClick={() => setShowConfirm(false)}
          >
            <FontAwesomeIcon
              color="red"
              data-testid={testIds.iconCancel}
              icon={faTimes}
            />
          </button>
        </div>
      )}
    </div>
  );
};
