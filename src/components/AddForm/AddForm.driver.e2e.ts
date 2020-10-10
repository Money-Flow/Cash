import { Page } from "puppeteer";
import testIds from "./testIds";
import { AddFormDriverE2ETypes } from "../../types/driverTypes/AddFormDriverTypes";

const combineSelectors = (...selectors: string[]) =>
  selectors.map((selector) => `[data-testid="${selector}"]`).join(" ");

const addFocus = async (page: Page, ...selectors: string[]) =>
  page.focus(combineSelectors(...selectors));

const fillInput = async (page: Page, value: string | number) =>
  page.keyboard.type(String(value));

const enterPress = async (page: Page) => page.keyboard.press("Enter");

const driver = (page: Page): AddFormDriverE2ETypes => ({
  addItem: async (name: string, amount: number) => {
    await addFocus(page, testIds.inputName);
    await fillInput(page, name);

    await addFocus(page, testIds.inputAmount);
    await fillInput(page, amount);
  },
  enterPress: async () => enterPress(page),
});

export default driver;
