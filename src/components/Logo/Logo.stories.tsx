import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Logo } from './Logo'

export default {
    title: 'common/Logo',
    component: Logo,
} as ComponentMeta<typeof Logo>

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Logo> = () => <Logo />

export const standard = Template.bind({})
