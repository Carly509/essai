/* eslint-disable no-undef */

const welcomeScreen = require('./screens/WelcomeScreen');
const instructionScreen = require('./screens/InstructionScreen');
const sleep = require("./utils/sleep");

describe('Instruction Screen', () => {
  it('Should show OnlyTrust logo on instruction screen', async () => {
    welcomeScreen.getStartedBtn.tap();
    await expect(instructionScreen.logo).toBeVisible();
  });

  it('Should check instructions is visible on screen', async () => {
    await sleep(300);
    waitFor(instructionScreen.instructionOne).toBeVisible();
    expect(instructionScreen.instructionOne).toBeVisible();
    waitFor(instructionScreen.instructionTwo).toBeVisible();
    expect(instructionScreen.instructionTwo).toBeVisible();
    waitFor(instructionScreen.instructionThree).toBeVisible();
    expect(instructionScreen.instructionThree).toBeVisible();
    waitFor(instructionScreen.instructionFour).toBeVisible();
    expect(instructionScreen.instructionFour).toBeVisible();
  });

  it('Should ensure `Sign In` button is visible on screen', async () => {
    waitFor(instructionScreen.signInBtn).toExist();
    waitFor(instructionScreen.signInBtn).toBeVisible();
    await expect(instructionScreen.signInBtn).toBeVisible();
  });

  it('Should ensure `Get Started` button is clickable and can navigate to the instruction page', async () => {
    await sleep(300);
    waitFor(instructionScreen.getStartedBtn).toBeVisible();
    await expect(instructionScreen.getStartedBtn).toBeVisible();
    await instructionScreen.getStartedBtn.tap();
  });
});
