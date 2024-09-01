/// <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";



When("Clicks on Delete Button", () => {
 cy.get("a[href='/logs']").click()   
    for (let i = 1; i <= 8; i++) {
      const deleteButtonSelector = `:nth-child(${i}) > :nth-child(4) > .actions-column > .anticon-delete > svg`;
      
      cy.get(deleteButtonSelector).click();  
    }
  });
  
  Then("Popup As - Log deleted Successfully Should be Displayed.", () => {
    cy.get('.ant-message-custom-content.ant-message-success').should("be.visible").should("contain","Log deleted successfully");
  });
  