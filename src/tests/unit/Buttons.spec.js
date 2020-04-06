import { createButtonsDriver } from "../../components/Buttons/Buttons.unit.driver";

describe("Buttons", () => {
  let buttonsDriver;
  beforeEach(() => {
    buttonsDriver = createButtonsDriver();
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

  it("should get confirm button, when block with buttons shown", () => {
    const confirm = buttonsDriver.given
      .showButtons({ show: true })
      .when.created()
      .then.confirmBtnExist();
    expect(confirm).toBeTruthy();
  });

  it("should get cancel button, when block with buttons shown", () => {
    const cancel = buttonsDriver.given
      .showButtons({ show: true })
      .when.created()
      .then.cancelBtnExist();
    expect(cancel).toBeTruthy();
  });

  it("should get the icon on confirm button, when block with buttons shown", () => {
    const confirmIcon = buttonsDriver.given
      .showButtons({ show: true })
      .when.created()
      .then.iconConfirmButtonExist();
    expect(confirmIcon).toBeTruthy();
  });

  it("should get the icon on calcel button, when block with buttons shown", () => {
    const cancelIcon = buttonsDriver.given
      .showButtons({ show: true })
      .when.created()
      .then.iconCancelButtonExist();
    expect(cancelIcon).toBeTruthy();
  });
});
