const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');

Given(/^In a login failed wrong pass steps, I am on the login page$/, async () => {
  await LoginPage.open();
});

When(/^In a login failed wrong pass steps, I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^In a login failed wrong pass steps, I should see error message$/, async () => {
  await expect(LoginPage.title).toHaveTextContaining("Error");
  await expect(LoginPage.error).toHaveTextContaining("The username and password could not be verified");
});