import React from "react";
import { render } from "@testing-library/react";

import { NewOperation } from "./New-operation";

export const getDriver = () => {
  let _props, _wrapper;

  const driver = {
    given: {
      props: props => {
        _props = props;
        return driver;
      }
    },
    when: {
      created: () => {
        _wrapper = render(<NewOperation {..._props} />);
        return driver;
      }
    },
    then: {
      getElement: testID => {
        try {
          const cart = _wrapper.getByTestId(testID);
          return cart !== undefined;
        } catch {
          return false;
        }
      },
      getValue: testID => {
        return _wrapper.getByTestId(testID).value || null;
      }
    }
  };
  return driver;
};
