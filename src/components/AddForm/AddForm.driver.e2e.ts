import { testIds } from "./testIds";

const combineSelectors = (...selectors: string[]) =>
  selectors.map((selector) => `[data-testid="${selector}"]`).join(" ");

const addFocus = async (page: any, ...selectors: string[]) =>
  await page.focus(combineSelectors(...selectors));

const fillInput = async (page: any, value: string | number) =>
  await page.keyboard.type(String(value));

const enterPress = async (page: any) => await page.keyboard.press("Enter");

export const driver = (page: any) => ({
  addItem: async (name: string, amount: number) => {
    await addFocus(page, testIds.inputName);
    await fillInput(page, name);

    await addFocus(page, testIds.inputAmount);
    await fillInput(page, amount);
  },
  enterPress: async () => enterPress(page),
});
