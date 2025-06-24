# Online Bank Test Suite

## Overview

This repository contains an automated test suite developed using Playwright. The tests are designed to verify the functionality of the [Online Bank](https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login) application. The project is authored by **Fernando Crosa** (<crosafernando@gmail.com>).

The test suite covers various scenarios, including login functionality, customer and bank manager operations, transactions, and more. It aims to ensure the reliability and correctness of the Online Bank system.

## Repository

The repository is hosted on GitHub: [Online Bank Test Suite](https://github.com/fcrosa/online_bank)

## Prerequisites

Before running the tests, ensure the following are installed on your system:

- Node.js (v14 or higher)
- NPM or Yarn
- Playwright (tested with the latest version)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/fcrosa/online_bank.git
   cd online_bank

# Online Bank Test Suite

## Overview

This repository contains an automated test suite developed using Playwright. The tests are designed to verify the functionality of the [Online Bank](https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login) application. The project is authored by **Fernando Crosa** (<crosafernando@gmail.com>).

The test suite covers various scenarios, including login functionality, customer and bank manager operations, transactions, and more. It aims to ensure the reliability and correctness of the Online Bank system.

## Repository

The repository is hosted on GitHub: [Online Bank Test Suite](https://github.com/fcrosa/online_bank)

## Prerequisites

Before running the tests, ensure the following are installed on your system:

- Node.js (v14 or higher)
- NPM or Yarn
- Playwright (tested with the latest version)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/fcrosa/online_bank.git
   cd online_bank```

2. Install dependencies:

   ```bash
   npm install```

3. Install Playwright browsers::

   ```bash
   npx playwright install```

## Running Tests

### Run All Tests

To execute the entire test suite:

   ```bash
   npx playwright test
   ```


### Run a Specific Test
To run a single test, use the file path:

   ```bash 
   npx playwright test tests/customer/withdrawal.spec.ts
```
### Debugging Tests
To run tests in debug mode:

   ```bash 
   npx playwright test --debug
   ```  

### Configuration

The playwright.config.ts file defines base configurations such as the baseURL, browser settings, and test directory. Update the baseURL in this file if testing against a different instance of the application.

### Helper Functions
Reusable utility functions, such as customer_has_amount, are located in the helpers directory. These helpers simplify test setup and reduce redundancy.

## Contributions
Feel free to fork the repository and submit pull requests to improve the test suite.

For further questions or feedback, contact Fernando Crosa at crosafernando@gmail.com.

@ Happy testing !