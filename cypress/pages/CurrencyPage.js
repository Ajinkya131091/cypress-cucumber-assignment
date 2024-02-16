class CurrencyPage {
  getDashboardHeader() {
    return cy.get("div.float-start p", { timeout: 20000 });
  }

  getSettingsDropdown() {
    return cy.get("li:nth-child(3) > button", { timeout: 20000 });
  }

  getSettingsSubModules() {
    return cy.get("[id='settings-collapse']", { timeout: 20000 });
  }

  getCurrenciesButton() {
    return cy.get("#settings-collapse li:nth-child(4) > a", { timeout: 20000 });
  }

  getPageLoader() {
    return cy.get(".loader");
  }

  getAddButton() {
    return cy.get("div.xcrud-rightside > a");
  }

  getSaveButton() {
    return cy.get('[class="xcrud-top-actions"] > a:nth-child(1)');
  }

  getStatusDropdown() {
    return cy.get('tr:nth-child(1) [class="select2-selection__rendered"]');
  }

  getStatusDropdownOptions() {
    cy.get('[class="select2-results__options"]');
  }

  getStatusDropdownIndex(index) {
    return cy.get(
      '[class="select2-results__options"] li:nth-child(' + index + ")"
    );
  }

  getNameInput() {
    return cy.get("tr:nth-child(2) input");
  }

  getCountryDropdown() {
    return cy.get('tr:nth-child(3) [class="select2-selection__rendered"]');
  }

  getCountryDropdownOptions() {
    return cy.get('input[class="select2-search__field"]', { force: true });
  }

  getCountryDropdownValue() {
    return cy.get('[class="select2-results"] li');
  }

  getRateInput() {
    return cy.get("tr:nth-child(4) input");
  }

  getEditButton() {
    return cy.get(
      'tbody tr:nth-child(1) [class*="xcrud-current xcrud-actions"] a:nth-child(1)'
    );
  }

  getDeleteButton() {
    return cy.get(
      'tbody tr:nth-child(1) [class*="xcrud-current xcrud-actions"] a:nth-child(2)'
    );
  }

  getValidationError() {
    return cy.get(".xcrud-message");
  }
}

export const currencyPage = new CurrencyPage();
