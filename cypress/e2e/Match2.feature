Feature: Delete Functionality

Background:
Given I am on Application's Homepage
When I enter login details
Then Login should be confirmed.

Scenario: Delete Log Files
When Clicks on Delete Button
Then Popup As - Log deleted Successfully Should be Displayed.
