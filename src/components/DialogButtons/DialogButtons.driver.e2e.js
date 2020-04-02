import { testIds } from "./testIds.js";

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
  dialogButtonsExist: () => exist(page, testIds.wrapper),
  confirmBtnExist: () => exist(page, testIds.confirm),
  cancelBtnExist: () => exist(page, testIds.cancel),
  cancelBtnClick: async () =>
    await page.$eval(combineSelectors(testIds.cancel), (x) => x.click()),
  confirmBtnClick: async () =>
    await page.$eval(combineSelectors(testIds.confirm), (x) => x.click()),
});
