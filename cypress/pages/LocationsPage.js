class LocationsPage {
  getLocationsButton() {
    return cy.get("#settings-collapse li:nth-child(6) > a", { timeout: 20000 });
  }

  getPageLoader() {
    return cy.get(".loader");
  }

  getAddButton() {
    return cy.get("div.xcrud-rightside > a");
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

  getCityInput() {
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

  getSaveButton() {
    return cy.get('[class="xcrud-top-actions"] > a:nth-child(1)');
  }

  getLatitudeInput() {
    return cy.get("tr:nth-child(4) input");
  }

  getLongitudeInput() {
    return cy.get("tr:nth-child(5) input");
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
}

export const locationsPage = new LocationsPage();
