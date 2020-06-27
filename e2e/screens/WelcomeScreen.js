/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
class WelcomeScreen {
  get logo() {
    return element(by.id('logo'));
  }

  get signInBtn() {
    return element(by.id('sign-in-btn'));
  }

  get getStartedBtn() {
    return element(by.id('get-started-btn'));
  }
}
module.exports = new WelcomeScreen();
