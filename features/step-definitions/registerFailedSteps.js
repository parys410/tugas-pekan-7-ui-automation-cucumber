const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const RegisterPage = require('../pageobjects/register.page');

Given(/^In a register failed steps, I am on the login page$/, async () => {
  await LoginPage.open()
});

When(/^In a register failed steps, I click the register link$/, async () => {
  await LoginPage.openRegisterPage();
});

When(/^In a register failed steps, I register with (\w+), (\w+), (.+), (\w+), (\w+), (\w+), (\w+), (\w+), (\w+), and (.+)$/, async (firstName, lastName, address, city, state, zipcode, phone, ssn, username, password) => {
  await RegisterPage.register(firstName, lastName, address, city, state, zipcode, phone, ssn, username, password);
});

Then(/^In a register failed steps, I should see the error$/, async () => {
  await expect(RegisterPage.usernameError).toBeExisting();
  await expect(RegisterPage.usernameError).toHaveTextContaining("This username already exists");
  await expect(RegisterPage.inputPassword).toHaveValueContaining("");
  await expect(RegisterPage.inputRepeatedPassword).toHaveValueContaining("");
});