import { testIds } from "./testIds.js";
import { testIds as totalTestIds } from "../Total/testIds.js";
import { testIds as buttonTestIds } from "../Button/testIds";

const combineSelectors = (...selectors) =>
  selectors.map((selector) => `[data-testid="${selector}"]`).join(" ");

const getElemById = async (page, ...selectors) =>
  await page.evaluate((selector) => {
    const element = document.querySelector(selector);
    if (!element) {
      return null;
    }
    return element.innerText;
  }, combineSelectors(...selectors));

const exist = async (page, ...selectors) =>
  !!(await getElemById(page, ...selectors));

export const driver = (page) => ({
  exist: () => exist(page, testIds.table),
  getItemByIndex: async (index) => {
    return page.evaluate(
      (index, lineSelector, nameSelector, amountSelector) => {
        const row = document.querySelectorAll(lineSelector)[index];
        if (!row) return null;
        const amount = Number(row.querySelector(amountSelector).textContent);
        const name = row.querySelector(nameSelector).textContent;
        return { name, amount };
      },
      index,
      combineSelectors(testIds.row),
      combineSelectors(testIds.name),
      combineSelectors(testIds.amount)
    );
  },
  getTotal: async () =>
    page.$eval(combineSelectors(totalTestIds.total), (x) =>
      Number(x.innerHTML)
    ),
  pressBtnByIndex: async (index) => {
    return page.evaluate(
      (index, selectors) => {
        return document.querySelectorAll(selectors)[index].click();
      },
      index,
      combineSelectors(buttonTestIds.btn)
    );
  },
  // itemLenght: async () => {
  //
  // }
});
