Feature: Register on the website 

Scenario Outline: Register the User in Automation Practice Website and Validate the user

    Given navigate to Web page
    When Register the details
    And validate UserName and SureName
    Then Sign Out the application

 Scenario Outline: Login with registered user and verify able to login or not

    Given navigate to Web page
    When Sign Out the application
    And I login with registered user 
    And validate UserName and SureName
    Then Sign Out the application 

 Scenario Outline: Add Item to Cart and Proceed to Checkout

    Given navigate to Web page
    When I login with registered user 
    And  Add Item to Cart
    And  Checkout the cart
    Then Sign Out the application  

     



    Examples:
      | username | password             |
      | xase1234@gmail.com | Abcd1234 |
  
