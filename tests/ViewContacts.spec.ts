import { test, expect } from '@playwright/test';
import { argosScreenshot } from '@argos-ci/playwright';

test('View Contacts', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByRole('link', { name: 'Chestnut Evans' }).click();
    await page.getByRole('heading', { name: 'Chestnut Evans Add to' }).click();
    await argosScreenshot(page, 'ChestnutScreenShot');
});
