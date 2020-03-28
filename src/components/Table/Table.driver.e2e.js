import { testIds } from "./testIds";

const combineSelectors = (...selectors) =>
  selectors.map(selector => `[data-testid="${selector}"]`).join(" ");

export const driver = page => ({
  getItemByIndex: async index => {
    let itemList = await page.evaluate(
      (tr, td) => {
        const rows = document.querySelectorAll(tr);
        return Array.from(rows, row => {
          const columns = row.querySelectorAll(td);
          return Array.from(columns, column => column.innerHTML);
        });
      },
      combineSelectors(testIds.tr),
      combineSelectors(testIds.td)
    );
    itemList = itemList.reduce((acc, currentValue, index) => {
      const [name, amount] = currentValue;
      acc[index] = {
        name: name,
        amount: Number(amount)
      };
      return acc;
    }, []);
    return itemList[index];
  }
});
