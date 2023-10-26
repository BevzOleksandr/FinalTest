export default class PropertiesPage {
    constructor(page){
        this.page = page;
    }

    //Locators
    languageSettingsBtn = () => this.page.locator("//button[@class='uls-settings-trigger']");
    languageSwitchUK = () => this.page.locator("//button[@lang='uk']");
    languageSwitchEN = () => this.page.locator("//button[@lang='en']");
    languageSwitchElse = () => this.page.locator("//button[@class='uls-more-languages mw-ui-button webfonts-changed']");
    languageInputField = () => this.page.locator("//input[@class='uls-filterinput uls-languagefilter noime languagefilter']");
    languageAfterInputBtnUK = () => this.page.locator("//a[@lang='uk']");
    languageAfterInputBtnEN = () => this.page.locator("//a[@lang='en']");
    languageAcceptBtn = () => this.page.locator("//button[@data-i18n='ext-uls-language-settings-apply']");
    propertiesHeader = () => this.page.locator("//h1[@id='firstHeading']");
    logOutBtn = () => this.page.locator("//li[@id='pt-logout']");

    //Actions
    
    async checkLanguageChange(page, siteLanguage){
        if(siteLanguage === "Налаштування"){
            await this.languageSettingsBtn().click();
            const isLanguageBtnPresent = await !!this.languageSwitchEN();
            if(isLanguageBtnPresent){
                await this.languageSwitchEN().click();
                await this.languageAcceptBtn().click();
            } else{
                await this.languageSwitchElse().click();
                await this.languageInputField().fill("English");
                await this.languageAfterInputBtnEN().click();
                await this.languageAcceptBtn().click();
            }
    
            await page.waitForNavigation();
            await page.reload();
            const siteLanguageResult = await this.propertiesHeader().textContent();

            return siteLanguageResult;
    
        } else {
            await this.languageSettingsBtn().click();
            const isLanguageBtnPresent = await !!this.languageSwitchUK();
            if(isLanguageBtnPresent){
                await this.languageSwitchUK().click();
                await this.languageAcceptBtn().click();
            } else{
                await this.languageSwitchElse().click();
                await this.languageInputField().fill("Українська");
                await this.languageAfterInputBtnUK().click();
                await this.languageAcceptBtn().click();
            }
    
            await page.waitForNavigation();
            await page.reload();
            const siteLanguageResult = await this.propertiesHeader().textContent();
    
            return siteLanguageResult;
        }
    }

    async doFirstAccountEnglish(siteLanguage, page){
       let firstAccountSiteLanguageResult = "";
        if(siteLanguage === "Preferences"){
            return firstAccountSiteLanguageResult = siteLanguage;
        } else{
            await this.languageSettingsBtn().click();
            const isLanguageBtnPresent = await !!this.languageSwitchEN();
            if(isLanguageBtnPresent){
                await this.languageSwitchEN().click();
                await this.languageAcceptBtn().click();
            } else{
                await this.languageSwitchElse().click();
                await this.languageInputField().fill("English");
                await this.languageAfterInputBtnEN().click();
                await this.languageAcceptBtn().click();
            }
    
            await page.reload();
            return firstAccountSiteLanguageResult = await this.propertiesHeader().textContent();
        }
    }
}