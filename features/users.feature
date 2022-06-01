@users
Feature: Users
    As a user, I want the users-Api to send me user's information

    @api @data
    Scenario: users data
        When the user gets data from usersApi
            | items  |
            | id     |
            | name   |
            | email  |
            | gender |
            | status |
        Then data should be provided in the response
