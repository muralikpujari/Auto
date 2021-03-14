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
    LoginPage.login('aaa123@gmail.com', 'Abcd1234')
});


Then(/^Sign Out the application$/,function(){
    Register.signOut();
});









