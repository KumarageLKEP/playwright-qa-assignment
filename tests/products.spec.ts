import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import users from '../test-data/users.json';

test('Add product to cart', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);

  await login.goto();
  await login.login(users.validUser.username, users.validUser.password);

  await products.addToCart('Sauce Labs Backpack');
  await expect(await products.getCartBadge()).toHaveText('1');
});