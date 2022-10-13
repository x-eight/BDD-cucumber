Feature: Create new Users

    Scenario Outline: When an user need to create account
        Given Api to create it's working
        When Input the following json <data>
        Then the response is <response>

        Examples:
            | data                                                     | response                                                 |
            | {name: "saul",email: "saul@test.com",password: "test"}   | {name: "saul",email: "saul@test.com",password: "test"}   |
            | {name: "carlos",email: "saul@test.com",password: "test"} | {name: "carlos",email: "saul@test.com",password: "test"} |
            | {name: "luis",email: "saul@test.com",password: "test"}   | {name: "luis",email: "saul@test.com",password: "test"}   |





