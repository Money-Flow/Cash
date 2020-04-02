import React from "react";

import { testIds } from "./testIds.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./DialogButtons.module.css";

export const DialogButtons = ({ show, id, deleteItem }) => {
  return (
    <div className={styles.wrapper} data-testid={testIds.wrapper}>
      <button
        className={styles.confirm}
        data-testid={testIds.confirm}
        onClick={() => deleteItem(id)}
      >
        &nbsp;
        <FontAwesomeIcon color="green" icon={faCheck} />
      </button>
      <button
        className={styles.cancel}
        data-testid={testIds.cancel}
        onClick={() => show(false)}
      >
        &nbsp;
        <FontAwesomeIcon color="red" icon={faTimes} />
      </button>
    </div>
  );
};
