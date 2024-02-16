@parentSuite("Login_Functionality")
@suite("Login_Multiple_Ways")
@subSuite("Login_Valid_Invalid")
@epic("Login")
@story("Valid_And_Invalid_Login")
@owner("Ajinkya")
Feature: Login features

    @severity("critical")
    @testID("1")
    @login @smoke @regression
    Scenario: Verify user is able to login to website
        Given I am in login page
        When I enter "admin@phptravels.com" in username field
        And I enter "demoadmin" in password field
        And I click on login button
        Then I should logged in and redirected to dashboard page

    @severity("critical")
    @testID("2")
    @login @regression
    Scenario: Verify user is able to login to website by using fixtures
        Given I am in login page
        When I enter valid username and password
        And I click on login button

    @severity("critical")
    @testID("3")
    @login @regression
    Scenario Outline: Verify user is not able to login to website with invalid credentials
        Given I am in login page
        Then I enter invalid credentials and validate error
            | test1@phptravels.com | test1 |
            | test2@phptravels.com | test2 |

