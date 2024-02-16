import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../pages/LoginPage.js";

Given("I am in login page", () => {
  cy.visit(Cypress.config("baseUrl"));
});

When("I enter {string} in username field", (username) => {
  loginPage.typeUsername(username);
});

When("I enter {string} in password field", (password) => {
  loginPage.typePassword(password);
});

When("I enter valid username and password", () => {
  cy.LoginByFixtures();
});

When("I click on login button", () => {
  cy.loginClick();
});

Then("I should logged in and redirected to dashboard page", () => {
  cy.verifyDashboardPage();
});

Then("I enter invalid credentials and validate error", (datatable) => {
  datatable.raw().forEach((item) => {
    cy.enterInvalidCredsAndVerifyError(item);
  });
});
