import React, { FC, ReactNode } from 'react'

import classNames from 'classnames'

import styles from './Button.module.css'
// constants
import {
    ButtonVariant,
    ButtonSize,
    ButtonHtmlType,
    DataHooks,
} from './constants'

export type PropsType = {
    children: ReactNode
    disabled: boolean
    isLoading: boolean
    onClick: () => void
    size: ButtonSize
    variant: ButtonVariant
    className?: string
    // Wait for theme palette
    color?: string
    htmlType?: ButtonHtmlType
}

export const Button: FC<PropsType> = ({
    color,
    disabled,
    onClick,
    variant,
    size,
    className,
    children,
    htmlType,
    isLoading,
}) => {
    const buttonStyles = classNames(
        {
            [styles.default]: true,
            [styles.primary]: variant === ButtonVariant.primary,
            [styles.outline]: variant === ButtonVariant.outline,
            [styles.small]: size === ButtonSize.small,
            [styles.withCustomColor]: !!color,
        },
        className
    )

    return (
        <button
            className={buttonStyles}
            onClick={onClick}
            disabled={disabled || isLoading}
            // eslint-disable-next-line react/button-has-type
            type={htmlType}
            style={{
                backgroundColor: color,
            }}
            data-testid={DataHooks.Button}
        >
            {!isLoading ? children : <span>Loading...</span>}
        </button>
    )
}
