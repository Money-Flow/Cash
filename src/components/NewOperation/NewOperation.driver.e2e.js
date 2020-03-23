import { testIds } from "./testIds";

const combineSelectors = (...selectors) =>
  selectors.map(selector => `[data-testid="${selector}"]`).join(" ");

const getValueById = async (page, fn, ...selectors) =>
  await page.$eval(combineSelectors(...selectors), fn);

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

    return `${name} — ${amount}`;
  },
  clickBtn: async () => getValueById(page, x => x.click(), testIds.button),
  getStateBtn: async () =>
    await getValueById(page, x => x.disabled, testIds.button),
  enterClick: async () => {
    await addFocus(page, testIds.inputAmount);
    await page.keyboard.press("Enter");
  }
});
