import React from "react";
import classnames from "classnames";

import { cardHeaderTestIds as testIds } from "tests/testIds";

import styles from "components/Card/CardHeader/CardHeader.module.css";

export type CardHeaderProps = {
  title?: string;
  titleClassName?: string;
  children?: React.ReactNode;
};

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  titleClassName,
  children,
}) => (
  <div className={styles.cardHeader}>
    <h2
      className={classnames(styles.cardHeaderTitle, titleClassName)}
      data-testid={testIds.title}
    >
      {title}
    </h2>

    <div data-testid={testIds.children}>{children}</div>
  </div>
);
