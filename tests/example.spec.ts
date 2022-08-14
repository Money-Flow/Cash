import { test, expect } from '@playwright/test'

test('should display title', async ({ page }) => {
    await page.goto(process.env.PLAYWRIGHT_TEST_BASE_URL || 'localhost:3000')

    expect(await page.locator('data-hook=title')).toBeTruthy()
})
