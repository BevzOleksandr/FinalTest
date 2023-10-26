import {test, expect} from '@playwright/test'
import HomePage from '../pages/home.page';
import LoginPage from '../pages/login.page';
import PropertiesPage from '../pages/properties.page';
import dotenv from "dotenv";

dotenv.config({
    path:`tests/.env`
})


test('Change language', async ({page}) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const propertiesPage = new PropertiesPage(page);
    const firstAccountLogin = process.env.USERNAME_FIRST_ACCOUNT;
    const accountsPassword = process.env.PASSWORD_ALL_ACCOUNTS;

    homePage.startingTestRoad();
    await loginPage.login(firstAccountLogin, accountsPassword);

    await homePage.propertiesBtn().click();
    const siteLanguage = await propertiesPage.propertiesHeader().textContent();

    const resultTest = await propertiesPage.checkLanguageChange(page, siteLanguage);

    if(siteLanguage === "Налаштування"){
        expect(resultTest).toContain("Preferences");
    } else{
        expect(resultTest).toContain("Налаштування");
    }
   
})

test('Change language and relogin to account', async ({page}) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const propertiesPage = new PropertiesPage(page);
    const secondAccountLogin = process.env.USERNAME_SECOND_ACCOUNT;
    const accountsPassword = process.env.PASSWORD_ALL_ACCOUNTS;

    homePage.startingTestRoad();
    await loginPage.login(secondAccountLogin, accountsPassword);

    await homePage.propertiesBtn().click();
    const siteLanguage = await propertiesPage.propertiesHeader().textContent();

    const resultTest = await propertiesPage.checkLanguageChange(page, siteLanguage);

    await propertiesPage.logOutBtn().click();

    await homePage.loginBtn().click();
    await loginPage.login(secondAccountLogin, accountsPassword);

    await homePage.propertiesBtn().click();
    const reloadSiteLanguage = await propertiesPage.propertiesHeader().textContent();

    expect(reloadSiteLanguage).toEqual(resultTest);
})

test('Change language and log in from another account', async ({page}) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const propertiesPage = new PropertiesPage(page);
    const thirdAccountLogin = process.env.USERNAME_THIRD_ACCOUNT;
    const foursAccountLogin = process.env.USERNAME_FOURS_ACCOUNT;
    const accountsPassword = process.env.PASSWORD_ALL_ACCOUNTS;

    await homePage.startingTestRoad();
    await loginPage.login(thirdAccountLogin, accountsPassword);

    await homePage.propertiesBtn().click();
    const siteLanguage = await propertiesPage.propertiesHeader().textContent();
    const firstAccountSiteLanguageResult = propertiesPage.doFirstAccountEnglish(siteLanguage, page)

    await propertiesPage.logOutBtn().click();
    await homePage.loginBtn().click();
    await loginPage.login(foursAccountLogin, accountsPassword);

    await homePage.propertiesBtn().click();
    const newAccountSiteLanguage = await propertiesPage.propertiesHeader().textContent();

    expect(newAccountSiteLanguage).not.toEqual(firstAccountSiteLanguageResult);
})