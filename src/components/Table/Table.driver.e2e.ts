import { Page } from "puppeteer";

import createButtonDriver from "../Button/Button.driver.e2e";

import testIds from "./testIds";
import totalTestIds from "../Total/testIds";
import { TableDriverE2ETypes } from "../../types/driverTypes/TableDriverTypes";

const combineSelectors = (...selectors: string[]) =>
  selectors.map((selector) => `[data-testid="${selector}"]`).join(" ");

const getElemById = async (page: Page, ...selectors: string[]) =>
  page.evaluate((selector: string) => {
    const element: HTMLElement | null = document.querySelector(selector);
    if (!element) {
      return null;
    }
    return element.innerText;
  }, combineSelectors(...selectors));

const exist = async (page: Page, ...selectors: string[]) =>
  !!(await getElemById(page, ...selectors));

const driver = (page: Page): TableDriverE2ETypes => ({
  exist: () => exist(page, testIds.table),
  getItemByIndex: async (index: number) => {
    return page.evaluate(
      (
        elementIndex: number,
        lineSelector: string,
        nameSelector: string,
        amountSelector: string
      ) => {
        const row: HTMLElement | null = document.querySelector(lineSelector);
        if (!row) return null;
        const amount = Number(row.querySelector(amountSelector)?.textContent);
        const name = row.querySelector(nameSelector)?.textContent;
        return { name, amount };
      },
      index,
      combineSelectors(`${testIds.row}-${index}`),
      combineSelectors(testIds.name),
      combineSelectors(testIds.amount)
    );
  },
  getTotal: async () =>
    page.$eval(combineSelectors(totalTestIds.total), (x) =>
      Number(x.innerHTML)
    ),
  pressDeleteBtnByIndex: async (index: number) => {
    const deleteDriver = createButtonDriver(page, `${testIds.row}-${index}`);
    return deleteDriver.clickWithConfirm();
  },
});

export default driver;
