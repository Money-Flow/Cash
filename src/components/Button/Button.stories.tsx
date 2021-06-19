import React from "react";

import { Story } from "@storybook/react/types-6-0";

import { Button } from "components";
import { IButtonProps } from "types";

import "styles/index.css";

export default {
  title: "Button",
  component: Button,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  text: "Button",
  withConfirm: true,
  onClick: () => {},
};
