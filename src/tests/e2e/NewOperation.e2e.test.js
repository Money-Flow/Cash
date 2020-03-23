import puppeteer from "puppeteer";

import { driver as addFromDriver } from "../../components/NewOperation/NewOperation.driver.e2e";
import { driver as getValueFromTable } from "../../components/Table/Table.driver.e2e";

jest.setTimeout(10000);

describe("New operation", () => {
  let browser, page, addFormDriver, getValue;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    addFormDriver = addFromDriver(page);
    getValue = getValueFromTable(page);
  });

  afterEach(async () => {
    await browser.close();
  });

  it("should get a new operation in the table: 'Milk', 10", async () => {
    let name = "Milk",
      amount = "10",
      input = await addFormDriver.addValue(name, amount);
    await addFormDriver.clickBtn();
    let output = await getValue.getResult();
    expect(input).toBe(output);
  });

  it("should get an disabled button when the operation name is missing", async () => {
    let name = "",
      amount = 10;
    await addFormDriver.addValue(name, amount);
    let isDisabledBtn = await addFormDriver.getStateBtn();
    expect(isDisabledBtn).toBe(true);
  });

  it('should send data if validation is completed and "Enter" is pressed ', async () => {
    let name = "Milk",
      amount = "10",
      input = await addFormDriver.addValue(name, amount);
    await addFormDriver.enterClick();
    let output = await getValue.getResult();
    expect(input).toBe(output);
  });
});
