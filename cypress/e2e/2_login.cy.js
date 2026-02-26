const LoginPage = require('../pages/LoginPage');

describe('Login Tests', () => {

  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should login with valid credentials and validate home page', () => {

    cy.env(['username', 'password']).then((env) => {

      loginPage.enterUsername(env.username);
      loginPage.enterPassword(env.password);
      loginPage.clickLogin();
 
      cy.contains('You are now logged in as')
        .should('be.visible');
 
      cy.contains('h2', 'Books')
        .should('be.visible');

    });

  });

});