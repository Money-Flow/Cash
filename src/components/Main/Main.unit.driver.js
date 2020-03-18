import React from "react";
import { render } from "@testing-library/react";

import { Main } from "./Main";
import { testIds } from "../Main/testIds";

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
        _wrapper = render(<Main {..._props} />);
        return driver;
      }
    },
    then: {
      getMain: () => {
        try {
          const cart = _wrapper.getByTestId(testIds.main);
          return cart !== undefined;
        } catch {
          return false;
        }
      }
    }
  };
  return driver;
};
