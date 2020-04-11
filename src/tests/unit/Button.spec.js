import { cleanup } from "@testing-library/react";

import { createButtonDriver } from "../../components/Button/Button.unit.driver";

describe("Button", () => {
  let buttonsDriver;

  beforeEach(() => {
    buttonsDriver = createButtonDriver();
  });

  afterEach(cleanup);

  it("by default conformation block should be hidden", () => {
    const confirmationWrapper = buttonsDriver.given
      .props()
      .when.created()
      .then.exist();
    expect(confirmationWrapper).toBeFalsy();
  });

  it("by default, the function should be called when press delete button", () => {
    const mockOnClick = jest.fn();
    buttonsDriver.given
      .text("Delete")
      .given.click(mockOnClick)
      .when.deleteBtnClick();
    expect(mockOnClick).toHaveBeenCalled();
  });
});

describe("Confirmation", () => {
  let buttonsDriver;
  beforeEach(() => {
    buttonsDriver = createButtonDriver();
  });

  afterEach(cleanup);

  it("the function should not be called after press delete button", () => {
    const mockOnClick = jest.fn();
    buttonsDriver.given
      .withConfirm(true)
      .given.text("Delete")
      .given.click(mockOnClick)
      .when.deleteBtnClick();
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it("the function should not be called when the press cancel button", () => {
    const mockOnClick = jest.fn();
    buttonsDriver.given
      .withConfirm(true)
      .given.text("Delete")
      .given.click(mockOnClick)
      .when.deleteBtnClick()
      .when.cancelBtnClick();
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
