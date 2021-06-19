import React from "react";
import { render, RenderResult } from "@testing-library/react";

import { Card, CardProps } from "components";
import { CardDriverSpecType } from "types";
import { cardTestIds as testIds } from "tests/testIds";

export const cardDriver = (): CardDriverSpecType => {
  let props: CardProps;
  let wrapper: RenderResult;

  const driver: CardDriverSpecType = {
    given: {
      props: (value) => {
        props = value;
        return driver;
      },
      children: (children) => {
        props = {
          ...props,
          children,
        };
        return driver;
      },
      className: (className) => {
        props = { ...props, className };
        return driver;
      },
    },
    when: {
      created: () => {
        // eslint-disable-next-line react/jsx-props-no-spreading
        wrapper = render(<Card {...props} />);
        return driver;
      },
    },
    then: {
      children: () => wrapper.getByTestId(testIds.children).firstChild,
      className: () => wrapper.getByTestId(testIds.card).className,
    },
  };
  return driver;
};
