Feature: Register on the website

  Scenario Outline: Register the User in Automation Practice Website

    Given navigate to Web page
    When Register the details
    Then Sign Out the application

 Scenario Outline: validate the registered user

    Given navigate to Web page
    When Sign Out the application
    When I login with registered user
    Then Sign Out the application 

 Scenario Outline: Add Item to Cart

    Given navigate to Web page
    When I login with registered user
    When Add Item to Cart
    Then Sign Out the application 
   



    Examples:
      | username | password             |
      | xase1234@gmail.com | Abcd1234 |
  
