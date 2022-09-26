import React from 'react'

import { ButtonVariant } from 'components/Button/constants'

import { createButtonDriver, DriverType } from './Button.driver'
import styles from './Button.module.css'

describe('Button', () => {
    let driver: DriverType

    beforeEach(() => {
        driver = createButtonDriver()
    })

    describe('default button behavior', () => {
        it('should display children', () => {
            const isExistChildren = driver.given
                .children(<span>children</span>)
                .when.created()
                .then.isExistChildren()
            expect(isExistChildren).toBeTruthy()
        })

        it('should display default button', () => {
            const isButtonExist = driver.when.created().then.isExistButton()
            expect(isButtonExist).toBeTruthy()
        })

        it('should be disabled', () => {
            const button = driver.given
                .disabled(true)
                .when.created()
                .then.getButton()
            expect(button).toHaveAttribute('disabled')
        })

        it('should be disabled when loading, ', () => {
            const loadingButton = driver.given
                .isLoading(true)
                .when.created()
                .then.getButton()
            expect(loadingButton).toHaveAttribute('disabled')
        })

        it('should show loading status when loading', () => {
            const loadingButton = driver.given
                .isLoading(true)
                .when.created()
                .then.isLoadding()
            expect(loadingButton).toBeTruthy()
        })

        it('should raise handler onClick func one time', () => {
            const onClick = jest.fn()
            driver.given.onClick(onClick).when.created().then.clickButton()
            expect(onClick).toHaveBeenCalledTimes(1)
        })
    })

    describe('layout button behavior', () => {
        it('primary', () => {
            const buttonPrimary = driver.given
                .variant(ButtonVariant.primary)
                .when.created()
                .then.getButton()
            expect(buttonPrimary).toHaveClass(styles.primary)
        })

        it('outline', () => {
            const buttonPrimary = driver.given
                .variant(ButtonVariant.outline)
                .when.created()
                .then.getButton()
            expect(buttonPrimary).toHaveClass(styles.outline)
        })

        it('with custom ccolor', () => {
            const buttonPrimary = driver.given
                .color('#000')
                .when.created()
                .then.getButton()
            expect(buttonPrimary).toHaveClass(styles.withCustomColor)
        })
    })
})
