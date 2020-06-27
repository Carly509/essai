/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
class LoginScreen {
  async enterEmail(config) {
    await element(by.id('login-email-address')).typeText(config.email);
    await element(by.id('login-email-address')).tapReturnKey();
  }

  async enterPassword(config) {
    await element(by.id('login-password')).typeText(config.password);
    await element(by.id('login-password')).tapReturnKey();
  }

  async submitCredentials() {
    waitFor(element(by.id('login-button'))).toBeVisible();
    await element(by.id('login-button')).tap();
  }

  get navigateBackToSignUpScreen() {
    return element(by.id('navigate-back-to-signup-screen'));
  }
}
module.exports = new LoginScreen();
