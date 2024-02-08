import { BrowserWrapper } from "../infra/browser/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import configJson from "../config.json"
import { FormAssistantSafetyPage } from "../logic/form-assistant-safety-page";
import { SafetyAssistantListPage } from "../logic/safety-assistant-list-page";
import { HomePage } from "../logic/home-page";

test.describe('adding new user', () => {
    let browser: BrowserWrapper;
    let page: Page;

    test.beforeEach(async () => {
        browser = new BrowserWrapper;
        page = await browser.getPage(configJson.uiUrl.websiteUrl)
        const openAssistanSafetyList = new HomePage(page)
        await openAssistanSafetyList.clickSafetyAssistantListIcon()
    });

    test.afterAll(async () => {
        await browser.closeBrowser()
    });

    test('check if the new form is added', async () => {
        const addForm = new SafetyAssistantListPage(page)
        await addForm.clickAdd()
    const addAssistant = new FormAssistantSafetyPage(page)
    await addAssistant.makeNewForm("hmode","ako","hmode kanaan")
    await page.waitForTimeout(5000)

    })
})