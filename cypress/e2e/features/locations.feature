@parentSuite("Settings_Functionality")
@suite("Settings_Locations_Functionality")
@subSuite("Locations_Functionality")
@epic("Settings_Locations")
@story("Locations_CRUD_Operation")
@owner("Ajinkya")
Feature: Settings > Locations features

    @severity("high")
    @testID("6")
    @locations @regression
    Scenario: Verify CRUD operation on locations tab in settings
        Given I am in login page
        When I enter valid username and password
        And I click on login button
        Then I should logged in and redirected to dashboard page
        When I click on settings dropdown
        And I click on locations tab
        And I click on Add button to add new location
        When I select dropdown for status as "Disabled" in locations
        And I enter data for city as "Aarschot City" in locations
        And I select dropdown for country as "Belgium" in locations
        And I enter data for latitude as "123" in locations
        And I enter data for longitude as "456" in locations
        And I click on save button in locations
        And I edit the latest locations entry
        And I select dropdown for status as "Enabled" in locations
        And I click on save button in locations
        And I delete the latest locations entry