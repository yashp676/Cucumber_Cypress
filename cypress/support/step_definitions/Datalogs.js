/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";


When("user uploads file", () => {
  cy.get("#root > div > div > main > div > div.myData-header > div > button > span:nth-child(2)").click();
  cy.get(".ant-upload-text").attachFile("Duplicates1.csv", {
    subjectType: "drag-n-drop",
  });
  cy.get(".ant-progress-bg")
    .should("be.visible")
    .then(() => {
      cy.log("Progress bar is visible");
    });
});

When("go to data quality Page", () => {
  cy.wait(2000)
  cy.xpath("//a[normalize-space()='Data Quality']").click();
  
});

When("selects a file", () => {
  cy.get(':nth-child(1) > :nth-child(3) > .anticon > svg').click();
  cy.get('.ant-select-selection-item').click();
  cy.get('[title="Missing Values"] > .ant-select-item-option-content').click();
  cy.get(':nth-child(3) > .ant-btn').click();
  cy.get('.ant-select-selection-item').click();
  cy.get("div[title='Customer Id'] div[class='ant-select-item-option-content']").as('customerIdOption');
  cy.get('@customerIdOption').click();
});

When("perform data operation", () => {
  cy.window().then((win) => {
    // Intercept any window.open calls and redirect the current window to the new URL
    cy.stub(win, 'open').callsFake((url) => {
      win.location.href = url;
    });
  });
  cy.get('.ant-btn-primary').click();
});

Then("all the details of data opration should be visible in data quality logs.", () => {
  cy.wait(5000)
  cy.get('.ant-select-selector').click()
  cy.xpath("//div[@class='ant-select-item-option-content' and text()='Country']").click()
  cy.xpath("//span[text()='Remove missing_values']").click()
  cy.wait(5000)
  cy.go('back')
  cy.xpath("//a[normalize-space()='Logs']").click()
  cy.get('#rc-tabs-0-tab-2').click();
  cy.xpath("//td[contains(text(), 'Duplicates1')]").should('be.visible');
  cy.get('#rc-tabs-0-panel-2 > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-tbody > :nth-child(1) > :nth-child(4) > .actions-column > span').click()
  cy.screenshot("Quality_Logs");
});
