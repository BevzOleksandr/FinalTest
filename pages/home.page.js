exports.HomePage = class HomePage {
    constructor(page){
        this.page = page;

        //Locators
        this.loginBtn = page.locator("li#pt-login");
        this.propertiesBtn = page.locator("li#pt-preferences");
    }

    //Actions
}