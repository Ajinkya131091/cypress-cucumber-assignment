class LoginPage {
    elements = {
      usernameInput: () => cy.get("#email"),
      passwordInput: () => cy.get("#password"),
      loginBtn: () => cy.get("#submit"),
      userSettings: () => cy.get("#dropdownUser1"),
      loginError: () => cy.get(".vt-card"),
    };
  
    typeUsername(username) {
      this.elements.usernameInput().type(username);
    }

    getUsername() {
        this.elements.usernameInput();
    }
  
    typePassword(password) {
      this.elements.passwordInput().type(password);
    }

    getPassword() {
        this.elements.passwordInput();
    }
  
    clickLogin() {
      this.elements.loginBtn().click({ force: true });
    }

    getLoginButton() {
        this.elements.loginBtn();
    }
  
    submitLogin(username,password){
      this.elements.usernameInput().type(username);
      this.elements.passwordInput().type(password);
      this.elements.loginBtn().click({ force: true });
    }

    userSettingElement() {
        this.elements.userSettings();
      }
    
    loginErrorElement() {
        this.elements.loginError();
    }
  }
  
  export const loginPage = new LoginPage();