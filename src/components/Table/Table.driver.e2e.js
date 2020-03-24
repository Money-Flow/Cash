import { testIds } from "./testIds";

const combineSelectors = (...selectors) =>
  selectors.map(selector => `[data-testid="${selector}"]`).join(" ");

export const driver = page => ({
  getName: async () =>
    await page.$eval(combineSelectors(testIds.tableName), x => x.innerText),
  getAmount: async () =>
    await page.$eval(combineSelectors(testIds.tableAmount), x =>
      Number(x.innerText)
    )
});
