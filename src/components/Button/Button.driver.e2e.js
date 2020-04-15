import { testIds } from "./../Button/testIds";

const combineSelectors = (...selectors) =>
  selectors.map((selector) => `[data-testid="${selector}"]`).join(" ");

export const driver = (page) => ({
  confirmBtnClick: async () =>
    await page.$eval(combineSelectors(testIds.btnConfirm), (x) => x.click()),
});
