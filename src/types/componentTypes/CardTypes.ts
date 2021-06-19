import { CardSubheaderProps } from "components/Card/CardSubheader/CardSubheader";
import { CardHeaderProps } from "components/Card/CardHeader/CardHeader";
import { CardBodyProps } from "components/Card/CardBody/CardBody";

export type CardSubcomponentsType = {
  Subheader: React.FC<CardSubheaderProps>;
  Header: React.FC<CardHeaderProps>;
  Body: React.FC<CardBodyProps>;
};
