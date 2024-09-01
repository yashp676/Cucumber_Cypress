/// <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";


When("the user clicks on the Rule Library",() => {
    cy.get('a[href="/rulelibrary"]').click().as('ruleLibraryLink');
})

Then("the user should see all rules displayed by default",() => {
    cy.screenshot("Rule_library")
})

When("the user is on the Rule Library",() => {
    cy.get('a[href="/rulelibrary"]').click().as('ruleLibraryLink');
})


When("the user clicks on a particular view",() => {
    cy.get(':nth-child(2) > :nth-child(4) > .actions-column > .anticon-eye > svg').click()
    cy.screenshot("View_rule")
})

Then("the user should see the details of that specific rule",() => {
    cy.screenshot("View Specific rule")
})

When("the user clicks on Add New Rule",() => {


    cy.get("button[type='button'] span:nth-child(2)").click()

})

When("fills in rule name, description, rule type, and parameter",() => {

    cy.get(':nth-child(1) > .ant-row > .ant-col-18 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').type("Automatio_Rule007")
    cy.get("textarea[placeholder='Rule Description']").type("des_rule created by cypress.io for testing")
    cy.get('.ant-select-selection-item').click()
    cy.get('[title="value_replace"] > .ant-select-item-option-content').click()
    cy.get('.ant-select-selection-overflow').click()
    cy.get(':nth-child(5) > .ant-select-dropdown > :nth-child(1) > .rc-virtual-list > .rc-virtual-list-holder > :nth-child(1) > .rc-virtual-list-holder-inner > :nth-child(2) > .ant-select-item-option-content').click();
    cy.get('#rc_select_2').click();
    cy.get(':nth-child(6) > .ant-select-dropdown > :nth-child(1) > .rc-virtual-list > .rc-virtual-list-holder > :nth-child(1) > .rc-virtual-list-holder-inner > :nth-child(2) > .ant-select-item-option-content').click()
})
    When("clicks on Create New Rule",() => {
        cy.get('.ant-form-item-control-input-content > .ant-btn > span').click();
    })

Then("a popup message should confirm the rule creation",() => {
    cy.get('.ant-message-custom-content > :nth-child(2)').should("be.visible").should("contain", "Rule Created Successfully.");
})






