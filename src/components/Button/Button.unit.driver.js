import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { Button } from "./Button.jsx";
import { testIds } from "./testIds.js";

const exist = (page, selector) => {
  try {
    const element = page.getByTestId(selector);
    return !!element;
  } catch {
    return false;
  }
};

export const createButtonDriver = () => {
  let _props, _wrapper;

  const btnClick = (selector) => {
    const { getByTestId } = _wrapper;
    const element = getByTestId(selector);
    fireEvent.click(element);
  };

  const driver = {
    given: {
      props: (props) => {
        _props = props;
        return driver;
      },
      withConfirm: (withConfirm) => {
        _props = {
          ..._props,
          withConfirm,
        };
        return driver;
      },
      text: (text) => {
        _props = {
          ..._props,
          text,
        };
        return driver;
      },
      click: (onClick) => {
        _props = {
          ..._props,
          onClick,
        };
        return driver;
      },
    },
    when: {
      created: () => {
        _wrapper = render(<Button {..._props} />);
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
      exist: () => exist(_wrapper, testIds.confirmationWrapper),
    },
  };
  return driver;
};
