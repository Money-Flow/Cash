import React from "react";

import { render, fireEvent, RenderResult } from "@testing-library/react";

import Button from "./Button";
import testIds from "./testIds";
import { IButtonProps, ButtonDriverSpecTypes } from "../../types";

const exist = (page: RenderResult, selector: string) => {
  try {
    const element = page.getByTestId(selector) as HTMLElement;
    return !!element;
  } catch {
    return false;
  }
};

const createButtonDriver = (): ButtonDriverSpecTypes => {
  let props: IButtonProps;
  let wrapper: RenderResult;

  const btnClick = (selector: string) => {
    const { getByTestId } = wrapper;
    const element = getByTestId(selector);
    fireEvent.click(element);
  };

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
        btnClick(testIds.btn);
        return driver;
      },
      confirmBtnClick: () => {
        btnClick(testIds.btnConfirm);
        return driver;
      },
      cancelBtnClick: () => {
        btnClick(testIds.btnCancel);
        return driver;
      },
    },
    then: {
      confirmationWrapperExist: () =>
        exist(wrapper, testIds.confirmationWrapper),
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

export default createButtonDriver;
