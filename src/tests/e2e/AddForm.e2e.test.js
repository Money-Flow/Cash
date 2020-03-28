import puppeteer from "puppeteer";

import { driver as createFromDriver } from "../../components/AddForm/AddForm.driver.e2e";
import { driver as createTableDriver } from "../../components/Table/Table.driver.e2e";

describe("New operation", () => {
  let browser, page, addFormDriver, tableDriver;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    addFormDriver = createFromDriver(page);
    tableDriver = createTableDriver(page);
  });

  afterEach(async () => {
    await browser.close();
  });

  it("should add Health with cost 200 to the list", async () => {
    await addFormDriver.addItem("Health", 200);
    await addFormDriver.enterClick();

    const firstItem = await tableDriver.getItemByIndex(0);

    expect(firstItem.name).toBe("Health");
    expect(firstItem.amount).toBe(200);
  });

  it("should not add Item without name", async () => {
    await addFormDriver.addItem("", 100);
    const table = await tableDriver.getTable();
    expect(table).toBe(null);
  });

  it("should add Item on Enter key press", async () => {
    await addFormDriver.addItem("Milk", 10);
    await addFormDriver.enterClick();

    const firstItem = await tableDriver.getItemByIndex(0);

    expect(firstItem.name).toBe("Milk");
    expect(firstItem.amount).toBe(10);
  });

  it("should add 2 items to the list", async () => {
    await addFormDriver.addItem("Milk", 10);
    await addFormDriver.enterClick();

    const firstItem = await tableDriver.getItemByIndex(0);

    await addFormDriver.addItem("Health", 200);
    await addFormDriver.enterClick();

    const secondItem = await tableDriver.getItemByIndex(1);

    expect(firstItem.name).toBe("Milk");
    expect(firstItem.amount).toBe(10);

    expect(secondItem.name).toBe("Health");
    expect(secondItem.amount).toBe(200);
  });
});
