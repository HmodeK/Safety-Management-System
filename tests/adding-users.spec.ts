import { BrowserWrapper } from "../infra/browser/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import configJson from "../config.json"
import { MainPage } from "../logic/main-page";
import { HomePage } from "../logic/home-page";
import { SettingsPage } from "../logic/settings-page";
import { AddingNewUserPage } from "../logic/adding-new-user-page";
import { UsersPage } from "../logic/users-page";


test.describe('login test site', () => {
    let browser: BrowserWrapper;
    let page: Page;


    test.beforeEach(async () => {
        browser = new BrowserWrapper;
        page = await browser.getPage(configJson.uiUrl.websiteUrl)
        const mainPage = new MainPage(page)
        await mainPage.makeLogin(configJson.companyName, configJson.loginPage.userName, configJson.loginPage.password)
        
    });

    test.afterAll(async () => {
        await browser.closeBrowser()
    });


    test('', async () => {
      const homePage = new HomePage(page)
      await homePage.clickSystemSettings()
      const setting = new SettingsPage(page)
      await setting.clickUserManagement()
      const clickToAdd = new UsersPage(page)
      await clickToAdd.clickAdd()
      const adding = new AddingNewUserPage(page)
      await adding.makeNewUser(configJson.user["full name"],configJson.user.email,
      configJson.user.department["Acre construction site"],configJson.user["User permissions"]["system administrator"],
      configJson.user.createPassword,configJson.user.confirmPassword)

      await page.waitForTimeout(5000)
    })
})