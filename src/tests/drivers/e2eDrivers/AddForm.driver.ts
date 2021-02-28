import { Page } from "puppeteer";

import { addFormTestIds as testIds } from "../../testIds";
import { AddFormDriverE2ETypes } from "../../../types";
import { addFocus, fillInput, enterPress } from "../../../utils/testUtils/e2e";

export const addFormDriver = (page: Page): AddFormDriverE2ETypes => ({
  addItem: async (name: string, amount: number) => {
    await addFocus(page, testIds.inputName);
    await fillInput(page, name);

    await addFocus(page, testIds.inputAmount);
    await fillInput(page, amount);
  },
  enterPress: async () => enterPress(page),
});
