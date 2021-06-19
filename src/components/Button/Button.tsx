import React, { SyntheticEvent, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

import { buttonTestIds as testIds } from "tests/testIds";
import { ButtonEnumType, IButtonProps } from "types";

import styles from "components/Button/Button.module.css";

function isSubmit(props: IButtonProps): boolean {
  return props.type === ButtonEnumType.submit;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const {
    withConfirm = false,
    text,
    type = ButtonEnumType.button,
    disabled = false,
  } = props;

  const [showConfirm, setShowConfirm] = useState(false);

  let onClick: (event: SyntheticEvent) => void;

  if (!isSubmit(props)) {
    onClick = props.onClick;
  }

  const btnClass = classNames({
    button: type === ButtonEnumType.button,
    submit: type === ButtonEnumType.submit,
    reset: type === ButtonEnumType.reset,
  });

  const handleClick = (event: SyntheticEvent) => {
    if (!(type === ButtonEnumType.submit) && onClick) {
      if (withConfirm) {
        setShowConfirm(true);
      } else {
        onClick(event);
      }
    }
  };

  return (
    <div className={styles.wrapper} data-testid={testIds.wrapper}>
      <button
        className={styles[btnClass]}
        data-testid={testIds.btn}
        onClick={handleClick}
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
            onClick={(event: SyntheticEvent) => {
              onClick(event);
              setShowConfirm(false);
            }}
            type={ButtonEnumType.submit}
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
            type={ButtonEnumType.button}
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

Button.defaultProps = {
  text: "",
  onClick: () => {},
  withConfirm: false,
  disabled: false,
  type: ButtonEnumType.button,
};
