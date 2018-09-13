$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/ZSINNIS/eclipse-workspace/BDD/src/main/java/Feature/Create Deal.Feature");
formatter.feature({
  "line": 1,
  "name": "Create New Deal",
  "description": "",
  "id": "create-new-deal",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Test New Deal Creation",
  "description": "",
  "id": "create-new-deal;test-new-deal-creation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "The User is at Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of the page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "NishantSingh",
        "Passw0rd"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The User clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "The User is at Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "The User moves to Deals Page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "The User Create New Deal",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 15
    },
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 16
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateDealStepDefinition.The_user_is_at_Login_Page()"
});
