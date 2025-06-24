// helpers

import { test, expect } from '@playwright/test';

async function customer_has_amount(page, baseURL) {
  // Navigate to the application URL
  await page.goto(baseURL);

  // Log in as Customer
  await page.click('text=Customer Login');

  // Select customer from dropdown and login
  await page.selectOption('select[ng-model="custId"]', { label: 'Harry Potter' });
  await page.click('button[type="submit"]');

  // Navigate to the Deposit section
  await page.click('text=Deposit');

  // Enter deposit amount
  await page.fill('input[ng-model="amount"]', '1000');

  // Click Deposit button
  await page.click('button[type="submit"]');

  // Verify success message
  await expect(page.getByText('Deposit Successful')).toBeVisible;
}

module.exports = { customer_has_amount };
