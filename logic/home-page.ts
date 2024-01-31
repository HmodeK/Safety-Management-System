import { BasePage } from "../infra/browser/base-page";
import { Locator,Page } from "playwright";
import { waitForElementToBeEnabled } from "../infra/utils/wait-for-elements";

export class HomePage extends BasePage {

    private buildingsIcon : Locator

    constructor(page:Page){
        super(page)
        this.buildingsIcon = page.locator('//div[@class="card-child"]')
        this.initPage()
    }

    clickBuildingsIcon =async () => {
        await this.buildingsIcon.nth(3).click()
    }


}