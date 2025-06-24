/**
 * Project: Online Bank Test Suite
 * Author: Fernando Crosa (crosafernando@gmail.com)
 * Date: 2025-06-24
 * Description: Automated test for the Online Bank project using Playwright.
 * Note: Feel free to reach out via email for any questions or clarifications.
 */
// Test case: Add Customer with valid data

import { test, expect } from '@playwright/test';
import * as Helpers from '../utils/helpers'

test('Add customer with valid data',  { tag: ['@regression','@smoke','@manager']}, async ({ page, baseURL }) => {
  // Navigate to the application URL
  await page.goto(baseURL);

  // Click on the "Bank Manager Login" button
  await page.click('text=Bank Manager Login');

  // Verify that the user is on the manager dashboard
  await expect(page).toHaveURL(baseURL+'manager');

  // Click on "Add Customer"
  await page.click('text=Add Customer');

  // Fill out the form fields
  await page.fill('input[placeholder="First Name"]', 'John');
  await page.fill('input[placeholder="Last Name"]', 'Smith');
  await page.fill('input[placeholder="Post Code"]', '12345');

  // Click on the "Add Customer" button
  await page.getByRole('form').getByRole('button', { name: 'Add Customer' }).click();

  await page.locator('text=Customer added successfully'); 

  // Verify that the form is cleared after adding the customer (optional)
  await expect(page.locator('input[placeholder="First Name"]')).toHaveValue('');
  await expect(page.locator('input[placeholder="Last Name"]')).toHaveValue('');
  await expect(page.locator('input[placeholder="Post Code"]')).toHaveValue('');
  
  //Navigate to Customers section
  await page.click('text=Customers');
 
  await expect(page.getByRole('cell', { name: 'John' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Smith' })).toBeVisible();
  await page.waitForTimeout(5000); // 5 seconds


});
