/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
const casual = require('casual');
const welcomeScreen = require('./screens/WelcomeScreen');
const signUpScreen = require('./screens/SignUpScreen');
const loginScreen = require('./screens/LoginScreen');

describe('Login Screen', () => {
  const firstName = casual.first_name;
  const lastName = casual.last_name;
  const email = `${firstName}.${lastName}@gmail.com`;
  const config = {
    email: email.toLowerCase(),
    password: '**********',
  };

  it('Should ensure login link is clickable and can navigate to `Log in` Screen', async () => {
    await welcomeScreen.signInBtn.tap();
  });

  it('Should render text `Login`', async () => {
    await expect(element(by.id('login-text'))).toBeVisible();
  });

  it('Should ensure `Signup` link can Navigate to `Registration` screen', async () => {
    waitFor(loginScreen.navigateBackToSignUpScreen).toBeVisible();
    await expect(loginScreen.navigateBackToSignUpScreen).toBeVisible();
    await loginScreen.navigateBackToSignUpScreen.tap();
  });

  it('Should Navigate back to `Login` screen', async () => {
    waitFor(signUpScreen.navigateToLoginScreen).toBeVisible();
    await expect(signUpScreen.navigateToLoginScreen).toBeVisible();
    await signUpScreen.navigateToLoginScreen.tap();
  });

  it('Should ensure a valid email address input existence', async () => {
    await loginScreen.enterEmail(config);
  });

  it('Should ensure a valid password input existence', async () => {
    await loginScreen.enterPassword(config);
  });

  it('Should ensure `Login`submit button exists and is clickable', async () => {
    await loginScreen.submitCredentials();
  });
});
