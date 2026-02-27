const LoginPage = require('../pages/LoginPage');

describe('Negative Login Tests', () => {

  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should show error for invalid credentials', () => {

    // Enter wrong credentials
    loginPage.enterUsername('wrongUser');
    loginPage.enterPassword('wrongPass');
    loginPage.clickLogin();

    // Assert error message is visible
    loginPage.getErrorMessage()
      .should('be.visible')
      .and('not.be.empty');

    // Take screenshot after validation
    cy.screenshot();

  });

});