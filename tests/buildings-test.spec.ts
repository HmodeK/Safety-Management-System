import { BrowserWrapper } from "../infra/browser/browser-wrapper";
import { test, Page, expect } from '@playwright/test';
import configJson from "../config.json"
import { HomePage } from "../logic/home-page";
import { BuildingsPage } from "../logic/buildings-page";
import { AddingNewBuildingPage } from "../logic/adding-new-building-page";

test.describe('add a buildings', () => {
    let browser: BrowserWrapper;
    let page: Page;

    test.beforeEach(async () => {
        browser = new BrowserWrapper;
        page = await browser.getPage(configJson.uiUrl.websiteUrl)
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
        const addingBuild = new AddingNewBuildingPage(page)
        await addingBuild.makeNewBuildingName(configJson.addingBuilding.buildingName,
            configJson.addingBuilding.totalFloors, configJson.addingBuilding.totalParkingLots,
            configJson.addingBuilding.totalElevators)
        expect(await building.checkIfNewBuildExist(configJson.addingBuilding.buildingName)).toBeTruthy()
    })
})