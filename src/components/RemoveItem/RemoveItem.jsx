import React, { useState } from "react";

import { testIds } from "./testIds.js";
import { DialogButtons } from "./../DialogButtons/DialogButtons.jsx";

import styles from "./RemoveItem.module.css";

export const RemoveItem = ({ id, deleteItem }) => {
  const [isShowDialogButtons, setIsShowDialogButtons] = useState(null);
  return (
    <div className={styles.wrapper} data-testid={testIds.wrapper}>
      <button
        className={styles.button}
        onClick={() => setIsShowDialogButtons(true)}
        data-testid={testIds.button}
      >
        Delete
      </button>
      {isShowDialogButtons && (
        <DialogButtons
          id={id}
          deleteItem={deleteItem}
          show={setIsShowDialogButtons}
        />
      )}
    </div>
  );
};
