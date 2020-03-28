import puppeteer from "puppeteer";

import { driver as addFromDriver } from "../../components/AddForm/AddForm.driver.e2e";
import { driver as tableDriver } from "../../components/Table/Table.driver.e2e";

describe("New operation", () => {
  let browser, page, addFormDriver, getValue;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    addFormDriver = addFromDriver(page);
    getValue = tableDriver(page);
  });

  afterEach(async () => {
    await browser.close();
  });

  it("should add Milk with cost 10 to the list", async () => {
    let name = "Milk",
      amount = 10;
    await addFormDriver.addItem(name, amount);
    await addFormDriver.enterClick();

    const firstItem = await getValue.getItemByIndex(0);

    expect(firstItem.name).toBe(name);
    expect(firstItem.amount).toBe(amount);
  });

  it("should get an disabled button when the operation name is missing", async () => {
    let name = "",
      amount = 10;
    await addFormDriver.addItem(name, amount);
    let isDisabledBtn = await addFormDriver.isDisabled();
    expect(isDisabledBtn).toBe(true);
  });

  it('should send data if validation is completed and "Enter" is pressed ', async () => {
    let name = "Milk",
      amount = 10;

    await addFormDriver.addItem(name, amount);
    await addFormDriver.enterClick();

    const firstItem = await getValue.getItemByIndex(0);

    expect(firstItem.name).toBe(name);
    expect(firstItem.amount).toBe(amount);
  });
});
