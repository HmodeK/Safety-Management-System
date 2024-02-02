import { BrowserWrapper } from "../infra/browser/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import configJson from "../config.json"
import { MainPage } from "../logic/main-page";
import { HomePage } from "../logic/home-page";
     
test.describe('logout test ', () => {
    let browser: BrowserWrapper;
    let page: Page;

    
    test.beforeEach(async () => {
        browser = new BrowserWrapper;
        page = await browser.getPage(configJson.uiUrl.websiteUrl)
        const mainPage = new MainPage(page)
        await mainPage.makeLogin(configJson.companyName,configJson.loginPage.userName,configJson.loginPage.password)    
    }); 

    test.afterEach(async () => {
        await browser.closeBrowser()
    });

    test('Check if the user has logged out', async () => {
        
        const homePage = new HomePage(page)
        await homePage.makeLoggedOut()
        const mainPage2 = new MainPage(page)
        expect(await mainPage2.getTitle()).toContain('דף כניסה')

    })
})