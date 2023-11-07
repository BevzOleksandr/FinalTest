exports.LoginPage = class LoginPage {
    constructor(page){
        this.page = page;

        //Locators
        this.loginInputField = page.locator("input#wpName1");
        this.passwordInputField = page.locator("input#wpPassword1");
        this.enterBtn = page.locator("button#wpLoginAttempt");
    }

    //Actions
    
    async login(login, password) {
        await this.loginInputField.fill(login);
        await this.passwordInputField.fill(password);
        await this.enterBtn.click();
    }
}