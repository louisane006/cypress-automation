class LoginPage {

  visit() {
    cy.visit('/login');
  }

  enterUsername(username) {
    cy.get('input[name="username"]').clear().type(username);
  }

  enterPassword(password) {
    cy.get('input[name="password"]').clear().type(password);
  }

  toggleRememberMe(check = true) {
    if (check) {
      cy.get('input[name="remember_me"]').check();
    } else {
      cy.get('input[name="remember_me"]').uncheck();
    }
  }

  clickLogin() {
    cy.get('button[name="submit"]').click();
  }

  clickForgotPassword() {
    cy.contains('Forgot Password').click();
  }

  getForgotPasswordValidationMessage() {
    return cy.get('#flash_danger')
      .should('be.visible')
      .and('contain.text', 'Please enter valid username to reset password');
  }

  getErrorMessage() {
    return cy.get('#flash_danger')
      .should('be.visible');
  }

  getSuccessMessage() {
    return cy.get('#flash_success')
      .should('be.visible');
  }

  clickReturnToHome() {
    cy.contains('Return to Home').click();
  }
}

module.exports = LoginPage;