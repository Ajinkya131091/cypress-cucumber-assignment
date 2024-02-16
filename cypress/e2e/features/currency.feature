@parentSuite("Settings_Functionality")
@suite("Settings_Currencies_Functionality")
@subSuite("Currencies_Functionality")
@epic("Settings_Currencies")
@story("Currencies_CRUD_Operation")
@owner("Ajinkya")
Feature: Settings > Currencies features

    @severity("high")
    @testID("4")
    @currency @regression
    Scenario: Verify CRUD operation on currenies tab in settings
        Given I am in login page
        When I enter valid username and password
        And I click on login button
        Then I should logged in and redirected to dashboard page
        When I click on settings dropdown
        And I click on currencies tab
        Then I click on Add button to add new currency
        When I select dropdown for status as "Enabled"
        And I input data for name as "CAN"
        And I select dropdown for country as "Canada"
        And I input rate as "123"
        And I click on save button
        And I edit the latest currency entry
        And I select dropdown for status as "Disabled"
        And I click on save button
        And I delete the latest currency entry

    @severity("high")
    @testID("5")
    @currency @regression
    Scenario: Verify validation message is displayed while adding new currency (Negative Scenario)
        Given I am in login page
        When I enter valid username and password
        And I click on login button
        Then I should logged in and redirected to dashboard page
        When I click on settings dropdown
        And I click on currencies tab
        Then I click on Add button to add new currency
        And I click on save button
        Then I am able to see validation message when i save currency