import React, { FC, ReactNode } from 'react'

import className from 'classnames'

import { DataHooks } from 'features/Auth/constants'

import styles from './Wrapper.module.css'

export type PropsType = {
    image?: string
    altImage?: string
    children: ReactNode
}

export const Wrapper: FC<PropsType> = ({ image, altImage, children }) => (
    <section className={styles.wrapper} data-testid={DataHooks.Wrapper}>
        <div
            className={className(styles.container, {
                [styles.withoutImage]: !image,
            })}
        >
            <div
                className={styles.childrenWrapper}
                data-testid={DataHooks.Children}
            >
                {children}
            </div>
        </div>
        {image && (
            <div className={styles.imageWrapper} data-testid={DataHooks.Image}>
                <img src={image} className={styles.image} alt={altImage} />
            </div>
        )}
    </section>
)
