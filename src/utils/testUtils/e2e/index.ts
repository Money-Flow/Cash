import { Page } from "puppeteer";
import { combineSelectors } from "../common";

export const addFocus = async (
  page: Page,
  ...selectors: string[]
): Promise<void> => page.focus(combineSelectors(...selectors));

export const fillInput = async (
  page: Page,
  value: string | number
): Promise<void> => page.keyboard.type(String(value));

export const enterPress = async (page: Page): Promise<void> =>
  page.keyboard.press("Enter");

export const getElementById = async (
  page: Page,
  ...selectors: string[]
): Promise<HTMLElement | null> =>
  page.evaluate((selector: string) => {
    const element: HTMLElement | null = document.querySelector(selector);
    if (!element) {
      return null;
    }
    return element;
  }, combineSelectors(...selectors));

export const existElement = async (
  page: Page,
  ...selectors: string[]
): Promise<boolean> => !!(await getElementById(page, ...selectors));
