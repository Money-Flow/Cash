import { testIds } from "./../Button/testIds";

const combineSelectors = (...selectors) =>
  selectors
    .map((selector) => (selector ? `[data-testid="${selector}"]` : ""))
    .join(" ");

export const createButtonDriver = (page, selector = "") => {
  const click = async () =>
    await page.$eval(combineSelectors(selector, testIds.btn), (x) => x.click());

  const confirmBtnClick = async () =>
    await page.$eval(combineSelectors(selector, testIds.btnConfirm), (x) =>
      x.click()
    );

  return {
    click,
    confirmBtnClick,
    clickWithConfirm: async () => {
      await click();
      try {
        await confirmBtnClick();
      } catch {
        throw new Error("Confirmation button not found");
      }
    },
  };
};
