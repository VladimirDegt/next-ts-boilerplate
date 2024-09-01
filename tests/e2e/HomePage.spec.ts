import { expect, test } from '@playwright/test';

test.describe('Home page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'commit' });
    });

    test('WhenHomePageLoaded_AllComponentsAreVisible_AndURLIsCorrect', async ({ page }) => {
        expect(page.url()).toBe('http://127.0.0.1:3000/');
        await expect(page).toHaveTitle('Next.js');
        const title = page.getByRole('heading', { name: 'Hello, Next.js!' });
        await expect(title).toBeVisible();
    });
});
