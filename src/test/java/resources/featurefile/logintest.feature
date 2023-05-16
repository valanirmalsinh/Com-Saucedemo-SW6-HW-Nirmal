Feature: Login page
  As a user I want to check Login page functionality

@sanity @regression
  Scenario: User should be able to login successfully with valid credentials
    Given   I am on log in page
    When    I enter "standard_user" as username
    And     I enter "secret_sauce" as password
    And     I click on 'Login' button
    Then    I verify the text "Products" on product page

  @smoke @regression
    Scenario: Verify that six products are displayed on the page
      Given   I am on log in page
      When    I enter "standard_user" as username
      And     I enter "secret_sauce" as password
      And     I click on 'Login' button
      Then    I verify '6' number of products displayed on page