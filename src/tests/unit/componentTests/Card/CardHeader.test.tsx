import React from "react";
import { cleanup } from "@testing-library/react";

import { CardHeaderDriverSpecType } from "../../../../types";
import { cardHeaderDriver as createCardHeaderDriver } from "../../../drivers/unitDrivers";

describe("<CardHeader/>", () => {
  let cardHeaderDriver: CardHeaderDriverSpecType;

  beforeEach(() => {
    cardHeaderDriver = createCardHeaderDriver();
  });

  afterEach(cleanup);

  it("should display title", () => {
    const title = "just title";

    expect(
      cardHeaderDriver.given.title(title).when.created().then.title()
    ).toBe(title);
  });

  it("should display children", () => {
    expect(
      cardHeaderDriver.given
        .children(<div>just children</div>)
        .when.created()
        .then.children()
    ).toContainHTML("<div>just children</div>");
  });

  it("should be 'titleClassName'", () => {
    expect(
      cardHeaderDriver.given
        .titleClassName("exampleClassName")
        .when.created()
        .then.titleClassName()
    ).toBe("cardHeaderTitle exampleClassName");
  });
});
