import { Page } from "puppeteer";

import { addFormTestIds as testIds } from "./AddFormTestIds";
import { AddFormDriverE2ETypes } from "./AddFormDriverTypes";
import { addFocus, fillInput, enterPress } from "../../utils/testUtils/e2e";

export const addFormE2EDriver = (page: Page): AddFormDriverE2ETypes => ({
  addItem: async (name: string, amount: number) => {
    await addFocus(page, testIds.inputName);
    await fillInput(page, name);

    await addFocus(page, testIds.inputAmount);
    await fillInput(page, amount);
  },
  enterPress: async () => enterPress(page),
});
