Feature: Data Profiling

Background:
Given I am on Application's Homepage
When I enter login details
Then Login should be confirmed.

Scenario: Check Recently Uploaded file in data Profiling Section.
When I Click on Upload file Button
And Recieved File Uploaded Message 
And Click on Data Profiling Option
Then Recently Uploaded File Should be present in Profiling Section


Scenario: Check Graphical Representation of selected Profile file

When User selects file from Profiling table
And Clicks on Profiling option 
Then User should get Graphical Summary of File



Scenario: Check Column Representation of selected Profile file

When User is on profile Page
And Clicks on Character Profile Tab
And User select a file
And Select Column from dropdown
Then User should get Character Summary of File


