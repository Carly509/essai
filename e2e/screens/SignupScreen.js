/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
class SignUpScreen {
  async enterFirstName(config) {
    await element(by.id('first-name')).typeText(config.firstname);
    await element(by.id('first-name')).tapReturnKey();
  }

  async enterLastName(config) {
    await element(by.id('last-name')).typeText(config.lastname);
    await element(by.id('last-name')).tapReturnKey();
  }

  async enterEmail(config) {
    await element(by.id('email-address')).typeText(config.email);
    await element(by.id('email-address')).tapReturnKey();
  }

  async enterPhone(config) {
    await element(by.id('phone-number')).typeText(config.phone);
    await element(by.id('phone-number')).tapReturnKey();
  }

  async enterPassword(config) {
    await element(by.id('password')).typeText(config.phone);
    await element(by.id('password')).tapReturnKey();
  }

  async submitCredentials() {
    waitFor(element(by.id('sign-up-button'))).toBeVisible();
    await expect(element(by.id('sign-up-button'))).toBeVisible();
    await element(by.id('sign-up-button')).tap();
  }

  get navigateToLoginScreen() {
    return element(by.id('navigate-to-login-screen'));
  }
}
module.exports = new SignUpScreen();
