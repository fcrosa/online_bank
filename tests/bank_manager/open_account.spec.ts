// Test case: Open Account Tests

import { test, expect } from '@playwright/test';

  async function create_customer(page, baseURL) {
    // Navigate to the application URL
    await page.goto(baseURL);
    // Click on the "Bank Manager Login" button
    await page.click('text=Bank Manager Login');
    // Click on "Add Customer"
    await page.click('text=Add Customer');
    // Fill out the form fields
    await page.fill('input[placeholder="First Name"]', 'Paul');
    await page.fill('input[placeholder="Last Name"]', 'Better');
    await page.fill('input[placeholder="Post Code"]', '12345');
    // Click on the "Add Customer" button
    await page.getByRole('form').getByRole('button', { name: 'Add Customer' }).click();
    await page.locator('text=Customer added successfully'); 
  }

test.describe('Open Account Tests', () => {

  test('Open Account with Valid Data', async ({ page, baseURL }) => {
    
    // Precondition
    await create_customer(page, baseURL)

    // Navigate to Open Account section
    await page.click('text=Open Account');

    await page.waitForTimeout(5000); // 5 seconds

    // Select a customer from the dropdown
    await page.selectOption('select[ng-model="custId"]', { label: 'Paul Better' });

    // Select a currency from the dropdown
    await page.waitForSelector('select[ng-model="currency"]');
    await page.selectOption('select[ng-model="currency"]', { label: 'Dollar' });

    // Click the "Process" button
    await page.getByRole('button', { name: 'Process' }).click();

    // Verify the success message in the dialog
    await expect(page.getByText('Account created successfully')).toBeVisible;

  });

  test('Open Account with Missing Customer', async ({ page, baseURL }) => {
    
    // Navigate to the application URL
    await page.goto(baseURL);
    // Click on the "Bank Manager Login" button
    await page.click('text=Bank Manager Login');

    // Navigate to Open Account section
    await page.click('text=Open Account');

    // Leave the customer field empty and select a currency
    await page.selectOption('select[ng-model="currency"]', { label: 'Pound' });

    // Click the "Process" button
    await page.getByRole('button', { name: 'Process' }).click();

    // Verify the error message in the dialog
    await expect(page.getByText('Please select a customer')).toBeVisible;

  });

  test('Open Account with Missing Currency', async ({ page, baseURL }) => {

    // Precondition
    await create_customer(page, baseURL)

    // Navigate to Open Account section
    await page.click('text=Open Account');

    // Select a customer but leave the currency field empty
    await page.selectOption('select[ng-model="custId"]', { label: 'Paul Better' });

    // Click the "Process" button
    await page.getByRole('button', { name: 'Process' }).click();

    // Verify the error message in the dialog
    await expect(page.getByText('Please select a customer')).toBeVisible;
  });

});
