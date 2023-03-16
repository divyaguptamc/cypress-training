// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("fillContactForm", (fname, lname, email, companyname, whatcanwedo, anythingelse) => {
    //to input search text in Google and perform search
    cy.get("input[name='firstname']").type(fname);
    cy.get("input[name='lastname']").type(lname);
    cy.get("input[name='email']").type(email);
    cy.get("input[name='company']").type(companyname);
    cy.get('select').select(whatcanwedo);
    cy.get("input[name='industry']").type('abc');
    cy.get('textarea').type(anythingelse);
    cy.get("input[type='submit']").click();
 });