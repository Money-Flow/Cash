import { testIds } from "./testIds";

const combineSelectors = (...selectors: string[]) =>
  selectors
    .map((selector) => (selector ? `[data-testid="${selector}"]` : ""))
    .join(" ");

export const createButtonDriver = (page: any, selector = "") => {
  const click = async () =>
    await page.$eval(
      combineSelectors(selector, testIds.btn),
      (x: HTMLElement) => x.click()
    );

  const confirmBtnClick = async () =>
    await page.$eval(
      combineSelectors(selector, testIds.btnConfirm),
      (x: HTMLElement) => x.click()
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
