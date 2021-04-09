import React from "react";
import { render, RenderResult } from "@testing-library/react";

import { CardHeader, CardHeaderProps } from "../../../../components";
import { CardHeaderDriverSpecType } from "../../../../types";
import { cardHeaderTestIds as testIds } from "../../../testIds";

export const cardHeaderDriver = (): CardHeaderDriverSpecType => {
  let props: CardHeaderProps;
  let wrapper: RenderResult;

  const driver: CardHeaderDriverSpecType = {
    given: {
      props: (value) => {
        props = value;
        return driver;
      },
      title: (title) => {
        props = { ...props, title };
        return driver;
      },
      titleClassName: (titleClassName) => {
        props = { ...props, titleClassName };
        return driver;
      },
      children: (children) => {
        props = {
          ...props,
          children,
        };
        return driver;
      },
    },
    when: {
      created: () => {
        // eslint-disable-next-line react/jsx-props-no-spreading
        wrapper = render(<CardHeader {...props} />);
        return driver;
      },
    },
    then: {
      title: () => wrapper.getByTestId(testIds.title).textContent,
      titleClassName: () => wrapper.getByTestId(testIds.title).className,
      children: () => wrapper.getByTestId(testIds.children).firstChild,
    },
  };
  return driver;
};
