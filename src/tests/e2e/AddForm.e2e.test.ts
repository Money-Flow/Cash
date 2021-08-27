import puppeteer from "puppeteer";

import {
  tableTestIds,
  addFormE2EDriver as createFormDriver,
  buttonE2EDriver as createButtonDriver,
  tableE2EDriver as createTableDriver,
  AddFormDriverE2ETypes,
  TableDriverE2EType,
  ButtonDriverE2ETypes,
} from "../../components";

type IProps = { amount: number; name: string | null | undefined } | null;

describe("New operation", () => {
  let browser: puppeteer.Browser;
  let page: puppeteer.Page;
  let addFormDriver: AddFormDriverE2ETypes;
  let tableDriver: TableDriverE2EType;
  let buttonDriver: ButtonDriverE2ETypes;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    addFormDriver = createFormDriver(page);
    tableDriver = createTableDriver(page);
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

      expect(firstItem?.name).toBe("Health");
      expect(firstItem?.amount).toBe(200);

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

      expect(item?.name).toBe("Milk");
      expect(item?.amount).toBe(10);
    });

    it("should add 2 items to the list", async () => {
      await addFormDriver.addItem("Milk", 10);
      await addFormDriver.enterPress();

      const firstItem = await tableDriver.getItemByIndex(0);

      await addFormDriver.addItem("Health", 200);
      await addFormDriver.enterPress();

      const secondItem = await tableDriver.getItemByIndex(1);

      const total = await tableDriver.getTotal();

      expect(firstItem?.name).toBe("Milk");
      expect(firstItem?.amount).toBe(10);

      expect(secondItem?.name).toBe("Health");
      expect(secondItem?.amount).toBe(200);

      expect(total).toBe(210);
    });
  });

  describe("Remove item", () => {
    let total: number;

    beforeEach(async () => {
      await addFormDriver.addItem("Milk", 10);
      await addFormDriver.enterPress();

      await addFormDriver.addItem("Banana", 20);
      await addFormDriver.enterPress();

      await addFormDriver.addItem("Porn", 39);
      await addFormDriver.enterPress();

      total = await tableDriver.getTotal();
    });

    it("should have the right total before delete", async () => {
      expect(total).toBe(69);
    });

    it("should not remove the item without confirming", async () => {
      buttonDriver = createButtonDriver(page, `${tableTestIds.row}-0`);
      await buttonDriver.click();
      expect(total).toBe(69);
    });

    describe("When removing second from 3 list items", () => {
      let firstItem: IProps;
      let secondItem: IProps;
      let thirdItem: IProps;

      beforeEach(async () => {
        await tableDriver.pressDeleteBtnByIndex(1);

        firstItem = await tableDriver.getItemByIndex(0);
        secondItem = await tableDriver.getItemByIndex(1);
        thirdItem = await tableDriver.getItemByIndex(2);

        total = await tableDriver.getTotal();
      });

      it("should have 1st and 3rd", () => {
        expect(firstItem?.name).toBe("Milk");
        expect(firstItem?.amount).toBe(10);
        expect(secondItem?.name).toBe("Porn");
        expect(secondItem?.amount).toBe(39);
      });

      it("should have only 2 items", () => {
        expect(thirdItem).toBeNull();
      });

      it("should calculate right total", () => {
        expect(total).toBe(49);
      });
    });
  });
});
