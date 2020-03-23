import { testIds } from "./testIds";

const combineSelectors = (...selectors) =>
  selectors.map(selector => `[data-testid="${selector}"]`).join(" ");

const getValueById = async (page, fn, ...selectors) =>
  await page.$eval(combineSelectors(...selectors), fn);

export const driver = page => ({
  getResult: async () => {
    let tableName = await getValueById(
        page,
        x => x.innerText,
        testIds.tableName
      ),
      tableAmount = await getValueById(
        page,
        x => x.innerText,
        testIds.tableAmount
      );
    return `${tableName} — ${tableAmount}`;
  }
});
