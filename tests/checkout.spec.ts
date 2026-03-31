import { test } from '@playwright/test';

test('Checkout flow', async ({ page }) => {
  await page.goto('/');
});