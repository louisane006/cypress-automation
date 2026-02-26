const LoginPage = require('../pages/LoginPage');

describe('Forgot Password Tests', () => {

  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should show validation message on forgot password', () => {

    loginPage.clickForgotPassword();

    loginPage.getForgotPasswordValidationMessage();

  });

});