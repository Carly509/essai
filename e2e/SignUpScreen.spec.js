/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
const casual = require('casual');
const sleep = require('./utils/sleep');
const welcomeScreen = require('./screens/WelcomeScreen');
const instructionScreen = require('./screens/InstructionScreen');
const signUpScreen = require('./screens/SignUpScreen');
const loginScreen = require('./screens/LoginScreen');

describe('SignUp Screen', () => {
  const firstName = casual.first_name;
  const lastName = casual.last_name;
  const email = `${firstName}.${lastName}@gmail.com`;
  const phoneNum = casual.phone;
  const config = {
    firstname: firstName,
    lastname: lastName,
    email: email.toLowerCase(),
    phone: phoneNum,
    password: '**********',
  };

  it('Should render text `Registration`', async () => {
    await welcomeScreen.getStartedBtn.tap();
    await instructionScreen.getStartedBtn.tap();
    await expect(element(by.id('registration-text'))).toBeVisible();
  });

  it('Should ensure login link can Navigate to `Log In` page', async () => {
    waitFor(signUpScreen.navigateToLoginScreen).toBeVisible();
    await signUpScreen.navigateToLoginScreen.tap();
    // await sleep(3000);
  });

  it('Should Navigate to back to `Sign up` page', async () => {
   
    waitFor(loginScreen.navigateBackToSignUpScreen).toBeVisible();
     await sleep(3000);
    await loginScreen.navigateBackToSignUpScreen.tap();
  });

  it('Should ensure a valid first name input existence', async () => {
    await signUpScreen.enterFirstName(config);
  });

  it('Should ensure a valid last name input existence', async () => {
    await signUpScreen.enterLastName(config);
  });

  it('Should ensure a valid email address input existence', async () => {
    await signUpScreen.enterEmail(config);
  });

  it('Should ensure a valid phone number input existence', async () => {
    await signUpScreen.enterPhone(config);
  });

  it('Should ensure a valid password input existence', async () => {
    await signUpScreen.enterPassword(config);
  });

  it('Should ensure submit button exists and is clickable', async () => {
    await signUpScreen.submitCredentials();
  });
});
