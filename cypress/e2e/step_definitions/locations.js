import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { locationsPage } from "../../pages/LocationsPage.js";

Then("I click on locations tab", () => {
  locationsPage.getLocationsButton().click();
  cy.url().should("include", "/locations");
});

When("I click on Add button to add new location", () => {
  locationsPage.getPageLoader().should("not.exist");
  cy.wait(2000);
  locationsPage.getAddButton().should("be.visible");
  locationsPage.getAddButton().click();
  locationsPage.getSaveButton().should("be.visible");
});

When("I select dropdown for status as {string} in locations", (status) => {
  locationsPage.getStatusDropdown().click();
  locationsPage.getStatusDropdown().should("be.visible");
  let index = 0;
  if (status === "Enabled") {
    index = 1;
  } else {
    index = 2;
  }
  locationsPage.getStatusDropdownIndex(index).click();
});

When("I enter data for city as {string} in locations", (value) => {
  locationsPage.getCityInput().click().type(value);
});

When("I select dropdown for country as {string} in locations", (value) => {
  locationsPage.getCountryDropdown().click();
  locationsPage.getCountryDropdownOptions().type(value);
  locationsPage.getCountryDropdownValue().click();
});

When("I enter data for latitude as {string} in locations", (value) => {
  locationsPage.getLatitudeInput().click().type(value);
});

When("I enter data for longitude as {string} in locations", (value) => {
  locationsPage.getLongitudeInput().click().type(value);
});

When("I click on save button in locations", () => {
  locationsPage.getSaveButton().click();
  cy.wait(1000);
  cy.url().should("include", "/locations");
});

When("I edit the latest locations entry", () => {
  locationsPage.getEditButton().click();
  locationsPage.getSaveButton().should("be.visible");
});

When("I delete the latest locations entry", () => {
  locationsPage.getDeleteButton().should("be.visible");
  locationsPage.getDeleteButton().click();
});
