import type { CardProps } from "components";

export type CardDriverSpecType = {
  given: {
    props: (T: CardProps) => CardDriverSpecType;
    children: (T: string | React.ReactNode) => CardDriverSpecType;
    className: (T: string) => CardDriverSpecType;
  };
  when: {
    created: () => CardDriverSpecType;
  };
  then: {
    children: () => React.ReactNode;
    className: () => string | null;
  };
};
