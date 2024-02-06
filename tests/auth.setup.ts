import { test as setup, expect } from '@playwright/test';
import configJson from "../config.json"
import { MainPage } from '../logic/main-page';

setup('authenticate', async ({ page }) => {
    await page.goto(configJson.uiUrl.websiteUrl);
    const mainPage = new MainPage(page)
    await mainPage.makeLogin(configJson.companyName, configJson.loginPage.userName, configJson.loginPage.password)
    await page.waitForURL(configJson.uiUrl.websiteUrlAfterLogin);

    await page.context().storageState({ path: configJson.authFile });
});
