Feature: The Para Bank Website

  Scenario Outline: As a user, I can register account

    Given In a register steps, I am on the login page
    When In a register steps, I click the register link
    And In a register steps, I register with <firstName>, <lastName>, <address>, <city>, <state>, <zipcode>, <phone>, <ssn>, <username>, and <password>
    Then In a register steps, I should see my name <fullName>

    Examples:
      | username          | password       | fullName              | firstName     | lastName        | address                 | city      | state | zipcode | phone       | ssn       |
      | parys612          | PassValid2022  | Ary Setiyawan         | Ary           | Setiyawan       | Jl. Raya Sesetan No. 17 | Denpasar  | Bali  | 80362   | 08177788899 | 19700673  |
