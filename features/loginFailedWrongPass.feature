Feature: The Para Bank Website

  Scenario Outline: As a user, I can log into the secure area

    Given In a login failed wrong pass steps, I am on the login page
    When In a login failed wrong pass steps, I login with <username> and <password>
    Then In a login failed wrong pass steps, I should see error message

    Examples:
      | username          | password       | fullName        |
      | arisetiyawan      | PasswordSalah  | Ari Setiyawan   |
