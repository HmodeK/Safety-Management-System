import { BasePage } from "../infra/browser/base-page";
import { Locator,Page } from "playwright";

export class HomePage extends BasePage {

    private listOfIcons : Locator
    private navigatelogoutIcon : Locator
    private logoutButton : Locator
    private SystemSettings : Locator

    constructor(page:Page){
        super(page)
        this.listOfIcons = page.locator('//div[@class="card-child"]')
        this.navigatelogoutIcon = page.locator('//*[@id="root"]/section/div/div[1]/div/span')
        this.logoutButton = page.locator('//ul[@class="gx-user-popover"]//li')
        this.SystemSettings = page.locator('//div[@class="ant-card-body"]')//5
      
        this.initPage()
    }

    clickBuildingsIcon =async () => {
        await this.listOfIcons.nth(3).click()
    }

    clickLogoutIcon =async () => {
        await this.navigatelogoutIcon.click()
    }

    clickLogoutButton =async () => {
        await this.logoutButton.first().click()
    }

    makeLoggedOut =async () => {
        await this.clickLogoutIcon()
        await this.clickLogoutButton()
        
    }

    clickSystemSettings =async () => {
        await this.SystemSettings.nth(5).click()
    }
    
    clickSafetyAssistantListIcon =async () => {
        await this.listOfIcons.nth(1).click()
    }

}