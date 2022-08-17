import { test, expect } from '@playwright/test'

test('should be able to create a new account', async ({ page }) => {
    await page.goto(
        `${
            process.env.PLAYWRIGHT_TEST_BASE_URL ?? 'localhost:3000'
        }/create-account`
    )

    await page.locator('[data-hook=input-name]').fill('John')
    await page.locator('[data-hook=input-email]').fill('John484@gmail.com')
    await page.locator('[data-hook=input-password]').fill('John48412345')

    await page.locator('[data-hook=button-sign-up]').click()

    expect(page.locator('[data-hook=button-sign-up]')).toBeTruthy()
})
