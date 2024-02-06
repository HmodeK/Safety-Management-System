import { BrowserWrapper } from "../infra/browser/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import configJson from "../config.json"
import { MainPage } from "../logic/main-page";
    
test.describe('login test site', () => {
    let browser: BrowserWrapper;
    let page: Page;

    test.beforeEach(async () => {
        browser = new BrowserWrapper;
        page = await browser.getPage(configJson.uiUrl.websiteUrl)       
    }); 

    test.afterEach(async () => {
        await browser.closeBrowser()
    });

    test('check user is logged in & navigate to another URL' ,async () => {
        expect(configJson.uiUrl.websiteUrlAfterLogin).toBe("http://app.safetymsystem.com/app/index");
        await page.waitForTimeout(1000)  
    })
})