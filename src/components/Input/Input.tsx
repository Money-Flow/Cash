import React, { ChangeEvent, FC } from 'react'

export type PropsType = {
    onChange: (value: ChangeEvent<HTMLInputElement>) => void
    onClick?: () => void
    placeholder?: string
    value?: string
}

export const Input: FC<PropsType> = ({
    onChange,
    onClick,
    placeholder,
    value,
}) => (
    <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onClick={onClick}
    />
)
