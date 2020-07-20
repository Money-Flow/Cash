import { render, RenderResult } from "@testing-library/react";
import React from "react";

import { Total, IProps } from "./Total";
import { testIds } from "./testIds";

export const createTotalDriver = () => {
  let _props: IProps, _wrapper: RenderResult;
  const driver = {
    given: {
      props: (props: IProps) => {
        _props = props;
        return driver;
      },
      amountList: (amountList: []) => {
        _props = {
          ..._props,
          amountList,
        };
        return driver;
      },
    },
    when: {
      created: () => {
        _wrapper = render(<Total {..._props} />);
        return driver;
      },
    },
    then: {
      getTotal: () => {
        try {
          let total = _wrapper.getByTestId(testIds.total);
          return Number(total.textContent);
        } catch {
          return null;
        }
      },
    },
  };
  return driver;
};
