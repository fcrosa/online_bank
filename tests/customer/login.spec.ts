/**
 * Project: Online Bank Test Suite
 * Author: Fernando Crosa (crosafernando@gmail.com)
 * Date: 2025-06-24
 * Description: Automated test for the Online Bank project using Playwright.
 * Note: Feel free to reach out via email for any questions or clarifications.
 */

// Test case: Customer Login Tests

import { test, expect } from '@playwright/test';

test.describe('Customer Login Tests', () => {

  test('Successful Login', async ({ page, baseURL }) => {
    // Navigate to the application URL
    await page.goto(baseURL);

    // Log in as Customer
    await page.click('text=Customer Login');

    // Select customer from dropdown
    await page.selectOption('select[ng-model="custId"]', { label: 'Harry Potter' });

    // Click Login button
    await page.click('button[type="submit"]');

    // Verify successful login
    await expect(page).toHaveURL(/account/);
    await expect(page.locator('text=Welcome Harry Potter')).toBeVisible();

    // Log out
    await page.click('text=Logout');
  });

  test('Unsuccessful Login with No Selection', async ({ page, baseURL }) => {
    // Navigate to the application URL
    await page.goto(baseURL);

    // Attempt to log in without selecting a customer
    await page.click('text=Customer Login');
    
    // Verify that login button is not present
    await expect(page.locator('button[type="submit"]')).toBeHidden;
  });

});
