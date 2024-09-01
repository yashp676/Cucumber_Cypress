/// <reference types="cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("Failed to execute 'json' on 'Response'")) {
    return false;
  }
  return true;
});

When("I Click on Upload file Button", () => {
  cy.get("#root > div > div > main > div > div.myData-header > div > button > span:nth-child(2)").click();
});

When("Select CSV File TO Upload", () => {
  cy.get(".ant-upload-text").attachFile("Duplicates1.csv", {
    subjectType: "drag-n-drop",
  });
  cy.get(".ant-progress-bg")
    .should("be.visible")
    .then(() => {
      cy.log("Progress bar is visible");
    });
});

Then("Table customers-10000 Created Successfully!", () => {
  cy.wait(3000);
  cy.get(".ant-message-notice-content")
    .should("be.visible")
    .should("contain", "Table Duplicates1 Created Successfully!");
});

Then("The table customers-10000 already exists in the database! Message Should be recieved", () => {
  cy.wait(1000);
  cy.get('.ant-message-notice-content')
    .should("be.visible")
    .should("contain", "The table Duplicates1 already exists in the database!");
});

When("Select xml File TO Upload", () => {
  cy.get(".ant-upload-text").attachFile("e.xml", {
    subjectType: "drag-n-drop",
  });
});

Then("Error Message Should be Displayed - Unsupported file type. Please upload .csv or .xml files.", () => {
  cy.get('.ant-message-custom-content > :nth-child(2)').should("be.visible").should("contain","Unsupported file type. Please upload .csv, .xml or .xlsx files");
});

When("Select CSV More than 5MB File TO Upload", () => {
  cy.get(".ant-upload-text").attachFile("size.csv", {
    subjectType: "drag-n-drop",
  });
});

Then("Error Message Should be Displayed - File size exceeds the limit of 5MB.", () => {
  cy.get(".ant-message-custom-content > :nth-child(2)")
    .should("be.visible")
    .should("contain", "File size exceeds the limit of 5MB.");
});

When("Select pdf File", () => {
  cy.get(".ant-upload-text").attachFile("p.pdf", {
    subjectType: "drag-n-drop",
  });
});

When("Select JPG File", () => {
  cy.get(".ant-upload-text").attachFile("p.jpg", {
    subjectType: "drag-n-drop",
  });
});

When("Select PNG File", () => {
  cy.get(".ant-upload-text").attachFile("j.png", {
    subjectType: "drag-n-drop",
  });
});

When("Select MP3 File", () => {
  cy.get(".ant-upload-text").attachFile("f.mp3", {
    subjectType: "drag-n-drop",
  });
});

When("Select JSON File", () => {
  cy.get(".ant-upload-text").attachFile("j.json", {
    subjectType: "drag-n-drop",
  });
});
