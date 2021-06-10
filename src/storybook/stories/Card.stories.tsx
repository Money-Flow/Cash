import React from "react";
import { Story } from "@storybook/react/types-6-0";

import { Card as CardComponent, CardProps } from "../../components";
import "../../styles/index.css";

export default {
  title: "Card",
  component: CardComponent,
  parameters: {
    backgrounds: {
      default: "Gray",
    },
  },
};

const Template: Story<CardProps> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <CardComponent {...args}>
    <CardComponent.Subheader suffix="Suffix" title="Title" />
    <CardComponent.Header title="Header" />
    <CardComponent.Body>Body</CardComponent.Body>
  </CardComponent>
);

export const Card = Template.bind({});
