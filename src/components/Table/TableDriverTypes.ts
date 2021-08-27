export type TableDriverE2EType = {
  exist: () => Promise<boolean>;
  pressDeleteBtnByIndex: (index: number) => Promise<void>;
  getItemByIndex: (
    index: number
  ) => Promise<{ name: string | null | undefined; amount: number } | null>;
  getTotal: () => Promise<number>;
};
