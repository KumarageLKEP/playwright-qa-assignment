import { test } from '@playwright/test';

test('Cross browser basic flow', async ({ page }) => {
  await page.goto('/');
});