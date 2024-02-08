import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import {loginPage} from '../../pages/LoginPage.js';

Given('I am in login page', () => {
    cy.visit(Cypress.config('baseUrl'));
  })

When('I enter {string} in username field', (username) => {
  loginPage.typeUsername(username);
})

When('I enter {string} in password field', (password) => {
  loginPage.typePassword(password);
})  

When('I enter valid username and password', () => {
    cy.fixture('users.json').then((users) => {
      loginPage.typeUsername(users.valid.username);
      loginPage.typePassword(users.valid.password);
    })
  })

When('I click on login button' , () => {
   cy.get('.filter-option',{ timeout: 20000 }).should('be.visible');
   cy.wait(500);
   loginPage.clickLogin();
})

Then('I should logged in and redirected to dashboard page' , () => {
    cy.get('.loader').should('not.exist');
    cy.get('#dropdownUser1',{ timeout: 20000 }).should('be.visible') ;
    cy.url().should('include', '/dashboard');
 })
 
 Then('I enter invalid credentials and validate error', (datatable) => {
    datatable.raw().forEach(item => { 
        cy.get('#email').type(item[0]);
        cy.get('#password').type(item[1]);
        cy.get('.filter-option',{ timeout: 20000 }).should('be.visible') ;
        cy.get('#submit').should('be.enabled');
        cy.get('#submit').click({ force: true });
        cy.get('.vt-card').should('be.visible');
      })
    
 });


