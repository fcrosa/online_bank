/**
 * Project: Online Bank Test Suite
 * Author: Fernando Crosa (crosafernando@gmail.com)
 * Date: 2025-06-24
 * Description: Automated test for the Online Bank project using Playwright.
 * Note: Feel free to reach out via email for any questions or clarifications.
 */
// Test case: Customer Withdrawal Tests

import { test, expect } from '@playwright/test';
const { customer_has_amount } = require('../utils/helpers');

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

test.describe('Customer Withdrawal Tests', () => {
  
  test.beforeEach(async ({ page, baseURL }) => {
    await customer_has_amount(page, baseURL);
  });

  test('Successful Withdrawal', async ({ page, baseURL }) => {

    // Navigate to the Withdraw section
    await page.click('text=Withdrawl');

    // Enter withdrawal amount
    await page.fill('input[ng-model="amount"]', '50');

    // Click Withdraw button
    await page.click('button[type="submit"]');

    // Verify success message
    await expect(page.getByText('Transaction successful')).toBeVisible;

    //await expect(page.locator('.alert-success')).toHaveText('Transaction successful');
  });

  test('Withdrawal Exceeding Balance', async ({ page, baseURL }) => {

    // Navigate to the Withdraw section
    await page.click('text=Withdrawl');

    // Enter withdrawal amount exceeding balance
    await page.fill('input[ng-model="amount"]', '10000');

    // Click Withdraw button
    await page.click('button[type="submit"]');

    // Verify error message
    await expect(page.getByText('Transaction failed. You can not withdraw amount more than the balance.')).toBeVisible;
  });

});
