import { cleanup } from "@testing-library/react";

import { createButtonDriver } from "../../components/Button/Button.unit.driver";

describe("Button", () => {
  let buttonsDriver;

  beforeEach(() => {
    buttonsDriver = createButtonDriver();
  });

  afterEach(cleanup);

  describe("by default", () => {
    it("should be hidden confirmation block", () => {
      const confirmationWrapper = buttonsDriver.given
        .props()
        .when.created()
        .then.exist();
      expect(confirmationWrapper).toBeFalsy();
    });

    it("should be called function when on click button", () => {
      const mockOnClick = jest.fn();
      const driver = buttonsDriver.given
        .text("Delete")
        .given.click(mockOnClick)
        .when.created()
        .when.btnClick()
        .then.exist();
      expect(mockOnClick).toHaveBeenCalled();
      expect(driver).toBeFalsy();
    });
  });

  describe("with confirmation", () => {
    it("should not be called function when on click button", () => {
      const mockOnClick = jest.fn();

      let driver = buttonsDriver.given
        .withConfirm(true)
        .given.text("Delete")
        .given.click(mockOnClick)
        .when.created()
        .then.exist();
      expect(driver).toBeFalsy();

      driver = buttonsDriver.when.btnClick().then.exist();

      expect(mockOnClick).not.toHaveBeenCalled();
      expect(driver).toBeTruthy();
    });

    it("should not be called function when on click cancel button", () => {
      const mockOnClick = jest.fn();

      let driver = buttonsDriver.given
        .withConfirm(true)
        .given.text("Delete")
        .given.click(mockOnClick)
        .when.created()
        .when.btnClick();
      expect(driver).toBeTruthy();

      driver = buttonsDriver.when.cancelBtnClick().then.exist();

      expect(mockOnClick).not.toHaveBeenCalled();
      expect(driver).toBeFalsy();
    });

    it("should be called function when on click confirmation button", () => {
      const mockOnClick = jest.fn();

      let driver = buttonsDriver.given
        .withConfirm(true)
        .given.text("Delete")
        .given.click(mockOnClick)
        .when.created()
        .when.btnClick()
        .then.exist();
      expect(driver).toBeTruthy();

      driver = buttonsDriver.when.confirmBtnClick().then.exist();

      expect(mockOnClick).toHaveBeenCalled();
      expect(driver).toBeFalsy();
    });
  });
});
