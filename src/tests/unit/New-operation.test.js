import { getDriver } from "../../components/New-operation/New-operation.unit.driver";

import { testIds } from "../../components/New-operation/testIds";

describe("New-operation", () => {
  let newOperationDriver;

  beforeEach(() => {
    newOperationDriver = getDriver();
  });

  describe("Amount", () => {
    it("should get amount", () => {
      let amount = newOperationDriver.given
        .props()
        .when.created()
        .then.getElement(testIds.amountInput);
      expect(amount).toBe(true);
    });

    it("should get null if the input value did not equal the number", () => {
      let amount = newOperationDriver.given
        .props({ amount: "string" })
        .when.created()
        .then.getValue(testIds.amountInput);
      expect(amount).toBe(null);
    });
  });

  describe("Operation selection", () => {
    it('should get the "spend" in choosing an operation', () => {
      let operation = newOperationDriver.given
        .props({ operationID: 102 })
        .when.created()
        .then.getValue(testIds.selectOperation);
      expect(operation).toBe("get");
    });
  });

  describe("Category selection", () => {
    it("should get the 'food' in category", () => {
      let category = newOperationDriver.given
        .props({ categoryID: 506 })
        .when.created()
        .then.getValue(testIds.selectCategory);
      expect(category).toBe("food-and-groceries");
    });
  });

  describe("Account selection", () => {
    it("should get 'private' in account", () => {
      let account = newOperationDriver.given
        .props({ accountID: 1002 })
        .when.created()
        .then.getValue(testIds.selectAccount);
      expect(account).toBe("cards");
    });
  });

  describe("Textarea", () => {
    it('should get "test" in textarea', () => {
      let textarea = newOperationDriver.given
        .props({ textarea: "test" })
        .when.created()
        .then.getValue(testIds.textarea);
      expect(textarea).toBe("test");
    });
  });

  describe("Button", () => {
    it("should get button", () => {
      let btn = newOperationDriver.given
        .props()
        .when.created()
        .then.getElement(testIds.button);
      expect(btn).toBe(true);
    });
  });
});
