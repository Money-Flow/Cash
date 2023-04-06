import React, { ReactElement } from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import { fireEvent, render, screen } from '@testing-library/react'
import {
    DataHooks as ButtonDataHooks,
    ButtonSize,
    ButtonVariant,
    ButtonHtmlType,
} from 'components/Button/constants'

import { Button, PropsType } from './Button.component'

export type DriverType = {
    given: {
        children: (children: ReactElement) => DriverType
        className: (className?: string) => DriverType
        color: (color?: string) => DriverType
        disabled: (disabled: boolean) => DriverType
        htmlType: (htmlType?: ButtonHtmlType) => DriverType
        isLoading: (isLoading: boolean) => DriverType
        onClick: (onClick: () => null) => DriverType
        size: (size: ButtonSize) => DriverType
        variant: (variant: ButtonVariant) => DriverType
    }

    then: {
        clickButton: () => void
        getButton: () => HTMLElement
        isExistButton: () => boolean
        isExistChildren: () => boolean
        isLoadding: () => boolean
    }

    when: {
        created: () => DriverType
    }
}

export const createButtonDriver = (): DriverType => {
    let props: PropsType

    const driver: DriverType = {
        given: {
            children: (children: ReactElement) => {
                props = { ...props, children }
                return driver
            },
            color: (color?: string) => {
                props = { ...props, color }
                return driver
            },
            disabled: (disabled: boolean) => {
                props = { ...props, disabled }
                return driver
            },
            isLoading: (isLoading: boolean) => {
                props = { ...props, isLoading }
                return driver
            },
            onClick: (onClick: () => null) => {
                props = { ...props, onClick }
                return driver
            },
            size: (size: ButtonSize) => {
                props = { ...props, size }
                return driver
            },
            className: (className?: string) => {
                props = { ...props, className }
                return driver
            },
            variant: (variant: ButtonVariant) => {
                props = { ...props, variant }
                return driver
            },
            htmlType: (htmlType?: ButtonHtmlType) => {
                props = { ...props, htmlType }
                return driver
            },
        },
        when: {
            created: () => {
                // eslint-disable-next-line react/jsx-props-no-spreading
                render(<Button {...props} />)

                return driver
            },
        },
        then: {
            isExistButton: () => !!screen.getByTestId(ButtonDataHooks.Button),
            isLoadding: () => !!screen.queryByText('Loading...'),
            isExistChildren: () => !!screen.queryByText('children'),
            getButton: () => screen.getByTestId(ButtonDataHooks.Button),
            clickButton: () =>
                fireEvent.click(screen.getByTestId(ButtonDataHooks.Button)),
        },
    }
    return driver
}
