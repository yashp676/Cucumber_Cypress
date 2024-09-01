@Rule
Feature: RULE LIBRARY

Background:
Given I am on Application's Homepage
When I enter login details
Then Login should be confirmed.


Scenario: User views all rules in the rule library
  When the user clicks on the Rule Library
  Then the user should see all rules displayed by default

Scenario: User views a specific rule by clicking on a particular view
  When the user is on the Rule Library
  When the user clicks on a particular view
  Then the user should see the details of that specific rule

Scenario: User adds a new rule
  When the user is on the Rule Library
  When the user clicks on Add New Rule
  And fills in rule name, description, rule type, and parameter
  And clicks on Create New Rule
  Then a popup message should confirm the rule creation


