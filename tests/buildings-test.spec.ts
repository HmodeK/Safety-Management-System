import { BrowserWrapper } from "../infra/browser/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import configJson from "../config.json"
import { MainPage } from "../logic/main-page";
import { HomePage } from "../logic/home-page";
import { BuildingsPage } from "../logic/buildings-page";
import { AddingBuildingPage } from "../logic/adding-building-page";

test.describe('login test site', () => {
    let browser: BrowserWrapper;
    let page: Page;


    test.beforeEach(async () => {
        browser = new BrowserWrapper;
        page = await browser.getPage(configJson.uiUrl.websiteUrl)
        const mainPage = new MainPage(page)
        await mainPage.makeLogin(configJson.companyName, configJson.loginPage.userName, configJson.loginPage.password)
        const homePage = new HomePage(page)
        await homePage.clickBuildingsIcon()

    });

    test.afterAll(async () => {
        const remove = new BuildingsPage(page)
        await remove.removeAllTheList()
        await browser.closeBrowser()
    });

    test('check if we are on the right page according to the icon we clicked on', async () => {
        const buildingsPage = new BuildingsPage(page)
        expect(await buildingsPage.getPageTitle()).toContain('בניינים')

    })


    test('check if the new building is added', async () => {
        const building = new BuildingsPage(page)
        await building.addNewBuilding()
        const addingBuild = new AddingBuildingPage(page)
        await addingBuild.makeNewBuildingName(configJson.addingBuilding["building name"], configJson.addingBuilding["Total floors"], configJson.addingBuilding["Total parking lots"], configJson.addingBuilding["Total elevators"])
        expect(await building.checkIfNewBuildExist(configJson.addingBuilding["building name"])).toBeTruthy()

    })
})