Feature: Create new User

    Scenario: When an user need to create account
        Given Api it's working
        When Input the following json
        ```
        {
        "name": "saul",
        "email": "saul@test.com",
        "password": "test"
        }
        ```
        Then the response is
```
{
"name": "saul",
"email": "saul@test.com",
"password": "test"
}
```