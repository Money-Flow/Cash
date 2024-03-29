import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Wrapper, PropsType } from 'features/Auth/components'
import image from 'pages/assets/login.jpeg'

export default {
    title: 'Auth/Wrapper',
    component: Wrapper,
} as ComponentMeta<typeof Wrapper>

const Template: ComponentStory<typeof Wrapper> = (args: PropsType) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Wrapper {...args} />
)

export const WithImage = Template.bind({})

WithImage.args = {
    image,
    children: <p style={{ textAlign: 'start', width: '100%' }}>Wrapper</p>,
}

export const WithoutImage = Template.bind({})

WithoutImage.args = {
    children: <p style={{ textAlign: 'center', width: '100%' }}>Wrapper</p>,
}
