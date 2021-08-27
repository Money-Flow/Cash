import { Page } from "puppeteer";

import { tableTestIds } from "./TableTestIds";
import { buttonE2EDriver as createButtonDriver } from "../Button";
import { totalTestIds } from "../Total";
import { TableDriverE2EType } from "./TableDriverTypes";
import { combineSelectors } from "../../utils/testUtils";
import { existElement } from "../../utils/testUtils/e2e";

export const tableE2EDriver = (page: Page): TableDriverE2EType => ({
  exist: () => existElement(page, tableTestIds.table),
  getItemByIndex: async (index: number) => {
    return page.evaluate(
      (
        elementIndex: number,
        lineSelector: string,
        nameSelector: string,
        amountSelector: string
      ) => {
        const row: HTMLElement | null = document.querySelector(lineSelector);
        if (!row) return null;
        const amount = Number(row.querySelector(amountSelector)?.textContent);
        const name = row.querySelector(nameSelector)?.textContent;
        return { name, amount };
      },
      index,
      combineSelectors(`${tableTestIds.row}-${index}`),
      combineSelectors(tableTestIds.name),
      combineSelectors(tableTestIds.amount)
    );
  },
  getTotal: async () =>
    page.$eval(combineSelectors(totalTestIds.total), (x) =>
      Number(x.innerHTML)
    ),
  pressDeleteBtnByIndex: async (index: number) => {
    const deleteDriver = createButtonDriver(
      page,
      `${tableTestIds.row}-${index}`
    );
    return deleteDriver.clickWithConfirm();
  },
});
