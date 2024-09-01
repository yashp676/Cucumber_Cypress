Feature: Data Operations

Background:
Given I am on Application's Homepage
When I enter login details
Then Login should be confirmed.

Scenario: User performs data operations by selecting Sp.Char checkboxes and removing specific data issues

When the user clicks on the 'Quality' button 
And the user selects a file for data operations - people-100
And the user clicks on the 'Data Operations' tab
And the user selects Sp.char checkboxes
And the user clicks on 'Remove'
Then the User should see data without sp.char in data view table
And the user clicks on Save.

Scenario: User performs data operations by selecting leading spaces checkboxes and removing specific data issues

When the user clicks on the 'Quality' button 
And the user selects a file for data operations - organisation-1000
And the user clicks on the 'Data Operations' tab
And the user selects leading spaces
And the user clicks on 'Remove'
Then the User should see data without leading space in data view table
And the user clicks on Save.

Scenario: User performs data operations by selecting Trailing spaces checkboxes and removing specific data issues

When the user clicks on the 'Quality' button 
And the user selects a file for data operations - organisation-1000
And the user clicks on the 'Data Operations' tab
And the user selects trailing spaces
And the user clicks on 'Remove'
Then the User should see data without Trailing space in data view table
And the user clicks on Save.


Scenario: User performs data operations by selecting dots checkboxes and removing specific data issues

When the user clicks on the 'Quality' button 
And the user selects a file for data operations - user_info
And the user clicks on the 'Data Operations' tab
And the user selects dots
And the user clicks on 'Remove'
Then the User should see data without dots in data view table
And the user clicks on Save.

Scenario: User performs data operations by selecting hyphens checkboxes and removing specific data issues

When the user clicks on the 'Quality' button 
And the user selects a file for data operations - user_info
And the user clicks on the 'Data Operations' tab
And the user selects hyphens
And the user clicks on 'Remove'
Then the User should see data without hyphens in data view table
And the user clicks on Save.