import React, { ReactNode } from "react";
import classnames from "classnames";

import { cardSubheaderTestIds as testIds } from "../../../tests/testIds";
import styles from "./CardSubheader.module.css";

export type CardSubheaderProps = {
  title?: string;
  titleClassName?: string;
  suffix?: ReactNode;
  suffixClassName?: string;
};

export const CardSubheader: React.FC<CardSubheaderProps> = ({
  title,
  titleClassName,
  suffix,
  suffixClassName,
}) => (
  <div className={styles.wrapper}>
    <div
      className={classnames(styles.title, titleClassName)}
      data-testid={testIds.title}
    >
      {title}
    </div>
    <div
      className={classnames(styles.suffix, suffixClassName)}
      data-testid={testIds.suffix}
    >
      {suffix}
    </div>
  </div>
);
