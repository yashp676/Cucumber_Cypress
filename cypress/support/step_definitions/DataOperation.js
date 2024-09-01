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

  When("the user selects a file for data operations - people-100",() => {
  
    cy.xpath("//td[@class='ant-table-cell' and text()='people-100']").click()
  })

  When("the user clicks on the 'Data Operations' tab",() => {
    cy.wait(12000)
    cy.xpath("//div[text()='Data Operations']").click()
  })
  

  When("the user selects Sp.char checkboxes",() => {
  
    cy.xpath("(//input[@class='ant-checkbox-input'])[48]").click()
    cy.xpath("(//input[@class='ant-checkbox-input'])[57]").click()
    cy.xpath("(//input[@class='ant-checkbox-input'])[66]").click()

  })

  When("the user clicks on 'Remove'", () => {
    
    cy.xpath("//span[text()='Remove']").click()

  })

  

  Then("the User should see data without sp.char in data view table",() => {
    
  cy.wait(10000)
  cy.viewport(1600, 1080) // Set a reasonably large height
  cy.scrollTo('bottom')
  cy.screenshot("DataOps_hyphens_Removed", { capture: 'fullPage' })

})

  When("the user clicks on Save.",() => {
   
    cy.wait(6000)
    cy.get('.buttons > .ant-btn-primary').click()
    cy.screenshot("DataOpsSaved", { capture: 'fullPage' })
  })

When("the user selects a file for data operations - organisation-1000",() => {

  cy.xpath("//td[@class='ant-table-cell' and text()='organizations-1000']").click()
})

When("the user selects leading spaces",() => {

  cy.xpath("(//input[@class='ant-checkbox-input'])[49]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[67]").click()
})

Then("the User should see data without leading space in data view table",() => {

  cy.wait(12000)
  cy.viewport(1600, 1080)
  cy.screenshot("DataOps_leading.space_Removed", { capture: 'fullPage' })
    
})


When("the user selects trailing spaces",() => {
 
  cy.xpath("(//input[@class='ant-checkbox-input'])[14]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[23]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[32]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[50]").click(
  cy.xpath("(//input[@class='ant-checkbox-input'])[68]").click()  
  )
})

Then("the User should see data without Trailing space in data view table",() => {
 
  cy.wait(12000)
  cy.viewport(1600, 1080)
  cy.screenshot("DataOps_Trailing.space_Removed", { capture: 'fullPage' })
})

When("the user selects a file for data operations - user_info",() => {

  cy.xpath("//td[@class='ant-table-cell' and text()='User_Info']").click()
})

When("the user selects dots",() => {

  cy.xpath("(//input[@class='ant-checkbox-input'])[69]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[78]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[87]").click()
})

Then("the User should see data without dots in data view table",() => {

  cy.wait(12000)
  cy.viewport(1600, 1080)
  cy.screenshot("DataOps_Dots_Removed", { capture: 'fullPage' })
})


When("the user selects hyphens",() => {

  cy.xpath("(//input[@class='ant-checkbox-input'])[71]").click()
  cy.xpath("(//input[@class='ant-checkbox-input'])[80]").click()
})

Then("the User should see data without hyphens in data view table",() => {

  cy.wait(12000)
  cy.viewport(1600, 1080)
  cy.screenshot("DataOps_hyphens_Removed", { capture: 'fullPage' })
})