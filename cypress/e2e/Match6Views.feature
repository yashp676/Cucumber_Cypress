Feature: Views

Background:
Given I am on Application's Homepage
When I enter login details
Then Login should be confirmed.



Scenario: views creation

When User clicks on add new view
And select new table and column
And click on Apply Button
Then View should be created in view table


Scenario: Check recently created views

When user clicks on view
Then view should be visible with columns

Scenario: Apply Lower case rule

When user click on Apply rule:lowercase
And Select column name:lowercase
And select Rule: lowercase:lowercase
And clicks on apply button: lowercase 
Then view should be created with transfrom view:lowercase 

Scenario: Check transform view 
When user clicks on transform view:lowercase
Then transform view with applied rule should be visible: lowercase


Scenario: Apply I-F case rule

When user click on Apply rule:I-F
And Select column name:I-F
And select Rule:interger TO Float
And clicks on apply button:I-F
Then view should be created with transfrom view:I-F

Scenario: Check transform view 
When user clicks on transform view:I-F
Then transform view with applied rule should be visible:integer to float

