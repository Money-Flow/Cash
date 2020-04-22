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
      const driver = addFormDriver.given
        .props()
        .when.created()
        .then.isBtnDisabled();
      expect(driver).toBeTruthy();
    });
  });

  describe("on button click", () => {
    let mockOnClick: () => void;

    beforeEach(() => {
       mockOnClick = jest.fn();
    })
    describe("item without a name", () => {
      it("should not call onClick function and button should disabled", () => {
        const driver = addFormDriver.given
          .onSubmit(mockOnClick)
          .when.created()
          .when.btnClick()
          .then.isBtnDisabled();
        expect(mockOnClick).not.toHaveBeenCalled();
        expect(driver).toBeTruthy();
      });
    });

    describe("fields are valid", () => {
      it("button should be is enable", () => {
        const driver = addFormDriver.given
          .onSubmit(mockOnClick)
          .given.name("porn")
          .given.amount(69)
          .when.created()
          .then.isBtnDisabled();
        expect(driver).toBeFalsy();
      });
      it("should call onClick function and button should be is disabled after a click", () => {
        let driver = addFormDriver.given
          .onSubmit(mockOnClick)
          .given.name("porn")
          .given.amount(69)
          .when.created()
          .then.isBtnDisabled();

        expect(driver).toBeFalsy();

        driver = addFormDriver.when.btnClick().then.isBtnDisabled();

        expect(mockOnClick).toHaveBeenCalled();
        expect(driver).toBeTruthy();
      });
    });
  });
});
