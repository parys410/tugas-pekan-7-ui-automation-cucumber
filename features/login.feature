Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see my name <fullname>

    Examples:
      | username        | password              | fullname                         |
      | riadharmayanti  | AkuAnakSehat2022      | Ria Dharmayanti                  |