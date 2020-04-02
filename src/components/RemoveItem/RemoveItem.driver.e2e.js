import { testIds } from "./testIds";

const combineSelectors = (...selectors) =>
  selectors.map((selector) => `[data-testid="${selector}"]`).join(" ");

export const driver = (page) => ({
  pressDeleteBtnByIndex: async (index) => {
    return page.evaluate(
      (index, selectors) => {
        return document.querySelectorAll(selectors)[index].click();
      },
      index,
      combineSelectors(testIds.button)
    );
  },
});
