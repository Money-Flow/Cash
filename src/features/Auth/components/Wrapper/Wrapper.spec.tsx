import React from 'react'

import { createLayoutDriver, DriverType } from './Wrapper.driver'

describe('<Layout/>', () => {
    let driver: DriverType

    beforeEach(() => {
        driver = createLayoutDriver()
    })

    describe('by default', () => {
        it('should be display children', () => {
            const isExistChildren = driver.given
                .children(
                    <p>
                        children <span>button</span>
                    </p>
                )
                .when.created()
                .then.isExistChildren()
            expect(isExistChildren).toBeTruthy()
        })

        it('should display logo', () => {
            const isExistLogo = driver.when.created().then.isExistLogo()
            expect(isExistLogo).toBeTruthy()
        })
    })

    describe('with image', () => {
        it('should display image correctly', () => {
            const image = driver.given
                .image(
                    'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'
                )
                .when.created()
                .then.getImage()
            expect(image).toBeTruthy()
        })

        it('should display correctly page without image', () => {
            const isExistImage = driver.when.created().then.isExistImage()
            expect(isExistImage).toBeFalsy()
        })
    })
})
