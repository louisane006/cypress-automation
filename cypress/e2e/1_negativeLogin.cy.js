const LoginPage = require('../pages/LoginPage');

describe('Negative Login Tests', () => {

  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should show error for invalid credentials', () => {

    loginPage.enterUsername('wrongUser');
    loginPage.enterPassword('wrongPass');
    loginPage.clickLogin();

    loginPage.getErrorMessage()
      .should('contain.text', 'Wrong Username or Password');
      cy.screenshot()
  }); 

});