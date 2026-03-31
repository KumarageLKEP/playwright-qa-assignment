import { Page, expect } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async addToCart(productName: string) {
  const formatted = productName.toLowerCase().replace(/ /g, '-');
  await this.page.click(`[data-test="add-to-cart-${formatted}"]`);
}

  async getCartBadge() {
    return this.page.locator('.shopping_cart_badge');
  }

  async sort(option: string) {
    await this.page.selectOption('.product_sort_container', option);
  }
}