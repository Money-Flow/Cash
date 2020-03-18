import React from "react";
import { render } from "@testing-library/react";
import App from "../../components/App/App";

it("renders app", () => {
  const { getByTestId } = render(<App />);
  const app = getByTestId("app");
  expect(app).toBeInTheDocument();
});
