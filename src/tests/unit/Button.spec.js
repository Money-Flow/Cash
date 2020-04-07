import { createButtonDriver } from "../../components/Button/Button.unit.driver";

describe("Buttons", () => {
  let buttonsDriver;
  beforeEach(() => {
    buttonsDriver = createButtonDriver();
  });

  it("should get delete btn", () => {
    const button = buttonsDriver.given
      .props()
      .when.created()
      .then.deleteBtnExist();
    expect(button).toBeTruthy();
  });

  it("should be hidden block with the confirmation and cancel buttons", () => {
    const confirmationWrapper = buttonsDriver.given
      .props()
      .when.created()
      .then.confirmationWrapperExist();
    expect(confirmationWrapper).toBeFalsy();
  });

  xit("should get confirm button, when block with buttons shown", () => {
    const confirm = buttonsDriver.given
      .withConfirm(true)
      .when.created()
      .then.confirmBtnExist();
    expect(confirm).toBeTruthy();
  });

  xit("should get cancel button, when block with buttons shown", () => {
    const cancel = buttonsDriver.given
      .withConfirm(true)
      .when.created()
      .then.cancelBtnExist();
    expect(cancel).toBeTruthy();
  });

  xit("should get the icon on confirm button, when block with buttons shown", () => {
    const confirmIcon = buttonsDriver.given
      .withConfirm(true)
      .when.created()
      .then.iconConfirmButtonExist();
    expect(confirmIcon).toBeTruthy();
  });

  xit("should get the icon on calcel button, when block with buttons shown", () => {
    const cancelIcon = buttonsDriver.given
      .withConfirm(true)
      .when.created()
      .then.iconCancelButtonExist();
    expect(cancelIcon).toBeTruthy();
  });
});
