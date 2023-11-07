exports.PropertiesPage = class PropertiesPage {
   
    constructor(page){
        this.page = page;
    
        //Locators
        this.languageSettingsBtn = page.locator("button.uls-settings-trigger");
        this.languageSwitchUK = page.locator("button[lang='uk']");
        this.languageSwitchEN = page.locator("button[lang='en']");
        this.languageSwitchElse = page.locator("button.uls-more-languages.mw-ui-button.webfonts-changed");
        this.languageInputField = page.locator("input.uls-filterinput.uls-languagefilter.noime.languagefilter");
        this.languageAfterInputBtnUK = page.locator("a[lang='uk']");
        this.languageAfterInputBtnEN = page.locator("a[lang='en']");
        this.languageAcceptBtn = page.locator("button[data-i18n='ext-uls-language-settings-apply']");
        this.propertiesHeader = page.locator("h1#firstHeading");
        this.logOutBtn = page.locator("li#pt-logout");
    }
    //Actions
    
    async checkLanguageChange(page, siteLanguage){
        if(siteLanguage === "Налаштування"){
            await this.languageSettingsBtn.click();
            const isLanguageBtnPresent = await !!this.languageSwitchEN;
            if(isLanguageBtnPresent){
                await this.languageSwitchEN.click();
                await this.languageAcceptBtn.click();
            } else{
                await this.languageSwitchElse.click();
                await this.languageInputField.fill("English");
                await this.languageAfterInputBtnEN.click();
                await this.languageAcceptBtn.click();
            }
    
            await page.waitForNavigation();
            await page.reload();
            const siteLanguageResult = await this.propertiesHeader.textContent();

            return siteLanguageResult;
    
        } else {
            await this.languageSettingsBtn.click();
            const isLanguageBtnPresent = await !!this.languageSwitchUK;
            if(isLanguageBtnPresent){
                await this.languageSwitchUK.click();
                await this.languageAcceptBtn.click();
            } else{
                await this.languageSwitchElse.click();
                await this.languageInputField.fill("Українська");
                await this.languageAfterInputBtnUK.click();
                await this.languageAcceptBtn.click();
            }
    
            await page.waitForNavigation();
            await page.reload();
            const siteLanguageResult = await this.propertiesHeader.textContent();
    
            return siteLanguageResult;
        }
    }

    async doFirstAccountEnglish(siteLanguage, page){
        if(siteLanguage === "Preferences"){
            const firstAccountSiteLanguageResult = siteLanguage;
            return firstAccountSiteLanguageResult;
        } else{
            await this.languageSettingsBtn.click();
            const isLanguageBtnPresent = await !!this.languageSwitchEN;
            if(isLanguageBtnPresent){
                await this.languageSwitchEN.click();
                await this.languageAcceptBtn.click();
            } else{
                await this.languageSwitchElse.click();
                await this.languageInputField.fill("English");
                await this.languageAfterInputBtnEN.click();
                await this.languageAcceptBtn.click();
            }
    
            await page.reload();
            const firstAccountSiteLanguageResult = await this.propertiesHeader.textContent();
            return firstAccountSiteLanguageResult;
        }
    }
}