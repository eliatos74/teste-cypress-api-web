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

Cypress.Commands.add('generateRandomEmail', () => {
    const randomChars = Math.random().toString(36).substring(2, 10);
    const email = `teste${randomChars}@teste.com`;
    return email;
  });
  
  Cypress.Commands.add('generateRandomPassword', () => {
    const randomChars = Math.random().toString(36).substring(2, 10);
    const password = `senha${randomChars}`;
    return password;
  });
  