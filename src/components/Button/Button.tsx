import React, { useState } from "react";

import { testIds } from "./testIds";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./Button.module.css";

export type IProps = {
  onClick: () => void;
  text: string;
  withConfirm?: boolean;
  customClass?: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
};

export const Button = ({
  onClick,
  withConfirm = false,
  text,
  customClass = "",
  type = "button",
  disabled = false,
}: IProps) => {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className={styles.wrapper} data-testid={testIds.wrapper}>
      <button
        className={customClass}
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
