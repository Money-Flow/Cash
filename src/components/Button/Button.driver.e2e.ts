import { Page } from "puppeteer";

import testIds from "./testIds";
import { ButtonDriverE2ETypes } from "../../types";

const combineSelectors = (...selectors: string[]) =>
  selectors
    .map((selector) => (selector ? `[data-testid="${selector}"]` : ""))
    .join(" ");

const createButtonDriver = (
  page: Page,
  selector = ""
): ButtonDriverE2ETypes => {
  const click = async (): Promise<void> => {
    const element = await page.$(combineSelectors(selector, testIds.btn));
    return element?.click();
  };

  const confirmBtnClick = async (): Promise<void> => {
    const element = await page.$(
      combineSelectors(selector, testIds.btnConfirm)
    );
    return element?.click();
  };

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

export default createButtonDriver;
