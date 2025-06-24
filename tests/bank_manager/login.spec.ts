/**
 * Project: Online Bank Test Suite
 * Author: Fernando Crosa (crosafernando@gmail.com)
 * Date: 2025-06-24
 * Description: Automated test for the Online Bank project using Playwright.
 * Note: Feel free to reach out via email for any questions or clarifications.
 */
// Test case: Bank Manager Login Tests


import { test, expect } from '@playwright/test';

test.describe('Bank Manager Login Tests', () => {

  test('Login as Bank Manager', async ({ page, baseURL }) => {
    // Navigate to the application URL
    await page.goto(baseURL);

    // Click on the "Bank Manager Login" button
    await page.click('text=Bank Manager Login');

    // Verify that the user is on the manager dashboard
    await expect(page).toHaveURL(baseURL+'manager');
  });

  test('Access Add Customer Section', async ({ page, baseURL }) => {
    // Navigate to the application URL and log in
    await page.goto(baseURL);
    await page.click('text=Bank Manager Login');

    // Click on "Add Customer"
    await page.click('text=Add Customer');

    // Verify that the Add Customer form is visible
    await expect(page.locator('input[placeholder="First Name"]')).toBeVisible();
    await expect(page.locator('input[placeholder="Last Name"]')).toBeVisible();
    await expect(page.locator('input[placeholder="Post Code"]')).toBeVisible();
  });

  test('Access Open Account Section', async ({ page, baseURL }) => {
    // Navigate to the application URL and log in
    await page.goto(baseURL);
    await page.click('text=Bank Manager Login');

    // Click on "Open Account"
    await page.click('text=Open Account');

    // Verify that the Open Account form is visible
    await expect(page.locator('select[ng-model="custId"]')).toBeVisible();
    await expect(page.locator('select[ng-model="currency"]')).toBeVisible();
  });

  test('Access Customers Section', async ({ page, baseURL }) => {
    // Navigate to the application URL and log in
    await page.goto(baseURL);
    await page.click('text=Bank Manager Login');

    // Click on "Customers"
    await page.click('text=Customers');

    // Verify that the Customers table is visible
    await expect(page.locator('table')).toBeVisible();
  });

});
