import React from "react";
import { fireEvent, render, RenderResult } from "@testing-library/react";

import { AddForm, IProps } from "./AddForm";
import { testIds as buttonTestIds } from "./../Button/testIds";

export const createAddFormDriver = () => {
  let _props: IProps, _wrapper: RenderResult;

  const btnClick = (selector: string) => {
    const { getByTestId } = _wrapper;
    const element = getByTestId(selector);
    Object.assign(element, { preventDefault: jest.fn() });
    fireEvent.click(element);
  };

  const driver = {
    given: {
      props: (props: IProps) => {
        _props = props;
        return driver;
      },
      onSubmit: (onSubmit: () => void) => {
        _props = {
          ..._props,
          onSubmit,
        };
        return driver;
      },
      name: (nameOfExpenses: string) => {
        _props = {
          ..._props,
          nameOfExpenses,
        };
        return driver;
      },
      amount: (amountOfExpenses: number) => {
        _props = {
          ..._props,
          amountOfExpenses,
        };
        return driver;
      },
    },
    when: {
      created: () => {
        _wrapper = render(<AddForm {..._props} />);
        return driver;
      },
      btnClick: () => {
        btnClick(buttonTestIds.btn);
        return driver;
      },
    },
    then: {
      isBtnDisabled: () => {
        try {
          const button: any = _wrapper.getByTestId(buttonTestIds.btn);
          return button.disabled;
        } catch {
          return null;
        }
      },
    },
  };
  return driver;
};
