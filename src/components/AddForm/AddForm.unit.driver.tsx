import React from "react";

import { render, RenderResult } from "@testing-library/react";

import { AddForm } from "./AddForm";
import { IAddFormPropsType } from "./AddFormTypes";
import { buttonTestIds } from "../Button";
import { elementClick } from "../../utils/testUtils/unit";
import { AddFormDriverSpecTypes } from "./AddFormDriverTypes";

export const addFormUnitDriver = (): AddFormDriverSpecTypes => {
  let props: IAddFormPropsType;
  let wrapper: RenderResult;

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
        elementClick(buttonTestIds.btn, wrapper);
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
