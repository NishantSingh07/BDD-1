Feature: Create New Deal

Scenario:  Test New Deal Creation

Given The User is at Login Page
When Title of the page is Free CRM
Then  The user enters username and password
   | username | password|
   | NishantSingh | Passw0rd |
 
Then The User clicks login button
Then The User is at Home Page
Then The User moves to Deals Page
Then The User Create New Deal
| title | amount | probability | commission |
| test deal | 1000 | 50 | 10 |



 