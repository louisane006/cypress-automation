const LoginPage = require('../pages/LoginPage');

describe('Logout Tests', () => {

  const loginPage = new LoginPage();

  it('should login and logout successfully', () => {

    loginPage.visit();

    cy.env(['username', 'password']).then((env) => {

      loginPage.enterUsername(env.username);
      loginPage.enterPassword(env.password);
      loginPage.clickLogin();

      cy.contains('Logout').click();

      cy.url().should('include', '/login');

      cy.get('button[name="submit"]').should('be.visible');

    });

  });

});