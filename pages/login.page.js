export default class LoginPage {
    constructor(page){
        this.page = page;
    }

    //Locators
    loginInputField = () => this.page.locator("//input[@id='wpName1']");
    passwordInputField = () => this.page.locator("//input[@id='wpPassword1']");
    enterBtn = () => this.page.locator("//button[@id='wpLoginAttempt']");

    //Actions
    async login(login, password) {
        await this.loginInputField().fill(login);
        await this.passwordInputField().fill(password);
        await this.enterBtn().click();
    }
}