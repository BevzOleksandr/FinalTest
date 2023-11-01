exports.LoginPage = class LoginPage {
    constructor(page){
        this.page = page;

        //Locators
        this.loginInputField = page.locator("//input[@id='wpName1']");
        this.passwordInputField = page.locator("//input[@id='wpPassword1']");
        this.enterBtn = page.locator("//button[@id='wpLoginAttempt']");
    }

    //Actions
    
    async login(login, password) {
        await this.loginInputField.fill(login);
        await this.passwordInputField.fill(password);
        await this.enterBtn.click();
    }
}