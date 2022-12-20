const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const OverviewPage = require('../pageobjects/overview.page');

Given(/^In a login steps, I am on the login page$/, async () => {
  await LoginPage.open()
});

When(/^In a login steps, I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password)
});

Then(/^In a login steps, I should see my name (.*)$/, async (fullName) => {
  await expect(OverviewPage.welcomeText).toBeExisting();
  await expect(OverviewPage.welcomeText).toHaveTextContaining(fullName);
});