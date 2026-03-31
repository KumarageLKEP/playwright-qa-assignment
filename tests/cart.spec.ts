import { test } from '@playwright/test';

test('Cart basic test', async ({ page }) => {
  await page.goto('/');
});