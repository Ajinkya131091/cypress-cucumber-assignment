import { loginPage } from "../pages/LoginPage.js";

Cypress.Commands.add("LoginByFixtures", () => {
  cy.fixture("users.json").then((users) => {
    loginPage.typeUsername(users.valid.username);
    loginPage.typePassword(users.valid.password);
  });
});

Cypress.Commands.add("loginClick", () => {
  loginPage.getLanguageElement().should("be.visible");
  cy.wait(500);
  loginPage.clickLogin();
});

Cypress.Commands.add("verifyDashboardPage", () => {
  loginPage.getPageLoader().should("not.exist");
  loginPage.getSuperAdminDropdown().should("be.visible");
  cy.url().should("include", "/dashboard");
});

Cypress.Commands.add("enterInvalidCredsAndVerifyError", (item) => {
  loginPage.getUserName().type(item[0]);
  loginPage.getPassword().type(item[1]);
  loginPage.getLanguageElement().should("be.visible");
  loginPage.getLoginButton().should("be.enabled");
  loginPage.clickLogin();
  loginPage.getLoginErrorNotification().should("be.visible");
});

Cypress.Commands.add("verifyDashboardPage", () => {
  loginPage.getPageLoader().should("not.exist");
  loginPage.getSuperAdminDropdown().should("be.visible");
  cy.url().should("include", "/dashboard");
});
