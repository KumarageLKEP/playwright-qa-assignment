import { test, expect } from '@playwright/test';
import users from '../test-data/users.json';
import { LoginPage } from '../pages/LoginPage';

test('Valid Login', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login(users.validUser.username, users.validUser.password);
  await expect(page).toHaveURL(/inventory/);
});

test('Invalid Login', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login(users.invalidUser.username, users.invalidUser.password);
  await expect(await login.getError()).toBeVisible();
});

test('Locked User', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login(users.lockedUser.username, users.lockedUser.password);
  await expect(await login.getError()).toBeVisible();
});