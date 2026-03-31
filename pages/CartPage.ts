import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async removeItem() {
    await this.page.click('button:has-text("Remove")');
  }

  async checkout() {
    await this.page.click('[data-test="checkout"]');
  }
}