const report = require("multiple-cucumber-html-reporter");
const pdf = require("html-pdf");
const fs = require("fs");

const htmlReportPath = "cypress/reports/html-multi-report/index.html";
const pdfReportPath = "cypress/reports/pdf-multi-report/report.pdf";

// Generate HTML report
report.generate({
  jsonDir: "cypress/reports/cucumber-json/",
  reportPath: "cypress/reports/html-multi-report/",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Data Matching" },
      { label: "Release", value: "1" },
      { label: "Cycle", value: "3" },
      { label: "Execution Start Time", value: "May 27 2024, 4.50 PM IST" },
      { label: "Execution End Time", value: "May 27 2024, 5.00 PM IST" },
      { label: "Test Approved", value: "Yash Pardeshi"},
      { label: "Project Manager", value : "Mayur Vira"},
    ],
  },
});


