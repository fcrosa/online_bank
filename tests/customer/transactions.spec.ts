/**
 * Project: Online Bank Test Suite
 * Author: Fernando Crosa (crosafernando@gmail.com)
 * Date: 2025-06-24
 * Description: Automated test for the Online Bank project using Playwright.
 * Note: Feel free to reach out via email for any questions or clarifications.
 */
// Test case: Customer Transactions Tests

import { test, expect } from '@playwright/test';

test.describe('Customer Transactions Tests', () => {

  test('View Transactions', async ({ page, baseURL }) => {
   
  // Navigate to the application URL
  await page.goto(baseURL);

  // Log in as a Customer and perform initial setup
  await page.click('text=Customer Login');
  await page.selectOption('select[ng-model="custId"]', { label: 'Harry Potter' });
  await page.click('button[type="submit"]');
  await page.click('text=Deposit');

  // Perform first deposit
  await page.fill('input[ng-model="amount"]', '1000');
  await page.click('button[type="submit"]');
  await page.waitForTimeout(2000); // 2 seconds
  await expect(page.getByText('Deposit Successful')).toBeVisible();

  // Perform second deposit
  await page.fill('input[ng-model="amount"]', '2000');
  await page.click('button[type="submit"]');
  await page.waitForTimeout(2000); // 2 seconds
  await expect(page.getByText('Deposit Successful')).toBeVisible();

  // Perform custom wait to persisted data
  await page.waitForTimeout(8000); // 5 seconds

  // Navigate to the Transactions section
  await page.click('text=Transactions');

  // Wait for transactions to appear in the table
  const transactionRows = page.locator('table tbody tr');
  await expect(transactionRows).toHaveCount(2); // Assuming two transactions

  // Verify transactions details (optional)
  const amounts = await page.locator('table tbody tr td:nth-child(2)').allTextContents();
  expect(amounts).toContain('1000');
  expect(amounts).toContain('2000');
  });

  test('Clear Transactions', async ({ page, baseURL }) => {

    // Navigate to the application URL
    await page.goto(baseURL);

    // Log in as a Customer and perform initial setup
    await page.click('text=Customer Login');
    await page.selectOption('select[ng-model="custId"]', { label: 'Harry Potter' });
    await page.click('button[type="submit"]');
    await page.click('text=Deposit');

    // Perform first deposit
    await page.fill('input[ng-model="amount"]', '1000');
    await page.click('button[type="submit"]');
    await expect(page.getByText('Deposit Successful')).toBeVisible();
    
    // Navigate to the Transactions section
    await page.click('text=Transactions');

    // Click on the Clear Transactions button
    await page.click('button:has-text("Reset")');

    // Verify that the transactions table is empty
    const rows = await page.locator('table tr').count();
    expect(rows).toBe(1); // Assuming the first row is headers
  });

});