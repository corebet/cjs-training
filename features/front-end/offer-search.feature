@offering @search @ui
Feature: Offering Search
  In order to use the search in the offer
  As a user
  I want to find matches or competitions and access to the pages and their content

  @noResult
  Scenario: No result found
    Given a user coming to Betclic
    When the user searches matches or competitions with the input Réverbère
    Then the user should should see an error message as search result
      | expectedTitle   | expectedDescription                                                 |
      | Pas de résultat | Est-ce un match ou une compétition ?Peut être une faute de frappe ? |


  @atLeastOneResult
  Scenario: At least one result found
    Given a user coming to Betclic
    When the user searches matches or competitions with the input football
    Then the user should see at least one result