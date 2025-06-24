/**
 * Project: Online Bank Test Suite
 * Author: Fernando Crosa (crosafernando@gmail.com)
 * Date: 2025-06-24
 * Description: Automated test for the Online Bank project using Playwright.
 * Note: Feel free to reach out via email for any questions or clarifications.
 */
// Test case: Customers List Tests

import { test, expect } from '@playwright/test';

test.describe('Customers List Tests', () => {

  test('Verify Customers List is Accessible', async ({ page, baseURL }) => {
    // Navigate to the application URL
    await page.goto(baseURL);

    // Log in as Bank Manager
    await page.click('text=Bank Manager Login');

    // Navigate to Customers section
    await page.click('text=Customers');

    // Verify that the Customers table is displayed
    await expect(page.locator('table')).toBeVisible();
  });

  test('Sort Customers by First Name', async ({ page, baseURL }) => {
    // Navigate to the application URL
    await page.goto(baseURL);

    // Log in as Bank Manager
    await page.click('text=Bank Manager Login');

    // Navigate to Customers section
    await page.click('text=Customers');

    // Check current order of first names
    let firstNames = await page.locator('table tbody tr td:nth-child(1)').allTextContents();
    const sortedFirstNamesAsc = [...firstNames].sort((a, b) => a.localeCompare(b));

    // If not in ascending order, click again to toggle
    if (JSON.stringify(firstNames) !== JSON.stringify(sortedFirstNamesAsc)) {
      await page.getByRole('link', { name: 'First Name' }).click();
      firstNames = await page.locator('table tbody tr td:nth-child(1)').allTextContents();
    }

    // Verify the customers are sorted by first name (asc)
    expect(firstNames).toEqual(sortedFirstNamesAsc);
  
  });

  test('Delete a Customer', async ({ page, baseURL}) => {
    // Navigate to the application URL
    await page.goto(baseURL);

    // Log in as Bank Manager
    await page.click('text=Bank Manager Login');

    // Navigate to Customers section
    await page.click('text=Customers');

    // Find and delete a customer (e.g., Neville Longbottom)
    const customerRow = page.locator('table tbody tr:has-text("Neville Longbottom")');
    await customerRow.locator('button:has-text("Delete")').click();

    // Verify that the customer is no longer in the list
    await expect(page.locator('table tbody tr:has-text("Neville Longbottom")')).toHaveCount(0);
  });

});
