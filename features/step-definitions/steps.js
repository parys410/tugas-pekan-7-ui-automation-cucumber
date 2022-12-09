const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const OverviewPage = require('../pageobjects/overview.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see my name (.*)$/, async (fullname) => {
    await expect(OverviewPage.fullName).toBeExisting();
    await expect(OverviewPage.fullName).toHaveTextContaining(fullname);
});

