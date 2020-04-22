import { cleanup } from "@testing-library/react";

import { createButtonDriver } from "./Button.spec.driver";

describe("Button", () => {
  let buttonsDriver: any;

  beforeEach(() => {
    buttonsDriver = createButtonDriver();
  });

  afterEach(cleanup);

  describe("by default", () => {
    it("confirmation block should be hidden", () => {
      const confirmationWrapperExist = buttonsDriver.given
        .props()
        .when.created()
        .then.confirmationWrapperExist();
      expect(confirmationWrapperExist).toBeFalsy();
    });

    it("on button click should call onClick function", () => {
      const mockOnClick = jest.fn();
      const driver = buttonsDriver.given
        .text("Delete")
        .given.click(mockOnClick)
        .when.created();

      const confirmationWrapperExist = driver.when
        .btnClick()
        .then.confirmationWrapperExist();

      expect(mockOnClick).toHaveBeenCalled();
      expect(confirmationWrapperExist).toBeFalsy();
    });

    it("button type should be 'button'", () => {
      const driver = buttonsDriver.given.props().when.created().then.btnType();
      expect(driver).toBe("button");
    });

    it("button should't disabled", () => {
      const driver = buttonsDriver.given
        .props()
        .when.created()
        .then.isBtnDisabled();
      expect(driver).toBeFalsy();
    });
  });

  describe("with confirmation", () => {
    it("on click button should show conformation block", () => {
      const mockOnClick = jest.fn();

      const driver = buttonsDriver.given
        .withConfirm(true)
        .given.text("Delete")
        .given.click(mockOnClick)
        .when.created();

      let confirmationWrapperExist = driver.then.confirmationWrapperExist();

      expect(confirmationWrapperExist).toBeFalsy();

      confirmationWrapperExist = buttonsDriver.when
        .btnClick()
        .then.confirmationWrapperExist();

      expect(mockOnClick).not.toHaveBeenCalled();
      expect(confirmationWrapperExist).toBeTruthy();
    });

    describe("on cancel button click", () => {
      it("should not call onClick function and should hide conformation block", () => {
        const mockOnClick = jest.fn();

        const driver = buttonsDriver.given
          .withConfirm(true)
          .given.text("Delete")
          .given.click(mockOnClick)
          .when.created()
          .when.btnClick();

        let confirmationWrapperExist = driver.then.confirmationWrapperExist();

        expect(confirmationWrapperExist).toBeTruthy();

        confirmationWrapperExist = buttonsDriver.when
          .cancelBtnClick()
          .then.confirmationWrapperExist();

        expect(mockOnClick).not.toHaveBeenCalled();
        expect(confirmationWrapperExist).toBeFalsy();
      });
    });

    describe("on confirm button click", () => {
      it("should hide confirmation block and call onClick function", () => {
        const mockOnClick = jest.fn();

        const driver = buttonsDriver.given
          .withConfirm(true)
          .given.text("Delete")
          .given.click(mockOnClick)
          .when.created()
          .when.btnClick();

        let confirmationWrapperExist = driver.then.confirmationWrapperExist();

        expect(confirmationWrapperExist).toBeTruthy();

        confirmationWrapperExist = buttonsDriver.when
          .confirmBtnClick()
          .then.confirmationWrapperExist();

        expect(mockOnClick).toHaveBeenCalled();
        expect(confirmationWrapperExist).toBeFalsy();
      });
    });
  });
});
