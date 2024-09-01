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
import 'cypress-file-upload';
/// <reference types="cypress-xpath" />

// cypress/support/commands.js

Cypress.Commands.add('captureFullPageScreenshot', (name) => {
    cy.document().then((doc) => {
      const fullHeight = Math.max(
        doc.body.scrollHeight, 
        doc.documentElement.scrollHeight,
        doc.body.offsetHeight, 
        doc.documentElement.offsetHeight,
        doc.body.clientHeight, 
        doc.documentElement.clientHeight
      );
      
      const viewportHeight = Cypress.config('viewportHeight');
      const numOfScrolls = Math.ceil(fullHeight / viewportHeight);
      
      cy.log(`Full height: ${fullHeight}, Viewport height: ${viewportHeight}, Number of scrolls: ${numOfScrolls}`);
  
      const screenshots = [];
  
      for (let i = 0; i < numOfScrolls; i++) {
        cy.scrollTo(0, i * viewportHeight);
        cy.wait(200); // Wait for any animations or lazy-loaded content
        cy.screenshot(`${name}_part_${i}`, { 
          capture: 'viewport', 
          overwrite: true,
          timeout: 30000 // Increase timeout for larger pages
        });
        screenshots.push(`${name}_part_${i}`);
      }
  
      cy.log(`Captured ${screenshots.length} screenshots: ${screenshots.join(', ')}`);
    });
  });