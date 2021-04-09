import React from "react";
import { render, RenderResult } from "@testing-library/react";

import { CardBody, CardBodyProps } from "../../../../components";
import { CardBodyDriverSpecType } from "../../../../types";
import { cardBodyTestIds as testIds } from "../../../testIds";

export const cardBodyDriver = (): CardBodyDriverSpecType => {
  let props: CardBodyProps;
  let wrapper: RenderResult;

  const driver: CardBodyDriverSpecType = {
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
    },
    when: {
      created: () => {
        // eslint-disable-next-line react/jsx-props-no-spreading
        wrapper = render(<CardBody {...props} />);
        return driver;
      },
    },
    then: {
      children: () => wrapper.getByTestId(testIds.children).firstChild,
    },
  };
  return driver;
};
