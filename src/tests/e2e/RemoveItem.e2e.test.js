import puppeteer from "puppeteer";

import { driver as createDialogButtonsDriver } from "./../../components/DialogButtons/DialogButtons.driver.e2e.js";
import { driver as createRemoveItemDriver } from "./../../components/RemoveItem/RemoveItem.driver.e2e.js";
import { driver as createFormDriver } from "../../components/AddForm/AddForm.driver.e2e.js";
import { driver as createTableDriver } from "../../components/Table/Table.driver.e2e.js";

describe("New operation", () => {
  let browser,
    page,
    dialogButtonsDriver,
    removeItemDriver,
    addFormDriver,
    tableDriver;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    dialogButtonsDriver = createDialogButtonsDriver(page);
    removeItemDriver = createRemoveItemDriver(page);
    addFormDriver = createFormDriver(page);
    tableDriver = createTableDriver(page);
  });

  afterEach(async () => {
    await browser.close();
  });

  it("should show confirmation and cancel button after press delete button", async () => {
    await addFormDriver.addItem("Milk", 10);
    await addFormDriver.enterPress();

    await removeItemDriver.pressDeleteBtnByIndex(0);

    const cancelBtn = await dialogButtonsDriver.cancelBtnExist();
    const confirmBtn = await dialogButtonsDriver.confirmBtnExist();

    expect(cancelBtn).toBe(true);
    expect(confirmBtn).toBe(true);
  });

  it("should not show the cancel and confirm buttons when there are products in the table and the delete button has not been pressed", async () => {
    await addFormDriver.addItem("Milk", 10);
    await addFormDriver.enterPress();

    const cancelBtn = await dialogButtonsDriver.cancelBtnExist();
    const confirmBtn = await dialogButtonsDriver.confirmBtnExist();

    expect(cancelBtn).toBe(false);
    expect(confirmBtn).toBe(false);
  });

  it("the item should  be presented and the total value remains the same when the user clicks the cancel button", async () => {
    await addFormDriver.addItem("Milk", 10);
    await addFormDriver.enterPress();

    await removeItemDriver.pressDeleteBtnByIndex(0);

    await dialogButtonsDriver.cancelBtnClick();

    const dialogButtonsExist = await dialogButtonsDriver.dialogButtonsExist(0);

    const item = await tableDriver.getItemByIndex(0);
    const total = await tableDriver.getTotal();

    expect(dialogButtonsExist).toBe(false);

    expect(item.name).toBe("Milk");
    expect(item.amount).toBe(10);

    expect(total).toBe(10);
  });

  it("should remove second element, the total should be recalculated", async () => {
    await addFormDriver.addItem("Milk", 10);
    await addFormDriver.enterPress();

    await addFormDriver.addItem("banana", 20);
    await addFormDriver.enterPress();

    await addFormDriver.addItem("book", 70);
    await addFormDriver.enterPress();

    await removeItemDriver.pressDeleteBtnByIndex(1);

    await dialogButtonsDriver.confirmBtnClick();

    const total = await tableDriver.getTotal();

    const firstItem = await tableDriver.getItemByIndex(0);
    const secondItem = await tableDriver.getItemByIndex(1);

    expect(firstItem.name).toBe("Milk");
    expect(firstItem.amount).toBe(10);

    expect(secondItem.name).toBe("book");
    expect(secondItem.amount).toBe(70);

    expect(total).toBe(80);
  });
});
