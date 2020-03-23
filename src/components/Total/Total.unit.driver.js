import React from "react";
import { render } from "@testing-library/react";

import { Total } from "./Total";
import { testIds } from "./testIds";

export const createTotalDriver = () => {
  let _props, _wrapper;
  const driver = {
    given: {
      props: props => {
        _props = props;
        return driver;
      },
      operationList: operationList => {
        _props = {
          ..._props,
          operationList
        };
        return driver;
      }
    },
    when: {
      created: () => {
        _wrapper = render(<Total {..._props} />);
        return driver;
      }
    },
    then: {
      getTotal: () => {
        try {
          let total = _wrapper.getByTestId(testIds.total);
          return Number(total.textContent);
        } catch {
          return null;
        }
      }
    }
  };
  return driver;
};
