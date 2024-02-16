import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { currencyPage } from "../../pages/CurrencyPage";

Given("I click on settings dropdown", () => {
  currencyPage.getDashboardHeader().click();
  cy.wait(2000);
  currencyPage.getSettingsDropdown().should("be.visible");
  currencyPage.getSettingsDropdown().click({ force: true });
  currencyPage.getCurrenciesButton().should("be.visible");
});

Then("I click on currencies tab", () => {
  currencyPage.getCurrenciesButton().click();
  cy.url().should("include", "/currencies");
});

When("I click on Add button to add new currency", () => {
  currencyPage.getPageLoader().should("not.exist");
  cy.wait(2000);
  currencyPage.getAddButton().should("be.visible");
  currencyPage.getAddButton().click();
  currencyPage.getSaveButton().should("be.visible");
});

When("I select dropdown for status as {string}", (status) => {
  currencyPage.getStatusDropdown().click();
  currencyPage.getStatusDropdown().should("be.visible");
  let index = 0;
  if (status === "Enabled") {
    index = 1;
  } else {
    index = 2;
  }
  currencyPage.getStatusDropdownIndex(index).click();
});

When("I input data for name as {string}", (name) => {
  currencyPage.getNameInput().type(name);
});

When("I select dropdown for country as {string}", (value) => {
  currencyPage.getCountryDropdown().click();
  currencyPage.getCountryDropdownOptions().type(value);
  currencyPage.getCountryDropdownValue().click();
});

When("I input rate as {string}", (value) => {
  currencyPage.getRateInput().type(value);
});

When("I click on save button", () => {
  currencyPage.getSaveButton().click();
  cy.wait(1000);
  cy.url().should("include", "/currencies");
});

When("I edit the latest currency entry", () => {
  currencyPage.getEditButton().click();
  currencyPage.getSaveButton().should("be.visible");
});

When("I delete the latest currency entry", () => {
  currencyPage.getDeleteButton().click();
});

When("I am able to see validation message when i save currency", () => {
  currencyPage
    .getValidationError()
    .should(
      "have.text",
      "Some fields are likely to contain errors. Fix errors and try again."
    );
});
