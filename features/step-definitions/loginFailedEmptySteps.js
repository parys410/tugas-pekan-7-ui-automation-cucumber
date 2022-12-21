const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');

Given(/^In a login failed empty steps, I am on the login page$/, async () => {
  await LoginPage.open();
});

When(/^In a login failed empty steps, I login with empty username and password$/, async () => {
  await LoginPage.login("", "");
});

Then(/^In a login failed empty steps, I should see error message$/, async () => {
  await expect(LoginPage.title).toHaveTextContaining("Error");
  await expect(LoginPage.error).toHaveTextContaining("Please enter a username and password");
});