import React from "react";
import classnames from "classnames";

import { cardTestIds as testIds } from "../../tests/testIds";
import styles from "./Card.module.css";

export type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className }) => (
  <div
    className={classnames(styles.card, className)}
    data-testid={testIds.card}
  >
    <div data-testid={testIds.children}>{children}</div>
  </div>
);
