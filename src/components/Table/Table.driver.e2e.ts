import { createButtonDriver } from "../Button/Button.driver.e2e";

import { testIds } from "./testIds";
import { testIds as totalTestIds } from "../Total/testIds";

const combineSelectors = (...selectors: string[]) =>
  selectors.map((selector) => `[data-testid="${selector}"]`).join(" ");

const getElemById = async (page: any, ...selectors: string[]) =>
  await page.evaluate((selector: string) => {
    const element: HTMLElement | null = document.querySelector(selector);
    if (!element) {
      return null;
    }
    return element.innerText;
  }, combineSelectors(...selectors));

const exist = async (page: any, ...selectors: string[]) =>
  !!(await getElemById(page, ...selectors));

export const driver = (page: any) => ({
  exist: () => exist(page, testIds.table),
  getItemByIndex: async (index: number) => {
    return page.evaluate(
      (
        index: number,
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
    page.$eval(combineSelectors(totalTestIds.total), (x: HTMLElement) =>
      Number(x.innerHTML)
    ),
  pressDeleteBtnByIndex: async (index: number) => {
    const deleteDriver = createButtonDriver(page, `${testIds.row}-${index}`);
    return deleteDriver.clickWithConfirm();
  },
});
