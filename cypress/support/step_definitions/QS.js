/// <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("Failed to execute 'json' on 'Response'")) {
    return false;
  }
  return true;
});

When("the user clicks on the dataset from Quality table.",() => {

    cy.xpath("//td[@class='ant-table-cell' and text()='User_Info']").click()
    cy.wait(10000)

})

When("clicks on Missing values",() => {

    cy.xpath("(//button[@class='ant-btn css-12yntck ant-btn-default'])[1]").click()
    cy.wait(9000)

})

Then("User should see all highlighted values",() => {

    cy.screenshot("MissingValues_Highlights")
    //cy.xpath("(//td[@class='ant-table-cell highlight'])[1]").type("India")
    
})

When("user starts filling data in highlighted cell.",() => {

    cy.xpath("(//td[@class='ant-table-cell highlight'])[1]").type("India")

})

Then("highlighted cell should be gone.",() => {
  
    cy.screenshot("NoHighlight")
   
})

Then("Quality Score values should be changed.",() => {
    console.log("yet to be implemented")
})

When("clicks on Duplicate values",() => {
 
    cy.xpath("//span[contains(text(),'Duplicates')]").click()
})

Then("User should see all Duplicate highlighted values",() => {

    cy.wait(9000)
    cy.screenshot("DuplicatesHighlightes")
    
})

When("clicks on Whitespaces values",() => {

    cy.xpath("//span[contains(text(),'Whitespaces')]").click()
})

Then("User should see all Whitespace values highlighted values",() => {

    cy.wait(9000)
    cy.screenshot("WTHighlights")
})

When("clicks on Rule violation values",() => {

    cy.xpath("//span[contains(text(),'Rule Violations')]").click()
})

Then("User should see all Rule violated values highlighted values",() => {
    
    cy.wait(9000)
    cy.screenshot("RuleVHighlight")
})
