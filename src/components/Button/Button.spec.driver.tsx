import React from "react";

import { render, fireEvent, RenderResult } from "@testing-library/react";

import Button from "./Button";
import testIds from "./testIds";
import {
  IButtonProps,
  IButtonTypes,
} from "../../types/componentTypes/ButtonTypes";

const exist = (page: RenderResult, selector: string) => {
  try {
    const element = page.getByTestId(selector) as HTMLElement;
    return !!element;
  } catch {
    return false;
  }
};

const createButtonDriver = () => {
  let props: IButtonProps;
  let wrapper: RenderResult;

  const btnClick = (selector: string) => {
    const { getByTestId } = wrapper;
    const element = getByTestId(selector);
    fireEvent.click(element);
  };

  const driver = {
    given: {
      props: (value: IButtonProps) => {
        props = value;
        return driver;
      },
      withConfirm: (withConfirm: boolean) => {
        props = {
          ...props,
          withConfirm,
        };
        return driver;
      },
      text: (text: string) => {
        props = {
          ...props,
          text,
        };
        return driver;
      },
      type: (type: IButtonTypes) => {
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
        const btn: any = wrapper.getByTestId(testIds.btn);
        return btn.type;
      },
      isBtnDisabled: () => {
        try {
          const button: any = wrapper.getByTestId(testIds.btn);
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
