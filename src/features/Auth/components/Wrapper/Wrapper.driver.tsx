import React from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react'

import { DataHooks as LogoDataHooks } from 'components/Logo'
import { DataHooks } from 'features/Auth/constants'

import { Wrapper, PropsType } from './Wrapper.component'

export type DriverType = {
    given: {
        image: (image?: string) => DriverType
        children: (children: React.ReactElement) => DriverType
    }
    when: {
        created: () => DriverType
    }
    then: {
        isExistImage: () => boolean
        getImage: () => HTMLElement
        isExistChildren: () => boolean
        isExistLogo: () => boolean
    }
}

export const createLayoutDriver = (): DriverType => {
    let props: PropsType

    const driver: DriverType = {
        given: {
            image: (image?: string) => {
                props = { ...props, image }
                return driver
            },
            children: (children: React.ReactElement) => {
                props = { ...props, children }
                return driver
            },
        },
        when: {
            created: () => {
                // eslint-disable-next-line react/jsx-props-no-spreading
                render(<Wrapper {...props} />)

                return driver
            },
        },
        then: {
            getImage: () => screen.getByTestId(DataHooks.Image),
            isExistImage: () => !!screen.queryByAltText('Layout'),
            isExistChildren: () =>
                !!screen.queryByText('children') &&
                !!screen.queryByText('button'),
            isExistLogo: () => !!screen.getByTestId(LogoDataHooks.Logo),
        },
    }

    return driver
}
