Feature: Data Quality Page

Background:
Given I am on Application's Homepage
When I enter login details
Then Login should be confirmed.


Scenario: User checks dataset quality with time and views quality score
    
When the user clicks on the 'Quality' button
Then the user checks the dataset with a specified time
    
Scenario: User views dataset quality score
When the user clicks on the 'Quality' button
When User Clicks on Dataset
Then the dataset quality score should be displayed

Scenario: User opens dataset and edits values
When the user clicks on the 'Quality' button    
When the user clicks on the dataset
Then an editable table should open
When the user fills in the values
And the user clicks on 'Save'
Then the changes should be saved successfully

