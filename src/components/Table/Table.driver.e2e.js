import { testIds } from "./testIds";

const combineSelectors = (...selectors) =>
  selectors.map(selector => `[data-testid="${selector}"]`).join(" ");

const exist = async (page, ...selectors) =>
  await page.evaluate(selector => {
    let element = document.querySelector(selector);
    return !!element;
  }, combineSelectors(...selectors));

export const driver = page => ({
  exist: () => exist(page, testIds.table),
  getItemByIndex: async index => {
    return page.evaluate(
      (index, lineSelector, nameSelector, amountSelector) => {
        const row = document.querySelectorAll(lineSelector)[index];
        const amount = Number(row.querySelector(amountSelector).textContent);
        const name = row.querySelector(nameSelector).textContent;
        return { name, amount };
      },
      index,
      combineSelectors(testIds.row),
      combineSelectors(testIds.name),
      combineSelectors(testIds.amount)
    );
  }
});
