import React from "react";

import { render, RenderResult } from "@testing-library/react";

import { Button } from "../../../components";
import { buttonTestIds as testIds } from "../../testIds";
import { IButtonProps, ButtonDriverSpecTypes } from "../../../types";
import { existElement, elementClick } from "../../../utils/testUtils/unit";

export const buttonDriver = (): ButtonDriverSpecTypes => {
  let props: IButtonProps;
  let wrapper: RenderResult;

  const driver: ButtonDriverSpecTypes = {
    given: {
      props: (value) => {
        props = value;
        return driver;
      },
      withConfirm: (withConfirm) => {
        props = {
          ...props,
          withConfirm,
        };
        return driver;
      },
      text: (text) => {
        props = {
          ...props,
          text,
        };
        return driver;
      },
      type: (type) => {
        props = {
          ...props,
          type,
        };
        return driver;
      },
      click: (onClick: () => void) => {
        props = {
          ...props,
          onClick,
        };
        return driver;
      },
    },
    when: {
      created: () => {
        // eslint-disable-next-line react/jsx-props-no-spreading
        wrapper = render(<Button {...props} />);
        return driver;
      },
      btnClick: () => {
        elementClick(testIds.btn, wrapper);
        return driver;
      },
      confirmBtnClick: () => {
        elementClick(testIds.btnConfirm, wrapper);
        return driver;
      },
      cancelBtnClick: () => {
        elementClick(testIds.btnCancel, wrapper);
        return driver;
      },
    },
    then: {
      confirmationWrapperExist: () =>
        existElement(wrapper, testIds.confirmationWrapper),
      btnType: () => {
        const btn = wrapper.getByTestId(testIds.btn) as HTMLButtonElement;
        return btn.type;
      },
      isBtnDisabled: () => {
        try {
          const button = wrapper.getByTestId(testIds.btn) as HTMLButtonElement;
          return button.disabled;
        } catch {
          return null;
        }
      },
    },
  };
  return driver;
};
