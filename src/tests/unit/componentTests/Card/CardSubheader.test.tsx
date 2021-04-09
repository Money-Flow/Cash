import React from "react";
import { cleanup } from "@testing-library/react";

import { cardSubheaderDriver as createCardSubheaderDriver } from "../../../drivers/unitDrivers";
import { CardSubheaderDriverSpecType } from "../../../../types";

describe("<CardSubheader/>", () => {
  let cardSubheaderDriver: CardSubheaderDriverSpecType;

  beforeEach(() => {
    cardSubheaderDriver = createCardSubheaderDriver();
  });

  afterEach(cleanup);

  it("should display title", () => {
    expect(
      cardSubheaderDriver.given
        .title("Example title")
        .when.created()
        .then.title()
    ).toBe("Example title");
  });

  it("should display suffix", () => {
    expect(
      cardSubheaderDriver.given
        .suffix(<div>suffix</div>)
        .when.created()
        .then.suffix()
    ).toContainHTML("<div>suffix</div>");
  });

  it("should be 'titleClassName'", () => {
    expect(
      cardSubheaderDriver.given
        .titleClassName("exampleClassName")
        .when.created()
        .then.titleClassName()
    ).toBe("title exampleClassName");
  });

  it("should be 'suffixClassName'", () => {
    expect(
      cardSubheaderDriver.given
        .suffixClassName("exampleClassName")
        .when.created()
        .then.suffixClassName()
    ).toBe("suffix exampleClassName");
  });
});
