Feature: User Login

Scenario Outline:  Test Login Feature

Given User is at Login Page

When The Title of the page is Free CRM

Then user enters "<username>" and "<password>"
   
Then User clicks login button

Then User is at Home Page

Examples:

 |username |password|
 |NishantSingh|Passw0rd|