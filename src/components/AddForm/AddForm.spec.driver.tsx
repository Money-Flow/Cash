import React from "react";
import { fireEvent, render, RenderResult } from "@testing-library/react";

import AddForm from "./AddForm";
import buttonTestIds from "../Button/testIds";
import { IAddFormProps } from "../../types/componentTypes/AddFormTypes";

const createAddFormDriver = () => {
  let props: IAddFormProps;
  let wrapper: RenderResult;

  const btnClick = (selector: string) => {
    const { getByTestId } = wrapper;
    const element = getByTestId(selector);
    Object.assign(element, { preventDefault: jest.fn() });
    fireEvent.click(element);
  };

  const driver = {
    given: {
      props: (value: IAddFormProps) => {
        props = value;
        return driver;
      },
      onSubmit: (onSubmit: () => void) => {
        props = {
          ...props,
          onSubmit,
        };
        return driver;
      },
      name: (name: string) => {
        props = {
          ...props,
          name,
        };
        return driver;
      },
      amount: (amount: number) => {
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
          const button: any = wrapper.getByTestId(buttonTestIds.btn);
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
