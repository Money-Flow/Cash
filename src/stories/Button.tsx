import React, { FC } from 'react'
import './button.css'

interface ButtonProps {
    /**
     * Button contents
     */
    label: string
    /**
     * What background color to use
     */
    backgroundColor?: string
    /**
     * Optional click handler
     */
    onClick?: () => void
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large'
}

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    onClick,
}: ButtonProps) => {
    const mode = primary
        ? 'storybook-button--primary'
        : 'storybook-button--secondary'
    return (
        <button
            type="button"
            className={[
                'storybook-button',
                `storybook-button--${size}`,
                mode,
            ].join(' ')}
            style={{ backgroundColor }}
            onClick={onClick}
        >
            {label}
        </button>
    )
}
