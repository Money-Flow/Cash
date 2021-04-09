import React from "react";

import { cardBodyTestIds as testIds } from "../../../tests/testIds";
import styles from "./CardBody.module.css";

export type CardBodyProps = {
  children: React.ReactNode;
};

export const CardBody: React.FC<CardBodyProps> = ({ children }) => (
  <div className={styles.wrapper} data-testid={testIds.children}>
    {children}
  </div>
);
