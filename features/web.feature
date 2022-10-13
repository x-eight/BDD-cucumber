Feature: Show registration confirmation

    Scenario: Valid data of name and dni is registered
        Given User enters the dashboard
        When Enter name "saul"
        And Enter DNI 1234567
        And Send the data
        Then He should receive the code "saul-1234567"