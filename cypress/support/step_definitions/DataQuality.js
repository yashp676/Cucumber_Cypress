/// <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("Failed to execute 'json' on 'Response'")) {
    return false;
  }

  return true;
});

When("the user clicks on the 'Quality' button",() => {
 
  cy.xpath("//a[@href='/quality']").click()

})

Then("the user checks the dataset with a specified time",() => {
      
     cy.screenshot('QualityTable_List')
    })

When("User Clicks on Dataset",() => {

  cy.xpath("//td[@class='ant-table-cell' and text()='100KK']").click()
     cy.wait(12000)
})

Then("the dataset quality score should be displayed",() => {
  
  cy.get('.dataQualityScore').screenshot('QualityScore');
})

When("the user clicks on the dataset",() => {
   
  cy.xpath("//td[@class='ant-table-cell' and text()='100KK']").click()

})

Then("an editable table should open",() => {

  cy.wait(12000)
   
  cy.xpath("//a[@rel='nofollow' and text()='1']").screenshot("EditTable")

})

When("the user fills in the values",() => {

  cy.xpath("(//input[@class='ant-input css-12yntck ant-input-outlined' and @value='202403'])[1]").type('202444')
})

When("the user clicks on 'Save'",() => {

  cy.xpath("//span[text()='Save']").click()

})

Then("the changes should be saved successfully",() => {

  cy.wait(18000)
  cy.xpath("//span[text()='Table updated successfully']").should('be.visible')

})
