# Playwright QA Automation Assignment

## 📌 Overview

This project is a Playwright + TypeScript automation framework developed to validate the functionality of the SauceDemo web application.

The framework follows the **Page Object Model (POM)** design pattern to ensure:

* Maintainability
* Reusability
* Scalability of test code

The test suite covers core user workflows such as authentication, product selection, cart operations, and checkout processes.

---

## ⚙️ Prerequisites

Ensure the following are installed:

* Node.js (v16 or higher)
* npm (comes with Node.js)
* Playwright browsers

To install Playwright browsers:

```bash
npx playwright install
```

---

## 🚀 Installation

1. Clone the repository:

```bash
git clone <your-repo-link>
cd playwright-qa-assignment
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

---

## ▶️ Test Execution

Run all tests:

```bash
npm test
```

Run tests in headed mode (UI visible):

```bash
npm run test:headed
```

Run tests in debug mode:

```bash
npm run test:debug
```

Run tests in a specific browser:

```bash
npx playwright test --project=Chromium
npx playwright test --project=Firefox
npx playwright test --project=WebKit
```

---

## 📊 Test Reports

Generate and open HTML report:

```bash
npm run report
```

To view trace:

```bash
npx playwright show-trace <trace-file-path>
```

---

## 📁 Project Structure

```
playwright-qa-assignment/
│
├── tests/        → Test specifications
├── pages/        → Page Object Model classes
├── fixtures/     → Custom reusable fixtures
├── test-data/    → External test data (JSON)
├── utils/        → Helper functions
│
├── playwright.config.ts → Playwright configuration
├── package.json         → Dependencies and scripts
├── tsconfig.json        → TypeScript configuration
├── README.md            → Documentation
```

---

## ✅ Test Coverage

The following areas are covered:

### Authentication

* Valid login
* Invalid login
* Locked user validation
* Empty field validation
* Logout functionality

### Product Catalog

* Product listing validation
* Sorting (A-Z, Z-A, Price Low-High, High-Low)
* Product details navigation
* Add to cart functionality
* Cart badge updates

### Shopping Cart

* Add multiple items
* Remove items
* Cart item validation
* Empty cart behavior

### Checkout Flow

* Complete end-to-end checkout
* Required field validation
* Order summary validation
* Order confirmation
* Checkout cancellation

### Cross-Browser Testing

* Chromium
* Firefox
* WebKit
* Mobile viewport (Pixel 5)

---

## ⚠️ Issues Found

During testing, the following observations were made:

* Sorting functionality may behave inconsistently under certain conditions
* UI responsiveness varies slightly across browsers and mobile view
* Some elements rely heavily on dynamic rendering, which may cause minor delays

---

## 🔮 Future Improvements

The following enhancements can be implemented:

* CI/CD integration using GitHub Actions
* API mocking and network interception
* Visual regression testing
* Accessibility testing (axe-core integration)
* Dockerized test execution
* Parallel execution optimization

---

## 👨‍💻 Author

Esala P. Kumarage

---
