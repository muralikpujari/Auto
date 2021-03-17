const { Given, When, Then } = require('@cucumber/cucumber');

const Register = require('../pageobjects/Register');
const LoginPage = require('../pageobjects/Login');



Given(/^navigate to Web page$/,function(){
    Register.navigateURL();
});



//Dynami Data fetching - 

// When(/^I login with (\w+) and (.+)$/, (username, password) => {
//     LoginPage.login(username, password)
// });

When(/^Register the details$/,function(){
    Register.registerUser();
    Register.addPersonalInfo();

});

When(/^I login with registered user$/,function() {
    
    LoginPage.login("Dynamic Data", 'Abcd1234')
});

When(/^Add Item to Cart$/,function() {
    Register.addWomenItemToCart()
});

When(/^validate UserName and SureName$/,function() {
    Register.validateDetails()
});

When(/^Checkout the cart$/,function() {
    Register.checkOutCart()
});

Then(/^Sign Out the application$/,function(){
    Register.signOut();
});









