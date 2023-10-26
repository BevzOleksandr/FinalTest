export default class HomePage {
    constructor(page){
        this.page = page;
    }

    //Locators
    loginBtn = () => this.page.locator("//li[@id='pt-login']");
    propertiesBtn = () => this.page.locator("//li[@id='pt-preferences']");


    //Actions
    startingTestRoad = async() => {
    await this.page.goto("https://uk.wikipedia.org/wiki/"); 
    await this.loginBtn().click();
    }
}