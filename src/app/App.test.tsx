import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { App } from "app/App";

describe("<Card/>", () => {
  it("renders text", () => {
    const { getByText } = render(<App />);
    expect(getByText("Cash")).toBeInTheDocument();
  });
});
