class LoginPage {
  elements = {
    usernameInput: () => cy.get("#email"),
    passwordInput: () => cy.get("#password"),
    loginBtn: () => cy.get("#submit"),
    userSettings: () => cy.get("#dropdownUser1"),
    loginError: () => cy.get(".vt-card"),
    languageElement: () => cy.get(".filter-option", { timeout: 20000 }),
    pageLoader: () => cy.get(".loader"),
    superAdminDropdown: () => cy.get("#dropdownUser1", { timeout: 20000 }),
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  getUserName() {
    return this.elements.usernameInput();
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  getPassword() {
    return this.elements.passwordInput();
  }

  clickLogin() {
    this.elements.loginBtn().click({ force: true });
  }

  getLoginButton() {
    return this.elements.loginBtn();
  }

  getLanguageElement() {
    return this.elements.languageElement();
  }

  getPageLoader() {
    return this.elements.pageLoader();
  }

  getSuperAdminDropdown() {
    return this.elements.superAdminDropdown();
  }

  getLoginErrorNotification() {
    return this.elements.loginError();
  }
}

export const loginPage = new LoginPage();
