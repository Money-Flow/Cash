import { testIds } from "./testIds";

const combineSelectors = (...selectors) =>
  selectors.map(selector => `[data-testid="${selector}"]`).join(" ");

const addFocus = async (page, ...selectors) =>
  await page.focus(combineSelectors(...selectors));

const fillInput = async (page, value) =>
  await page.keyboard.type(String(value));

export const driver = page => ({
  addValue: async (name, amount) => {
    await addFocus(page, testIds.inputName);
    await fillInput(page, name);

    await addFocus(page, testIds.inputAmount);
    await fillInput(page, amount);
  },
  clickBtn: async () =>
    await page.$eval(combineSelectors(testIds.button), x => x.click()),
  isDisabled: async () =>
    await page.$eval(combineSelectors(testIds.button), x => x.disabled),
  enterClick: async () => {
    await addFocus(page, testIds.inputAmount);
    await page.keyboard.press("Enter");
  }
});
