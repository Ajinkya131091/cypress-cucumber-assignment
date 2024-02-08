Feature: Login features

    @login @smoke @regression
    Scenario: Verify user is able to login to website
        Given I am in login page
        When I enter "admin@phptravels.com" in username field
        And I enter "demoadmin" in password field
        And I click on login button
        Then I should logged in and redirected to dashboard page

    @login @regression
    Scenario: Verify user is able to login to website by using fixtures
        Given I am in login page
        When I enter valid username and password
        And I click on login button

    @login @regression
    Scenario Outline: Verify user is not able to login to website with invalid credentials
        Given I am in login page
        Then I enter invalid credentials and validate error
            | test1@phptravels.com | test1 |
            | test2@phptravels.com | test2 |

