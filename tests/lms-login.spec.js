const { test, expect } = require('@playwright/test');

test.describe('IOBM LMS Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://lms.iobm.edu.pk/moodle/login/index.php');
  });

  test('Valid Login Test', async ({ page }) => {
    await page.fill('#username', '20221-32805');
    await page.fill('#password', '(1a.2345678)');
    await page.click('#loginbtn');

    await page.waitForURL('https://lms.iobm.edu.pk/moodle/');

    const mainPage = page.locator('#page');
    await expect(mainPage).toBeVisible({ timeout: 10000 });
  });

  test('Invalid Login Test', async ({ page }) => {
    await page.fill('#username', 'wrong_user');
    await page.fill('#password', 'wrong_pass');
    await page.click('#loginbtn');

    const errorMessage = page.locator('.alert.alert-danger');
    await expect(errorMessage).toBeVisible({ timeout: 10000 });
  });

  test('Empty Fields Validation Test', async ({ page }) => {
    await page.click('#loginbtn');

    const errorMessage = page.locator('.alert.alert-danger');
    await expect(errorMessage).toBeVisible({ timeout: 10000 });
  });

});
