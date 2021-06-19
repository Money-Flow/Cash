/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import { Story } from "@storybook/react/types-6-0";

import {
  CardSubheaderProps,
  CardHeaderProps,
  CardBodyProps,
  CardProps,
} from "components/Card";
import { Card as CardComponent } from "components";

import "styles/index.css";

type CardComponentType = {
  subheaderProps?: CardSubheaderProps;
  headerProps?: CardHeaderProps;
  bodyProps: CardBodyProps;
};

export default {
  title: "Card",
  component: CardComponent,
  parameters: {
    backgrounds: {
      default: "Gray",
    },
  },
};

const commonTemplate: Story<CardComponentType> = ({
  subheaderProps,
  headerProps,
  bodyProps,
}) => (
  <CardComponent>
    <CardComponent.Subheader {...subheaderProps} />
    <CardComponent.Header {...headerProps} />
    <CardComponent.Body {...bodyProps} />
  </CardComponent>
);

const cardTemplate: Story<CardProps> = (cardProps) => (
  <CardComponent {...cardProps} />
);

const subheaderTemplate: Story<CardSubheaderProps> = (subheaderProps) => (
  <CardComponent>
    <CardComponent.Subheader {...subheaderProps} />
  </CardComponent>
);

const headerTemplate: Story<CardHeaderProps> = (headerProps) => (
  <CardComponent>
    <CardComponent.Header {...headerProps} />
  </CardComponent>
);

const bodyTemplate: Story<CardBodyProps> = (bodyProps) => (
  <CardComponent>
    <CardComponent.Body {...bodyProps} />
  </CardComponent>
);

export const Common = commonTemplate.bind({});
export const Card = cardTemplate.bind({});
export const Subheader = subheaderTemplate.bind({});
export const Header = headerTemplate.bind({});
export const Body = bodyTemplate.bind({});

Common.args = {
  subheaderProps: {
    title: "Subheader",
    titleClassName: "title-class-name",
    suffix: "Suffix",
    suffixClassName: "suffix-class-name",
  },
  headerProps: {
    title: "Header",
    titleClassName: "header-class-name",
    children: "Header children",
  },
  bodyProps: {
    children: "Body children",
  },
};

Card.args = {
  children: "Card children",
  className: "card-class-name",
};

Subheader.args = {
  title: "Subheader",
  titleClassName: "title-class-name",
  suffix: "Suffix",
  suffixClassName: "suffix-class-name",
};

Header.args = {
  title: "Header",
  titleClassName: "header-class-name",
  children: "Header children",
};

Body.args = {
  children: "Body children",
};
