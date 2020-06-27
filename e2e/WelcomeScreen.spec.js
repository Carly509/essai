/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import { logo, signInBtn, getStartedBtn } from './screens/WelcomeScreen';

describe('WelCome Screen', () => {
  it('Should show OnlyTrust logo on screen', async () => {
    await expect(logo).toBeVisible();
  });

  it('Should check `Sign In` button exist and is visible', async () => {
    await expect(signInBtn).toExist();
    await expect(signInBtn).toBeVisible();
  });

  it('Should ensure Get Started button is clickable and can navigate to the instruction page', async () => {
    await getStartedBtn.tap();
  });
});
