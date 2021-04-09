import type { CardBodyProps } from "../../../components";

export type CardBodyDriverSpecType = {
  given: {
    props: (T: CardBodyProps) => CardBodyDriverSpecType;
    children: (T: string | React.ReactElement) => CardBodyDriverSpecType;
  };
  when: {
    created: () => CardBodyDriverSpecType;
  };
  then: {
    children: () => React.ReactNode;
  };
};
