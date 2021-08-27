import React from "react";

import { render, RenderResult } from "@testing-library/react";

import { Total } from "./Total";
import { totalTestIds as testIds } from "./TotalTestIds";
import { TotalPropsType } from "./TotalTypes";
import { TotalDriverSpecTypes } from "./TotalDriverTypes";

export const totalUnitDriver = (): TotalDriverSpecTypes => {
  let props: TotalPropsType;
  let wrapper: RenderResult;

  const driver: TotalDriverSpecTypes = {
    given: {
      props: (value) => {
        props = value;
        return driver;
      },
      amountList: (amountList) => {
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
