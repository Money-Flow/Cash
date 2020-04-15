import puppeteer from "puppeteer";

import { driver as createFormDriver } from "../../components/AddForm/AddForm.driver.e2e";
import { driver as createTableDriver } from "../../components/Table/Table.driver.e2e";
import { driver as createButtonDriver } from "../../components/Button/Button.driver.e2e";

describe("New operation", () => {
  let browser, page, addFormDriver, tableDriver, buttonDriver;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    addFormDriver = createFormDriver(page);
    tableDriver = createTableDriver(page);
    buttonDriver = createButtonDriver(page);
  });

  afterEach(async () => {
    await browser.close();
  });

  describe("Add item", () => {
    it("should add Health with cost 200 to the list", async () => {
      await addFormDriver.addItem("Health", 200);
      await addFormDriver.enterPress();

      const firstItem = await tableDriver.getItemByIndex(0);

      const total = await tableDriver.getTotal();

      expect(firstItem.name).toBe("Health");
      expect(firstItem.amount).toBe(200);

      expect(total).toBe(200);
    });

    it("should not add Item without name", async () => {
      await addFormDriver.addItem("", 100);
      const tableExists = await tableDriver.exist();
      expect(tableExists).toBe(false);
    });

    it("should add Item on Enter key press", async () => {
      await addFormDriver.addItem("Milk", 10);
      await addFormDriver.enterPress();

      const item = await tableDriver.getItemByIndex(0);

      expect(item.name).toBe("Milk");
      expect(item.amount).toBe(10);
    });

    it("should add 2 items to the list", async () => {
      await addFormDriver.addItem("Milk", 10);
      await addFormDriver.enterPress();

      const firstItem = await tableDriver.getItemByIndex(0);

      await addFormDriver.addItem("Health", 200);
      await addFormDriver.enterPress();

      const secondItem = await tableDriver.getItemByIndex(1);

      const total = await tableDriver.getTotal();

      expect(firstItem.name).toBe("Milk");
      expect(firstItem.amount).toBe(10);

      expect(secondItem.name).toBe("Health");
      expect(secondItem.amount).toBe(200);

      expect(total).toBe(210);
    });
  });

  describe("Remove item", () => {
    it("should remove first element, the total should be recalculated", async () => {
      await addFormDriver.addItem("Milk", 10);
      await addFormDriver.enterPress();

      await addFormDriver.addItem("Banana", 20);
      await addFormDriver.enterPress();

      let total = await tableDriver.getTotal();
      expect(total).toBe(30);

      await tableDriver.pressBtnByIndex(0);
      await buttonDriver.confirmBtnClick();

      total = await tableDriver.getTotal();
      expect(total).toBe(20);

      const firstItem = await tableDriver.getItemByIndex(0);
      const secondItem = await tableDriver.getItemByIndex(1);

      expect(firstItem.name).toBe("Banana");
      expect(firstItem.amount).toBe(20);
      expect(secondItem).toBeNull();
      expect(total).toBe(20);
    });
  });
});
