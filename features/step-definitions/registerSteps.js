const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const RegisterPage = require('../pageobjects/register.page');

Given(/^In a register steps, I am on the login page$/, async () => {
  await LoginPage.open()
});

When(/^In a register steps, I click the register link$/, async () => {
  await LoginPage.openRegisterPage();
});

When(/^In a register steps, I register with (\w+), (\w+), (.+), (\w+), (\w+), (\w+), (\w+), (\w+), (\w+), and (.+)$/, async (firstName, lastName, address, city, state, zipcode, phone, ssn, username, password) => {
  await RegisterPage.register(firstName, lastName, address, city, state, zipcode, phone, ssn, username, password);
});

Then(/^In a register steps, I should see my name (.*)$/, async (fullName) => {
  await expect(RegisterPage.welcomeText).toBeExisting();
  await expect(RegisterPage.welcomeText).toHaveTextContaining(fullName);
});