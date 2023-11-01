exports.HomePage = class HomePage {
    constructor(page){
        this.page = page;

        //Locators
        this.loginBtn = page.locator("//li[@id='pt-login']");
        this.propertiesBtn = page.locator("//li[@id='pt-preferences']");
    }

    //Actions
}