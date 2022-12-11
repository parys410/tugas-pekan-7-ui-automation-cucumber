const Page = require('./page');

class LoginPage extends Page {

  get inputUsername() {
    return $('//*[@name="username"]');
  }

  get inputPassword() {
    return $('//*[@name="password"]');
  }

  get btnSubmit() {
    return $('//*[@id="loginPanel"]/form/div[3]/input');
  }

  get registerLink() {
    return $('//*[@id="loginPanel"]/p[2]/a');
  }

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  async openRegisterPage() {
    await this.registerLink.click();
  }

  open() {
    return super.open('index.htm');
  }
}

module.exports = new LoginPage();
