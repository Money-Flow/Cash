import React, { ChangeEvent, FC } from 'react'

import classNames from 'classnames'

type PropsType = {
    onClick: () => void
    classnames?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<PropsType> = ({ classnames, onClick, onChange }) => (
    <input
        className={classNames(classnames)}
        onClick={onClick}
        onChange={onChange}
    />
)
