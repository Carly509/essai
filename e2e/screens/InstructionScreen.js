
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

class InstructionScreen {
  get logo() {
    return element(by.id('logo'));
  }

  get instructionOne() {
    return element(by.id('instruction-one'));
  }

  get instructionTwo() {
    return element(by.id('instruction-two'));
  }

  get instructionThree() {
    return element(by.id('instruction-three'));
  }

  get instructionFour() {
    return element(by.id('instruction-four'));
  }

  get signInBtn() {
    return element(by.id('signin-btn'));
  }

  get getStartedBtn() {
    return element(by.id('signup-btn'));
  }
}
module.exports = new InstructionScreen();
