import { CardSubheaderProps } from "../../components/Card/CardSubheader/CardSubheader";
import { CardHeaderProps } from "../../components/Card/CardHeader/CardHeader";

export type CardSubcomponentsType = {
  Subheader: React.FC<CardSubheaderProps>;
  Header: React.FC<CardHeaderProps>;
};
