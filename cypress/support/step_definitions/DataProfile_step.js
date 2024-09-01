/// <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";


When("Recieved File Uploaded Message",() => {
  
    cy.get(".ant-upload-text").attachFile("Org1.csv", {
        subjectType: "drag-n-drop",
      });
      cy.get(".ant-progress-bg")
        .should("be.visible")
        .then(() => {
          cy.log("Progress bar is visible");
        });
        cy.wait(7000);
        cy.get(".ant-message-notice-content")
          .should("be.visible")
          .should("contain", "Table Org1 Created Successfully!")
        
})

When("Click on Data Profiling Option",() => {

    cy.get('a[href="/profiling"]').click();
})


Then("Recently Uploaded File Should be present in Profiling Section",() =>{
    cy.get("tr:contains('Org1')").should('exist');  
})

When("User selects file from Profiling table",() => {
  cy.get("a[href='/profiling']").click()
  cy.get('[data-row-key="0"] > .ant-table-cell').click()

})
When("Clicks on Profiling option",() => {
  cy.wait(1000)
cy.get('.ant-message-custom-content > :nth-child(2)').should("be.visible")
    .should("contain","Data viewed successfully")

}) 

Then("User should get Graphical Summary of File",() => {
  cy.wait(3000) 
  cy.screenshot('graphical_summary');
})

When("User is on profile Page",() => {
  cy.get('a[href="/profiling"]').click();
})
When("Clicks on Character Profile Tab",() => {
  cy.get('#rc-tabs-0-tab-2').click()

})

When("User select a file",() => {
  cy.get('[data-row-key="0"] > .ant-table-cell').click()

})
When("Select Column from dropdown",() => {
  cy.wait(3000)
  cy.get('#rc_select_0').click()
  cy.xpath("(//div[@class='ant-select-item-option-content'])[4]").click()
})
Then("User should get Character Summary of File",() => {
  cy.wait(4000)
  cy.scrollTo(0, 500).wait(0)
  cy.get('.ant-layout-content').scrollTo('bottom')
cy.screenshot('character_Summary');
})