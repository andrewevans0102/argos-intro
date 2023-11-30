import { test, expect } from '@playwright/test';
import { argosScreenshot } from '@argos-ci/playwright';

test('Add Contact', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    // take screenshot for argos
    await argosScreenshot(page, 'homepage');
    await page.getByRole('button', { name: 'New' }).click();
    await page.getByPlaceholder('First').click();
    await page.getByPlaceholder('First').fill('Hello');
    await page.getByPlaceholder('First').press('Tab');
    await page.getByPlaceholder('Last').fill('World');
    await page.getByPlaceholder('https://example.com/avatar.jpg').click();
    await page
        .getByPlaceholder('https://example.com/avatar.jpg')
        .fill('www.google.com');
    await page.getByLabel('Notes').click();
    await argosScreenshot(page, 'AddedContact');
    await page.getByRole('button', { name: 'Save' }).click();
});
