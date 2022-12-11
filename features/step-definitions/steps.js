const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const OverviewPage = require('../pageobjects/overview.page');
const RegisterPage = require('../pageobjects/register.page');

const pages = {
  login: LoginPage,
  register: RegisterPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password)
});

When(/^I click the register link$/, async () => {
  await LoginPage.openRegisterPage();
});

When(/^I am on the (\w+.htm) page$/, async (page) => {
  await expect(RegisterPage.url).toHaveTextContaining(`${page}`);
});

When(/^I register with (\w+), (\w+), (.+), (\w+), (\w+), (\w+), (\w+), (\w+), (\w+), and (.+)$/, async (firstName, lastName, address, city, state, zipcode, phone, ssn, username, password) => {
  await RegisterPage.register(firstName, lastName, address, city, state, zipcode, phone, ssn, username, password);
});

Then(/^I should see my name (.*)$/, async (fullname) => {
  await expect(OverviewPage.fullName).toBeExisting();
  await expect(OverviewPage.fullName).toHaveTextContaining(fullname);
});

Then(/^I should see my name (.*) and my username (\w+) at the (\w+.htm) page$/, async (fullName, username, page) => {
  await expect(RegisterPage.welcomeText).toHaveTextContaining(`Welcome ${fullName}`);
  await expect(RegisterPage.title).toHaveTextContaining(username);
  await expect(RegisterPage.url).toHaveTextContaining(page);
});