const Page = require('./page');

class RegisterPage extends Page {

  get title() {
    return $('.title');
  }

  get welcomeText() {
    return $('.smallText');
  }

  get url() {
    return browser.getUrl();
  }

  get inputFirstName() {
    return $('//*[@name="customer.firstName"]');
  }

  get inputLastName() {
    return $('//*[@name="customer.lastName"]');
  }

  get inputAddress() {
    return $('//*[@name="customer.address.street"]');
  }

  get inputCity() {
    return $('//*[@name="customer.address.city"]');
  }

  get inputState() {
    return $('//*[@name="customer.address.state"]');
  }

  get inputZipCode() {
    return $('//*[@name="customer.address.zipCode"]');
  }

  get inputPhone() {
    return $('//*[@name="customer.phoneNumber"]');
  }

  get inputSsn() {
    return $('//*[@name="customer.ssn"]');
  }

  get inputUsername() {
    return $('//*[@name="customer.username"]');
  }

  get inputPassword() {
    return $('//*[@name="customer.password"]');
  }

  get inputRepeatedPassword() {
    return $('//*[@name="repeatedPassword"]');
  }

  get registerSubmitButton() {
    return $('//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input');
  }

  async register(firstName, lastName, address, city, state, zipcode, phone, ssn, username, password) {
    await this.inputFirstName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
    await this.inputAddress.setValue(address);
    await this.inputCity.setValue(city);
    await this.inputState.setValue(state);
    await this.inputZipCode.setValue(zipcode);
    await this.inputPhone.setValue(phone);
    await this.inputSsn.setValue(ssn);
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.inputRepeatedPassword.setValue(password);
    await this.registerSubmitButton.click();
  }

  open() {
    return super.open('register.htm');
  }
}

module.exports = new RegisterPage();
