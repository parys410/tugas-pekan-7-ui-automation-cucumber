Feature: The Para Bank Website

  Scenario Outline: As a user, I can log into the secure area

    Given In a login steps, I am on the login page
    When In a login steps, I login with <username> and <password>
    And In a login steps, I am on the overview page
    Then In a login steps, I should see my name <fullName>

    Examples:
      | username          | password          | fullName            |
      | parys513          | PassValid2022     | Ary Setiyawan       |
