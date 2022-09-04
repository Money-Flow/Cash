import React, { FC } from 'react'

import classNames from 'classnames'

import logo from './assets/logo.svg'
import { DataHooks } from './constants'
import styles from './Logo.module.css'

type PropsType = {
    className?: string
}

export const Logo: FC<PropsType> = ({ className }) => (
    <div
        className={classNames(className, styles.wrapper)}
        data-testid={DataHooks.Logo}
    >
        <img src={logo} alt="io finance" />
    </div>
)
