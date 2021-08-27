import React, { SyntheticEvent, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

import { buttonTestIds as testIds } from "./ButtonTestIds";
import { ButtonEnumType, ButtonPropsType } from "./ButtonTypes";

import styles from "./Button.module.css";

const isSubmit = (props: ButtonPropsType): boolean =>
  props.type === ButtonEnumType.submit;

export const Button: React.FC<ButtonPropsType> = (props) => {
  const {
    withConfirm = false,
    text,
    type = ButtonEnumType.button,
    disabled = false,
  } = props;

  const [isShowConfirm, setIsShowConfirm] = useState<boolean>(false);

  let onClick: (event: SyntheticEvent) => void;

  if (!isSubmit(props)) {
    onClick = props.onClick;
  }

  const btnClass: string = classNames({
    button: type === ButtonEnumType.button,
    submit: type === ButtonEnumType.submit,
    reset: type === ButtonEnumType.reset,
  });

  const handleClick = (event: SyntheticEvent): void => {
    if (!(type === ButtonEnumType.submit) && onClick) {
      if (withConfirm) {
        setIsShowConfirm(true);
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
      {isShowConfirm && (
        <div
          className={styles.confirmationWrapper}
          data-testid={testIds.confirmationWrapper}
        >
          <button
            className={styles.confirmButtons}
            data-testid={testIds.btnConfirm}
            onClick={(event: SyntheticEvent) => {
              onClick(event);
              setIsShowConfirm(false);
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
            onClick={() => setIsShowConfirm(false)}
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
