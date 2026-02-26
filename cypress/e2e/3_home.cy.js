const LoginPage = require('../pages/LoginPage');

describe('Home Page Tests', () => {

  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();

    cy.env(['username', 'password']).then((env) => {
      loginPage.enterUsername(env.username);
      loginPage.enterPassword(env.password);
      loginPage.clickLogin();
    });
  });

  it('should validate home page elements', () => {

    cy.contains('h2', 'Books').should('be.visible');

    cy.get('#new').should('be.visible');
    cy.get('#old').should('be.visible');

    cy.get('.book').should('have.length.greaterThan', 0);

  });

});