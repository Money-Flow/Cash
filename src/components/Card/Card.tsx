import React from "react";
import classnames from "classnames";

import { CardSubheader } from "./CardSubheader/CardSubheader";
import { cardTestIds as testIds } from "../../tests/testIds";
import { CardSubcomponentsType } from "../../types";
import styles from "./Card.module.css";

export type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> & CardSubcomponentsType = ({
  children,
  className,
}) => (
  <div
    className={classnames(styles.card, className)}
    data-testid={testIds.card}
  >
    <div data-testid={testIds.children}>{children}</div>
  </div>
);

Card.Subheader = CardSubheader;
