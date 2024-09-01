/// <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor"



When("User clicks on add new view",() => {
cy.xpath("//a[@href='/view']").click()
cy.xpath("//span[text()='Create View']").click()

})

When("select new table and column",() => {
cy.get('#rc_select_0').click()
cy.get("div[title='customers-10000'] div[class='ant-select-item-option-content']").click()
cy.xpath("//span[text()='Next']").click()
cy.get('.ant-select-selection-overflow').click()
cy.xpath("//div[@class='ant-select-item-option-content' and text()='Country']").click()
cy.xpath("//div[@class='ant-select-item-option-content' and text()='City']").click()
cy.get('.ant-modal-content').click()
cy.get('.ant-modal-footer > :nth-child(2)').click()
cy.get('.ant-form-item-control-input-content > .ant-input').type("test2")

})

When("click on Apply Button",() => {
cy.xpath("//span[text()='Create']").click()
})


Then("View should be created in view table",() => {
cy.wait(2000)
  cy.contains('.ant-table-cell', 'test1').should('be.visible')
})

When("user clicks on view", () => {
  cy.xpath("//a[@href='/view']").click();

  cy.window().then((win) => {
    // Intercept any window.open calls and redirect the current window to the new URL
    cy.stub(win, 'open').callsFake((url) => {
      win.location.href = url;
    });
  });

  cy.xpath("(//span[@aria-label='eye'])[1]").click();
  cy.wait(6000);
});

Then("view should be visible with columns",() => {
    cy.screenshot("Tableview")
})

When("user click on Apply rule:lowercase",() => {
  cy.xpath("//a[@href='/view']").click();   
  cy.xpath("(//span[@aria-label='signature'])[1]").click()
})

When("Select column name:lowercase",() =>{
  cy.get('.ant-select-selection-item').click()
  cy.xpath("//div[@class='ant-select-item-option-content' and text()='City']").click()

})

When("select Rule: lowercase:lowercase",() => {
  cy.get('#rc_select_1').click()
cy.xpath("//div[@class='ant-select-item-option-content' and text()='Change Case']").click()

})

When("clicks on apply button: lowercase",() => {
  cy.get('.ant-form-item-control-input-content > .ant-btn').click()
  cy.wait(3000)
})

Then("view should be created with transfrom view:lowercase", () => {


}) 

When("user clicks on transform view:lowercase", () => {
  cy.xpath("//a[@href='/view']").click(); 

  cy.window().then((win) => {
    // Intercept any window.open calls and redirect the current window to the new URL
    cy.stub(win, 'open').callsFake((url) => {
      win.location.href = url;
    });
  });

  cy.get(':nth-child(4) > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-tbody > :nth-child(1) > :nth-child(3) > .actions-column > .anticon-eye > svg').click();
});


Then("transform view with applied rule should be visible: lowercase",() => {
cy.wait(6000)
cy.screenshot("Transformrule_Lowercase")
})

When("user click on Apply rule:I-F",() => {

  cy.get('#rc_select_0').click()
  cy.get("div[title='Salaries'] div[class='ant-select-item-option-content']").click()
  cy.xpath("//span[text()='Next']").click()
  cy.get('.ant-select-selection-overflow').click()
  cy.xpath("//div[@class='ant-select-item-option-content' and text()='Salary']").click()
  cy.get('.ant-modal-content').click()
  cy.get('.ant-modal-footer > :nth-child(2)').click()
  cy.get('.ant-form-item-control-input-content > .ant-input').type("I-F")

})

When("Select column name:I-F",() => {

})

When("select Rule:interger TO Float", () => {

})

When("clicks on apply button:I-F",() => {

})

Then("view should be created with transfrom view:I-F",() => {

})


When("user clicks on transform view:I-F",() => {

})

Then("transform view with applied rule should be visible:integer to float",() => {

})