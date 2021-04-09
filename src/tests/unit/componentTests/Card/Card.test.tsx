import React from "react";
import { cleanup } from "@testing-library/react";

import { cardDriver as createCardDriver } from "../../../drivers/unitDrivers";
import { CardDriverSpecType } from "../../../../types";

describe("<Card/>", () => {
  let cardDriver: CardDriverSpecType;

  beforeEach(() => {
    cardDriver = createCardDriver();
  });

  afterEach(cleanup);

  it("should display children", () => {
    expect(
      cardDriver.given
        .children(<div>children</div>)
        .when.created()
        .then.children()
    ).toContainHTML("<div>children</div>");
  });

  it("should be 'className", () => {
    expect(
      cardDriver.given
        .className("exampleClassName")
        .when.created()
        .then.className()
    ).toBe("card exampleClassName");
  });
});
