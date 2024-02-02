import { BasePage } from "../infra/browser/base-page";
import { Locator, Page } from "playwright";

export class BuildingsPage extends BasePage {

    private pageTitle: Locator
    private addButton: Locator
    private buildingsList: Locator
     private removeButton: Locator
     private yesButtonPopup: Locator

    constructor(page: Page) {
        super(page)
        this.pageTitle = page.locator('//h1[@title=" בניינים"]')
        this.addButton = page.locator('//button[@type="button"]')
        this.buildingsList = page.locator('//td[@class="ant-table-cell"]')
         this.removeButton = page.locator('//div[@class="ant-space-item"]')
         this.yesButtonPopup = page.locator('//div[@class="ant-popover-buttons"]//button')
        this.initPage()
    }

    getPageTitle = async (): Promise<string> => {
        return await this.pageTitle.innerText()
    }

    addNewBuilding = async () => {
        await this.addButton.nth(1).click()
    }

    checkIfNewBuildExist = async (buildName: string): Promise<boolean> => {
        const count = await this.buildingsList.count()
        for (let i = 0; i < count; i++) {
            if (await this.buildingsList.nth(i).innerText() === buildName) {

                return true
            }

        }
        return false
    };

    removeAllTheList = async () => {
        const count1 = await this.removeButton.count()
        for (let i = count1-1; i >=0; i--) {
            if (i % 2 == 1 ) {
                await this.removeButton.nth(i).click()
                await this.yesButtonPopup.last().click()
            }
            await this.page.waitForTimeout(1000)    
        }       
    };

}

