Feature: The Para Bank Website

  Scenario Outline: As a user, I cannot register account with existing username

    Given In a register failed steps, I am on the login page
    When In a register failed steps, I click the register link
    And In a register failed steps, I register with <firstName>, <lastName>, <address>, <city>, <state>, <zipcode>, <phone>, <ssn>, <username>, and <password>
    Then In a register failed steps, I should see the error

    Examples:
      | username          | password       | fullName              | firstName     | lastName        | address                 | city      | state | zipcode | phone       | ssn       |
      | arisetiyawan      | UserBiasa2022  | Ari Setiyawan         | Ari           | Setiyawan       | Jl. Raya Sesetan No. 17 | Denpasar  | Bali  | 80362   | 08177788899 | 19700656  |
