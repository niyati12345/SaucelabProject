$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resource/Features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "login functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Run"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "user should able to login successfully with valid credential",
  "description": "",
  "id": "login-functionality;user-should-able-to-login-successfully-with-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user enter \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "enter \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should successfully login with valid credencial",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login-functionality;user-should-able-to-login-successfully-with-valid-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "login-functionality;user-should-able-to-login-successfully-with-valid-credential;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 17,
      "id": "login-functionality;user-should-able-to-login-successfully-with-valid-credential;;2"
    },
    {
      "cells": [
        "admin",
        "admin123"
      ],
      "line": 18,
      "id": "login-functionality;user-should-able-to-login-successfully-with-valid-credential;;3"
    },
    {
      "cells": [
        "Admin",
        "dvuh"
      ],
      "line": 19,
      "id": "login-functionality;user-should-able-to-login-successfully-with-valid-credential;;4"
    },
    {
      "cells": [
        "BVHDC",
        "NUHHF"
      ],
      "line": 20,
      "id": "login-functionality;user-should-able-to-login-successfully-with-valid-credential;;5"
    },
    {
      "cells": [
        "",
        ""
      ],
      "line": 21,
      "id": "login-functionality;user-should-able-to-login-successfully-with-valid-credential;;6"
    },
    {
      "cells": [
        "Admin",
        ""
      ],
      "line": 22,
      "id": "login-functionality;user-should-able-to-login-successfully-with-valid-credential;;7"
    },
    {
      "cells": [
        "",
        "admin123"
      ],
      "line": 23,
      "id": "login-functionality;user-should-able-to-login-successfully-with-valid-credential;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9573258393,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "duration": 96267452,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "user should able to login successfully with valid credential",
  "description": "",
  "id": "login-functionality;user-should-able-to-login-successfully-with-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user enter \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "enter \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should successfully login with valid credencial",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userEnter(String)"
});
formatter.result({
  "duration": 412856261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.enter(String)"
});
formatter.result({
  "duration": 1078562170,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickOnLoginButton()"
});
formatter.result({
  "duration": 266183319,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSuccessfullyLoginWithValidCredencial()"
});
formatter.result({
  "duration": 69436625,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat OrangeHrmSaucelab.Utlis.asserturl(Utlis.java:23)\r\n\tat OrangeHrmSaucelab.DashboardPage.verifyDashboardPage(DashboardPage.java:7)\r\n\tat OrangeHrmSaucelab.MyStepdefs.userShouldSuccessfullyLoginWithValidCredencial(MyStepdefs.java:41)\r\n\tat ✽.Then user should successfully login with valid credencial(src/test/Resource/Features/Login.feature:13)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!..Scenario Failed.....!!!!!! Please see attached screenshot for the arror/issue");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 837997827,
  "status": "passed"
});
formatter.before({
  "duration": 8943553211,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "duration": 81010,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "user should able to login successfully with valid credential",
  "description": "",
  "id": "login-functionality;user-should-able-to-login-successfully-with-valid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user enter \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "enter \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should successfully login with valid credencial",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userEnter(String)"
});
formatter.result({
  "duration": 321528957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.enter(String)"
});
formatter.result({
  "duration": 1116357949,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickOnLoginButton()"
});
formatter.result({
  "duration": 380334934,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSuccessfullyLoginWithValidCredencial()"
});
formatter.result({
  "duration": 67668698,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat OrangeHrmSaucelab.Utlis.asserturl(Utlis.java:23)\r\n\tat OrangeHrmSaucelab.DashboardPage.verifyDashboardPage(DashboardPage.java:7)\r\n\tat OrangeHrmSaucelab.MyStepdefs.userShouldSuccessfullyLoginWithValidCredencial(MyStepdefs.java:41)\r\n\tat ✽.Then user should successfully login with valid credencial(src/test/Resource/Features/Login.feature:13)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!..Scenario Failed.....!!!!!! Please see attached screenshot for the arror/issue");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 805562276,
  "status": "passed"
});
formatter.before({
  "duration": 9632791629,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "duration": 82110,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "user should able to login successfully with valid credential",
  "description": "",
  "id": "login-functionality;user-should-able-to-login-successfully-with-valid-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user enter \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "enter \"dvuh\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should successfully login with valid credencial",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userEnter(String)"
});
formatter.result({
  "duration": 425875055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dvuh",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.enter(String)"
});
formatter.result({
  "duration": 1363650893,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickOnLoginButton()"
});
formatter.result({
  "duration": 258582302,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSuccessfullyLoginWithValidCredencial()"
});
formatter.result({
  "duration": 58856930,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat OrangeHrmSaucelab.Utlis.asserturl(Utlis.java:23)\r\n\tat OrangeHrmSaucelab.DashboardPage.verifyDashboardPage(DashboardPage.java:7)\r\n\tat OrangeHrmSaucelab.MyStepdefs.userShouldSuccessfullyLoginWithValidCredencial(MyStepdefs.java:41)\r\n\tat ✽.Then user should successfully login with valid credencial(src/test/Resource/Features/Login.feature:13)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!..Scenario Failed.....!!!!!! Please see attached screenshot for the arror/issue");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1198650614,
  "status": "passed"
});
formatter.before({
  "duration": 8391578838,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "duration": 83943,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "user should able to login successfully with valid credential",
  "description": "",
  "id": "login-functionality;user-should-able-to-login-successfully-with-valid-credential;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user enter \"BVHDC\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "enter \"NUHHF\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should successfully login with valid credencial",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BVHDC",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userEnter(String)"
});
formatter.result({
  "duration": 418753501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NUHHF",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.enter(String)"
});
formatter.result({
  "duration": 1049765474,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickOnLoginButton()"
});
formatter.result({
  "duration": 264972933,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSuccessfullyLoginWithValidCredencial()"
});
formatter.result({
  "duration": 52518350,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat OrangeHrmSaucelab.Utlis.asserturl(Utlis.java:23)\r\n\tat OrangeHrmSaucelab.DashboardPage.verifyDashboardPage(DashboardPage.java:7)\r\n\tat OrangeHrmSaucelab.MyStepdefs.userShouldSuccessfullyLoginWithValidCredencial(MyStepdefs.java:41)\r\n\tat ✽.Then user should successfully login with valid credencial(src/test/Resource/Features/Login.feature:13)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!..Scenario Failed.....!!!!!! Please see attached screenshot for the arror/issue");
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 882889867,
  "status": "passed"
});
formatter.before({
  "duration": 9145126053,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "duration": 90907,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "user should able to login successfully with valid credential",
  "description": "",
  "id": "login-functionality;user-should-able-to-login-successfully-with-valid-credential;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user enter \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "enter \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should successfully login with valid credencial",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userEnter(String)"
});
formatter.result({
  "duration": 354928931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.enter(String)"
});
formatter.result({
  "duration": 283674162,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickOnLoginButton()"
});
formatter.result({
  "duration": 498714469,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSuccessfullyLoginWithValidCredencial()"
});
formatter.result({
  "duration": 57823593,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat OrangeHrmSaucelab.Utlis.asserturl(Utlis.java:23)\r\n\tat OrangeHrmSaucelab.DashboardPage.verifyDashboardPage(DashboardPage.java:7)\r\n\tat OrangeHrmSaucelab.MyStepdefs.userShouldSuccessfullyLoginWithValidCredencial(MyStepdefs.java:41)\r\n\tat ✽.Then user should successfully login with valid credencial(src/test/Resource/Features/Login.feature:13)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!..Scenario Failed.....!!!!!! Please see attached screenshot for the arror/issue");
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 1052403616,
  "status": "passed"
});
formatter.before({
  "duration": 9882876671,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "duration": 22727,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "user should able to login successfully with valid credential",
  "description": "",
  "id": "login-functionality;user-should-able-to-login-successfully-with-valid-credential;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user enter \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "enter \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should successfully login with valid credencial",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userEnter(String)"
});
formatter.result({
  "duration": 414930265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.enter(String)"
});
formatter.result({
  "duration": 330164410,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickOnLoginButton()"
});
formatter.result({
  "duration": 998271663,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSuccessfullyLoginWithValidCredencial()"
});
formatter.result({
  "duration": 93469488,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat OrangeHrmSaucelab.Utlis.asserturl(Utlis.java:23)\r\n\tat OrangeHrmSaucelab.DashboardPage.verifyDashboardPage(DashboardPage.java:7)\r\n\tat OrangeHrmSaucelab.MyStepdefs.userShouldSuccessfullyLoginWithValidCredencial(MyStepdefs.java:41)\r\n\tat ✽.Then user should successfully login with valid credencial(src/test/Resource/Features/Login.feature:13)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!..Scenario Failed.....!!!!!! Please see attached screenshot for the arror/issue");
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 1181241147,
  "status": "passed"
});
formatter.before({
  "duration": 9698100772,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "duration": 79544,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "user should able to login successfully with valid credential",
  "description": "",
  "id": "login-functionality;user-should-able-to-login-successfully-with-valid-credential;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user enter \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "enter \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should successfully login with valid credencial",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.userEnter(String)"
});
formatter.result({
  "duration": 563368567,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.enter(String)"
});
formatter.result({
  "duration": 647300861,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickOnLoginButton()"
});
formatter.result({
  "duration": 1097652321,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSuccessfullyLoginWithValidCredencial()"
});
formatter.result({
  "duration": 96429839,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat OrangeHrmSaucelab.Utlis.asserturl(Utlis.java:23)\r\n\tat OrangeHrmSaucelab.DashboardPage.verifyDashboardPage(DashboardPage.java:7)\r\n\tat OrangeHrmSaucelab.MyStepdefs.userShouldSuccessfullyLoginWithValidCredencial(MyStepdefs.java:41)\r\n\tat ✽.Then user should successfully login with valid credencial(src/test/Resource/Features/Login.feature:13)\r\n",
  "status": "failed"
});
formatter.write("!!!!!!..Scenario Failed.....!!!!!! Please see attached screenshot for the arror/issue");
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 1068694338,
  "status": "passed"
});
});