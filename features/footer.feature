@footer
Feature: Footer
  In order to provide some mandatory information to the user in the footer
  As a user
  I want to see footer mandatory elements and access to the pages and their content

  @api @elements
  Scenario: Links name content by api
    When the user gets footer data from api
      | regul | expectedLinkText                   |
      | fr    | À propos de Betclic                |
      | fr    | Conditions générales d'utilisation |
      | fr    | Respect de la Vie Privée & Cookies |
      | fr    | Jeu responsable                    |
      | fr    | Bonus Bienvenue                    |
      | fr    | Recrutement                        |
    Then the user should receive text content in the api response

  @ui @linksAndPages
  Scenario: Links and pages content by ui
    Given a user coming to Betclic
    When the user goes to the link in footer
      | regul | linkName          | button              | expectedDescription                                                                                                 |
      | fr    | about             | À propos de Betclic | Betclic possède une offre de paris sportifs complète sur l'ensemble des sports autorisés par l'ANJ.                 |
      | fr    | responsibleGaming | Jeu responsable     | La pratique des jeux d’argent est récréative quand elle est avant tout une source de divertissement et d’amusement. |
    Then the user should see text content in the page



