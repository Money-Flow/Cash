import React from "react";
import { cleanup } from "@testing-library/react";

import { cardBodyDriver as createCardBodyDriver } from "../../../drivers/unitDrivers";
import { CardBodyDriverSpecType } from "../../../../types";

describe("<CardBody/>", () => {
  let cardBodyDriver: CardBodyDriverSpecType;

  beforeEach(() => {
    cardBodyDriver = createCardBodyDriver();
  });

  afterEach(cleanup);

  it("should display children", () => {
    expect(
      cardBodyDriver.given
        .children(<div>body children</div>)
        .when.created()
        .then.children()
    ).toContainHTML("<div>body children</div>");
  });
});
