import { IAddFormPropsType } from "./AddFormTypes";

export type AddFormDriverE2ETypes = {
  addItem: (name: string, amount: number) => Promise<void>;
  enterPress: () => Promise<void>;
};

export type AddFormDriverSpecTypes = {
  given: {
    props: (props: IAddFormPropsType) => AddFormDriverSpecTypes;
    onSubmit: (onSubmit: () => void) => AddFormDriverSpecTypes;
    name: (name: string) => AddFormDriverSpecTypes;
    amount: (amount: number) => AddFormDriverSpecTypes;
  };
  when: {
    created: () => AddFormDriverSpecTypes;
    btnClick: () => AddFormDriverSpecTypes;
  };
  then: {
    isBtnDisabled: () => boolean | null;
  };
};
