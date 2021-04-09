import type { CardSubheaderProps } from "../../../components";

export type CardSubheaderDriverSpecType = {
  given: {
    props: (T: CardSubheaderProps) => CardSubheaderDriverSpecType;
    title: (T: string) => CardSubheaderDriverSpecType;
    titleClassName: (T: string) => CardSubheaderDriverSpecType;
    suffix: (T: string | React.ReactElement) => CardSubheaderDriverSpecType;
    suffixClassName: (T: string) => CardSubheaderDriverSpecType;
  };
  when: {
    created: () => CardSubheaderDriverSpecType;
  };
  then: {
    title: () => string | null;
    suffix: () => React.ReactNode;
    titleClassName: () => string | null;
    suffixClassName: () => string | null;
  };
};
