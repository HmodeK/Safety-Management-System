import { BrowserWrapper } from "../infra/browser/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import configJson from "../config.json"
import { HomePage } from "../logic/home-page";
import { SettingsPage } from "../logic/settings-page";
import { AddingNewUserPage } from "../logic/adding-new-user-page";
import { UsersPage } from "../logic/users-page";

test.describe('adding new user', () => {
    let browser: BrowserWrapper;
    let page: Page;

    test.beforeEach(async () => {
        browser = new BrowserWrapper;
        page = await browser.getPage(configJson.uiUrl.websiteUrl)
    });

    test.afterAll(async () => {
        await browser.closeBrowser()
    });

//in users page i found a bug[not adding a new user]

    test('check if the new user is added', async () => {
        const homePage = new HomePage(page)
        await homePage.clickSystemSettings()
        const setting = new SettingsPage(page)
        await setting.clickUserManagement()
        const clickToAdd = new UsersPage(page)
        await clickToAdd.clickAdd()
        const adding = new AddingNewUserPage(page)
        await adding.makeNewUser(configJson.user.fullName, configJson.user.email,
            configJson.user.createPassword, configJson.user.confirmPassword)
        await page.waitForTimeout(1000)
        expect(await clickToAdd.checkIfNewUserExist(configJson.user.fullName)).toBeTruthy()
    })

})