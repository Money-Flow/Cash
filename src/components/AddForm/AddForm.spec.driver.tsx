import React from "react";
import { fireEvent, render, RenderResult } from "@testing-library/react";

import AddForm from "./AddForm";
import buttonTestIds from "../Button/testIds";
import { IAddFormPropsType, AddFormDriverSpecTypes } from "../../types";

const createAddFormDriver = (): AddFormDriverSpecTypes => {
  let props: IAddFormPropsType;
  let wrapper: RenderResult;

  const btnClick = (selector: string): void => {
    const { getByTestId } = wrapper;
    const element = getByTestId(selector);
    Object.assign(element, { preventDefault: jest.fn() });
    fireEvent.click(element);
  };

  const driver: AddFormDriverSpecTypes = {
    given: {
      props: (value) => {
        props = value;
        return driver;
      },
      onSubmit: (onSubmit) => {
        props = {
          ...props,
          onSubmit,
        };
        return driver;
      },
      name: (name) => {
        props = {
          ...props,
          name,
        };
        return driver;
      },
      amount: (amount) => {
        props = {
          ...props,
          amount,
        };
        return driver;
      },
    },
    when: {
      created: () => {
        // eslint-disable-next-line react/jsx-props-no-spreading
        wrapper = render(<AddForm {...props} />);
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
          const button = wrapper.getByTestId(
            buttonTestIds.btn
          ) as HTMLButtonElement;
          return button.disabled;
        } catch {
          return null;
        }
      },
    },
  };
  return driver;
};

export default createAddFormDriver;
