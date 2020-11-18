import { EvaluateFnReturnType, WrapElementHandle } from "puppeteer";

export type TableDriverE2ETypes = {
  exist: () => Promise<boolean>;
  pressDeleteBtnByIndex: (index: number) => Promise<void>;
  getItemByIndex: (
    index: number
  ) => Promise<
    EvaluateFnReturnType<
      (
        elementIndex: number,
        lineSelector: string,
        nameSelector: string,
        amountSelector: string
      ) => null | { amount: number; name: string | null | undefined }
    > extends PromiseLike<infer U>
      ? U
      : EvaluateFnReturnType<
          (
            elementIndex: number,
            lineSelector: string,
            nameSelector: string,
            amountSelector: string
          ) => null | { amount: number; name: string | null | undefined }
        >
  >;
  getTotal: () => Promise<WrapElementHandle<number>>;
};
