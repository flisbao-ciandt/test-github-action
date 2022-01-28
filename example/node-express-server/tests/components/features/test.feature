# language en

Feature: Test an api
    Scenario: When I access an api on endpoint /health it should return 200
        Given I make a request to url "http://localhost:3000/health"
        When I receive an answer from api
        Then I expect that the response status is 200
    
    Scenario: When I access an api on endpoint /notHealthy it should return 500
        Given I make a request to url "http://localhost:3000/notHealthy"
        When I receive an answer from api
        Then I expect that the response status is 500
    
    Scenario: When I access an api on endpoint /callAnotherApp it should return 200
        Given I am in session "default"
        And I make a request to url "http://localhost:3000/callAnotherApp"
        When I receive an answer from api
        Then I expect that the response status is 200

    Scenario: When I access an api on endpoint /callAnotherApp it should return 403
        Given I am in session "failure"
        And I make a request to url "http://localhost:3000/callAnotherApp"
        When I receive an answer from api
        Then I expect that the response status is 403        