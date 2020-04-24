import { cleanup } from "@testing-library/react";

import { createAddFormDriver } from "./AddForm.spec.driver";

describe("Add form", () => {
  let addFormDriver: any;

  beforeEach(() => {
    addFormDriver = createAddFormDriver();
  });

  afterEach(cleanup);

  describe("by default", () => {
    it("button should be disabled", () => {
      const isDisabled = addFormDriver.given
        .props()
        .when.created()
        .then.isBtnDisabled();
      expect(isDisabled).toBeTruthy();
    });
  });

  describe("on button click", () => {
    let mockOnClick: () => void;
    let driver: any;

    beforeEach(() => {
      mockOnClick = jest.fn();
      driver = addFormDriver.given.onSubmit(mockOnClick);
    });

    describe("item without a name", () => {
      it("should not call onClick function and button should disabled", () => {
        const isDisabled = driver.when
          .created()
          .when.btnClick()
          .then.isBtnDisabled();
        expect(mockOnClick).not.toHaveBeenCalled();
        expect(isDisabled).toBeTruthy();
      });
    });

    describe("fields are valid", () => {
      beforeEach(() => {
        driver = driver.given.name("porn").given.amount(69);
      });

      it("button should be is enable", () => {
        const isDisabled = driver.when.created().then.isBtnDisabled();
        expect(isDisabled).toBeFalsy();
      });

      it("should call onClick function and button should be is disabled after a click", () => {
        let isDisabled = driver.when.created().then.isBtnDisabled();

        expect(isDisabled).toBeFalsy();

        isDisabled = addFormDriver.when.btnClick().then.isBtnDisabled();

        expect(mockOnClick).toHaveBeenCalled();
        expect(isDisabled).toBeTruthy();
      });
    });
  });
});
