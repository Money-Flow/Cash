import React from "react";
import { render, RenderResult } from "@testing-library/react";

import { CardSubheader, CardSubheaderProps } from "components";
import { CardSubheaderDriverSpecType } from "types";
import { cardSubheaderTestIds as testIds } from "tests/testIds";

export const cardSubheaderDriver = (): CardSubheaderDriverSpecType => {
  let props: CardSubheaderProps;
  let wrapper: RenderResult;

  const driver: CardSubheaderDriverSpecType = {
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
      suffix: (suffix) => {
        props = {
          ...props,
          suffix,
        };
        return driver;
      },
      suffixClassName: (suffixClassName) => {
        props = { ...props, suffixClassName };
        return driver;
      },
    },
    when: {
      created: () => {
        // eslint-disable-next-line react/jsx-props-no-spreading
        wrapper = render(<CardSubheader {...props} />);
        return driver;
      },
    },
    then: {
      title: () => wrapper.getByTestId(testIds.title).textContent,
      suffix: () => wrapper.getByTestId(testIds.suffix).firstChild,
      titleClassName: () => wrapper.getByTestId(testIds.title).className,
      suffixClassName: () => wrapper.getByTestId(testIds.suffix).className,
    },
  };
  return driver;
};
