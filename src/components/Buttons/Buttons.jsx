import React, { useState } from "react";

import { testIds } from "./testIds.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./Buttons.module.css";

export const Buttons = ({ onClick, show = false }) => {
  const [isShow, setIsShow] = useState(show);

  const handleClick = (event) => {
    event.preventDefault();
    if (event.currentTarget.value === "confirm") {
      onClick();
    } else {
      setIsShow(() => false);
    }
  };

  return (
    <div className={styles.wrapper} data-testid={testIds.wrapper}>
      <button data-testid={testIds.btnDelete} onClick={() => setIsShow(true)}>
        Delete
      </button>
      {isShow && (
        <div
          className={styles.confirmationWrapper}
          data-testid={testIds.confirmationWrapper}
        >
          <button
            className={styles.btnConfirm}
            data-testid={testIds.btnConfirm}
            onClick={(event) => handleClick(event)}
            value="confirm"
          >
            &nbsp;
            <FontAwesomeIcon
              color="green"
              data-testid={testIds.iconConfirm}
              icon={faCheck}
            />
          </button>
          <button
            className={styles.btnCancel}
            data-testid={testIds.btnCancel}
            value="cancel"
            onClick={(event) => handleClick(event)}
          >
            &nbsp;
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
