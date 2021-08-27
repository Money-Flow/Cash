import { TotalPropsType } from "./TotalTypes";

export type TotalDriverSpecTypes = {
  given: {
    props: (props: TotalPropsType) => TotalDriverSpecTypes;
    amountList: (amountList: number[]) => TotalDriverSpecTypes;
  };
  when: {
    created: () => TotalDriverSpecTypes;
  };
  then: {
    getTotal: () => number | null;
  };
};
