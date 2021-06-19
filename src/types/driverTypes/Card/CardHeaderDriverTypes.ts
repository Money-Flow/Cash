import type { CardHeaderProps } from "components";

export type CardHeaderDriverSpecType = {
  given: {
    props: (T: CardHeaderProps) => CardHeaderDriverSpecType;
    title: (T: string) => CardHeaderDriverSpecType;
    titleClassName: (T: string) => CardHeaderDriverSpecType;
    children: (T: string | React.ReactElement) => CardHeaderDriverSpecType;
  };
  when: {
    created: () => CardHeaderDriverSpecType;
  };
  then: {
    title: () => string | null;
    titleClassName: () => string | null;
    children: () => React.ReactNode;
  };
};
