import React, { useState } from "react";

import { testIds } from "../Button/testIds.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./Button.module.css";

export const Button = ({ onClick, withConfirm = false, text }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    if (event.currentTarget.value === "confirm") {
      onClick();
    } else {
      setShowConfirm(false);
    }
  };

  return (
    <div className={styles.wrapper} data-testid={testIds.wrapper}>
      <button
        data-testid={testIds.btnDelete}
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
            onClick={handleClick}
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
            onClick={handleClick}
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
