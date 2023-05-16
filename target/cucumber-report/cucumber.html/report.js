$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("logintest.feature");
formatter.feature({
  "line": 1,
  "name": "Login page",
  "description": "As a user I want to check Login page functionality",
  "id": "login-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2958226300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to login successfully with valid credentials",
  "description": "",
  "id": "login-page;user-should-be-able-to-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on log in page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"standard_user\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \"secret_sauce\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on \u0027Login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify the text \"Products\" on product page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnLogInPage()"
});
formatter.result({
  "duration": 131079800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 9
    }
  ],
  "location": "LoginTestSteps.iEnterAsUsername(String)"
});
formatter.result({
  "duration": 125996200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 9
    }
  ],
  "location": "LoginTestSteps.iEnterAsPassword(String)"
});
formatter.result({
  "duration": 76435700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 115895600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Products",
      "offset": 19
    }
  ],
  "location": "LoginTestSteps.iVerifyTheTextOnProductPage(String)"
});
formatter.result({
  "duration": 75863600,
  "status": "passed"
});
formatter.after({
  "duration": 900104000,
  "status": "passed"
});
formatter.before({
  "duration": 2356051100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify that six products are displayed on the page",
  "description": "",
  "id": "login-page;verify-that-six-products-are-displayed-on-the-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on log in page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter \"standard_user\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter \"secret_sauce\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \u0027Login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify \u00276\u0027 number of products displayed on page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iAmOnLogInPage()"
});
formatter.result({
  "duration": 55100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 9
    }
  ],
  "location": "LoginTestSteps.iEnterAsUsername(String)"
});
formatter.result({
  "duration": 222084000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 9
    }
  ],
  "location": "LoginTestSteps.iEnterAsPassword(String)"
});
formatter.result({
  "duration": 135542200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 164236900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 10
    }
  ],
  "location": "LoginTestSteps.iVerifyNumberOfProductsDisplayedOnPage(int)"
});
formatter.result({
  "duration": 50925200,
  "status": "passed"
});
formatter.after({
  "duration": 840581400,
  "status": "passed"
});
});