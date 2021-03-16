const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Register extends Page {

    /**
     * define selectors using getter methods
     */
   
    get btnSubmit () { return $('#SubmitCreate') }

   


    /**
	 * navigate to URL
	 * @data[URL]
	 * @data[UserName]
	 * @data[Pwd]
	 */
	navigateURL() {

		console.log("*********navigateURL***************");
		browser.pause(5000);
		browser.url("http://automationpractice.com/index.php");
        browser.pause(10000);
       // browser.setWindowSize(1300, 1000);

        const elem = $("//*[contains(text(),'Cart')]")
        elem.waitForDisplayed({ timeout: 30000 });
		
	}

    /**
	 * register the User
	 * @data[URL]
	 * @data[UserName]
	 * @data[Pwd]
	 */
	registerUser() {

		console.log("*********registerUser***************");
		browser.pause(5000);
		
        const elem = $("//*[contains(text(),'Sign in')]")
        elem.waitForDisplayed({ timeout: 30000 });

         browser.$("//*[contains(text(),'Sign in')]").click();
         browser.pause(5000);  

         const elem1 = $("//*[@id='email_create']")
         elem1.waitForDisplayed({ timeout: 30000 }); 

         browser.$("//*[@id='email_create']").setValue('TESTMurali@gmail.com');
         this.btnSubmit.click(); 	

	}


     /**
	 * add Personal Info
	 * @data[FistName]
	 * @data[UserName]
	 * @data[Pwd]
	 */
	addPersonalInfo() {

		console.log("*********addPersonalInfo***************");
		browser.pause(5000);

        var values =["Murali","Krishna","Abcd1234","MuraliFist","KrishnaLast"]
		
        const elem = $("//*[@class='radio-inline'][1]//div")
        elem.waitForDisplayed({ timeout: 30000 });

        browser.$("//*[@class='radio-inline'][1]//div").click();
        browser.pause(5000);  

        browser.$("//*[@id='customer_firstname']").setValue(values[0]);
        browser.pause(3000);  


        browser.$("//*[@id='customer_lastname']").setValue(values[1]);
        browser.pause(3000);  


        browser.$("//*[@id='passwd']").setValue(values[2]);
        browser.pause(3000);  


        browser.$(`//*[@id="address1"]`).setValue('tirupati');
        browser.pause(3000);  


        browser.$(`//*[@id="city"]`).setValue('TPTY');
        browser.pause(3000);  

        const selectBox = $('#id_state');
        selectBox.selectByVisibleText('Alabama');
        

        browser.$(`//*[@id="postcode"]`).setValue('98001');
        browser.pause(3000);  


        browser.$(`//*[@id="phone_mobile"]`).setValue('123456789');
        browser.pause(3000);  

        browser.$(`//*[@id="alias"]`).setValue('abcddef');
        browser.pause(5000);  


        browser.$(`//*[@id="alias"]`).setValue('abcddef');

        browser.$(`//*[@id="submitAccount"]/span`).click();
        browser.pause(15000);  
 

	}


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     signOut () {
        console.log("*********signOut***************");

        const elem = $("//*[contains(text(),'Sign out')]")
        elem.waitForDisplayed({ timeout: 30000 });

         browser.$("//*[contains(text(),'Sign out')]").click();
         browser.pause(5000);  
    }


    /**
	 * Add Cart
	 * @data[URL]
	 * @data[UserName]
	 * @data[Pwd]
	 */
	addWomenItemToCart() {

		console.log("*********addWomenItemToCart***************");
		browser.pause(5000);
		
        const elem = $("//*[contains(text(),'Women')]")
        elem.waitForDisplayed({ timeout: 30000 });

        browser.$("//*[contains(text(),'Women')]").click();


        //For a Time Being i am hard coding the values and xpaths
         browser.$("//*[@id='center_column']/ul/li[1]/div/div[1]/div/a[1]/img").click();
         browser.pause(5000);  

         const elem1 = $("//*[contains(text(),'Add to cart')]")
        elem.waitForDisplayed({ timeout: 30000 });

        browser.$("//*[contains(text(),'Add to cart')]").click();

        const elem2 = $("//*[contains(text(),'Proceed to checkout')]")
        elem.waitForDisplayed({ timeout: 30000 });


         browser.$("//*[contains(text(),'Proceed to checkout')").click()
         browser.pause(10000);  


	}

     /**
     * overwrite specifc options to adapt it to page object
     */
      open () {
        return super.open('login');
    }
}

module.exports = new Register();
