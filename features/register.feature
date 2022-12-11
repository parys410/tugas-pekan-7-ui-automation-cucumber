Feature: The Para Bank Website

  Scenario Outline: As a user, I can register account

    Given I am on the login page
    When I click the register link
    And I am on the register page
    And I register with <firstName>, <lastName>, <address>, <city>, <state>, <zipcode>, <phone>, <ssn>, <username>, and <password>
    Then I should see my name <fullName> and my username <username> at the register.htm page

    Examples:
      | username            | password          | fullName        | firstName  | lastName    | address                 | city      | state | zipcode | phone       | ssn       |
      | putuarysetiyawan    | AkuAnakSehat2022  | Putu Ary        | Putu       | Ary         | Jl. Raya Sesetan No. 17 | Denpasar  | Bali  | 80362   | 08177788899 | 19700635  |
