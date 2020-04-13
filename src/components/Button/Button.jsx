import React, { useState } from "react";

import { testIds } from "../Button/testIds.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./Button.module.css";

export const Button = ({ onClick, withConfirm = false, text }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className={styles.wrapper} data-testid={testIds.wrapper}>
      <button
        data-testid={testIds.btn}
        onClick={() => (withConfirm ? setShowConfirm(true) : onClick())}
      >
        {text}
      </button>
      {!!showConfirm && (
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
