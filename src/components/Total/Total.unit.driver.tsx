import { render, RenderResult } from "@testing-library/react";
import React from "react";

import Total from "./Total";
import testIds from "./testIds";
import { ITotalProps } from "../../types/componentTypes/TotalTypes";

const createTotalDriver = () => {
  let props: ITotalProps;
  let wrapper: RenderResult;

  const driver = {
    given: {
      props: (value: ITotalProps) => {
        props = value;
        return driver;
      },
      amountList: (amountList: []) => {
        props = {
          ...props,
          amountList,
        };
        return driver;
      },
    },
    when: {
      created: () => {
        // eslint-disable-next-line react/jsx-props-no-spreading
        wrapper = render(<Total {...props} />);
        return driver;
      },
    },
    then: {
      getTotal: () => {
        try {
          const total = wrapper.getByTestId(testIds.total);
          return Number(total.textContent);
        } catch {
          return null;
        }
      },
    },
  };
  return driver;
};

export default createTotalDriver;
