@Run
Feature:login functionality

  Background:
    Given user is on login page

  Scenario Outline: user should able to login successfully with valid credential


    When user enter "<username>"
    And  enter "<password>"
    And  click on login button
    Then user should successfully login with valid credencial
    Examples:

      | username | password |
      | Admin    | admin123 |
      | admin    | admin123 |
      | Admin    | dvuh     |
      | BVHDC    | NUHHF    |
      |          |          |
      | Admin    |          |
      |          | admin123 |

