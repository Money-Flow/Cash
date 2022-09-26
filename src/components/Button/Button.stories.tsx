import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, PropsType } from './Button.component'
import { ButtonSize, ButtonVariant } from './constants'

export default {
    children: <span>Title</span>,
    disabled: false,
    isLoading: false,
    onClick: () => null,
    size: ButtonSize.medium,
    variant: ButtonVariant.primary,
    color: '',
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: PropsType) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Button {...args} />
)

export const SmallButton = Template.bind({})

SmallButton.args = {
    size: ButtonSize.small,
    variant: ButtonVariant.primary,
    disabled: false,
    isLoading: false,
    onClick: () => null,
    children: <span>Title</span>,
}

export const MediumButton = Template.bind({})

MediumButton.args = {
    size: ButtonSize.medium,
    variant: ButtonVariant.primary,
    disabled: false,
    isLoading: false,
    onClick: () => null,
    children: <span>Title</span>,
}

export const OutlineButton = Template.bind({})

OutlineButton.args = {
    size: ButtonSize.medium,
    variant: ButtonVariant.outline,
    disabled: false,
    isLoading: false,
    onClick: () => null,
    children: <span>Title</span>,
}

export const CustomColot = Template.bind({})

CustomColot.args = {
    size: ButtonSize.medium,
    variant: ButtonVariant.primary,
    disabled: false,
    isLoading: false,
    onClick: () => null,
    children: <span>Title</span>,
    color: '#6DD230',
}
