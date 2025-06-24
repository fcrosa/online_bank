// Test case: Customer Deposits Tests

import { test, expect } from '@playwright/test';

test.describe('Customer Deposits Tests', () => {

  test('Successful Deposit', async ({ page, baseURL }) => {
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
  });

  test('Deposit with Invalid Amount', async ({ page, baseURL }) => {
    // Navigate to the application URL
    await page.goto(baseURL);

    // Log in as Customer
    await page.click('text=Customer Login');

    // Select customer from dropdown and login
    await page.selectOption('select[ng-model="custId"]', { label: 'Harry Potter' });
    await page.click('button[type="submit"]');

    // Navigate to the Deposit section
    await page.click('text=Deposit');

    // Enter invalid deposit amount
    await page.fill('input[ng-model="amount"]', '-500');

    // Click Deposit button
    await page.click('button[type="submit"]');

    // Verify error message
    await expect(page.getByText('Invalid Deposit Amount')).toBeVisible;

  });

});