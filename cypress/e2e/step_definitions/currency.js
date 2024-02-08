import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

 When('I click on settings dropdown', () => {
      cy.get('div.float-start p').click();
      cy.wait(2000);
      cy.get('li:nth-child(3) > button',{ timeout: 20000 }).should('be.visible');
      cy.get('li:nth-child(3) > button').click({ force: true });
      cy.get('#settings-collapse',{ timeout: 20000 }).should('be.visible');
  })

When('I click on currencies tab', () => {
  cy.get('#settings-collapse li:nth-child(4) > a').click();
  cy.url().should('include', '/currencies');
})

When('I click on Add button to add new currency', () => {
  cy.get('.loader').should('not.exist');
  cy.wait(2000);
  cy.get('div.xcrud-rightside > a').should('be.visible');
  cy.get('div.xcrud-rightside > a').click();
  cy.get('[class="xcrud-top-actions"] > a:nth-child(1)').should('be.visible');
})  

When('I select dropdown for status as {string}', (status) => {
  
  cy.get('tr:nth-child(1) [class="select2-selection__rendered"]').click();
  cy.get('[class="select2-results__options"]').should('be.visible');
  let index = 0; 
  if (status === "Enabled"){
    index = 1;
  }
  else {
    index = 2;
  }
  cy.get('[class="select2-results__options"] li:nth-child('+index+')').click();
  })

When('I input data for name as {string}' , (name) => {
  cy.get('tr:nth-child(2) input').type(name);
})

When('I select dropdown for country as {string}' , (value) => {
  cy.get('tr:nth-child(3) [class="select2-selection__rendered"]').click();  
  cy.get('input[class="select2-search__field"]',{force: true}).type(value);
  cy.get('[class="select2-results"] li').click();
})

When('I input rate for name as {string}' , (value) => {
  cy.get('tr:nth-child(4) input').type(value);  
})

When('I click on save button' , () => {
  cy.get('[class="xcrud-top-actions"] a:nth-child(1)').click();  
  cy.wait(1000);
  cy.url().should('include', '/currencies');
})

When('I edit the latest currency entry' , () => {
  cy.get('tbody tr:nth-child(1) [class*="xcrud-current xcrud-actions"] a:nth-child(1)').click();  
  cy.get('[class="xcrud-top-actions"] > a:nth-child(1)').should('be.visible');
})

When('I delete the latest currency entry' , () => {
  cy.get('tbody tr:nth-child(1) [class*="xcrud-current xcrud-actions"] a:nth-child(2)').click();  
})