const Page = require('./page');
const Register = require('../pageobjects/Register');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class Login extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#email') }
    get inputPassword () { return $('#passwd') }
    get btnSubmit () { return $('#SubmitLogin') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {

        console.log("*********login***************");


        const elem = $("//*[contains(text(),'Sign in')]")
        elem.waitForDisplayed({ timeout: 30000 });

        browser.$("//*[contains(text(),'Sign in')]").click();
        browser.pause(5000); 

        this.inputUsername.setValue('Testabc'+Register.fetchuserIdDynamicNumber()+'@gmail.com');
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
        browser.pause(5000); 
 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new Login();
