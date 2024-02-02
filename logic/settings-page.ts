import { allowedNodeEnvironmentFlags } from "process";
import { BasePage } from "../infra/browser/base-page";
import { Locator,Page } from "playwright";

export class SettingsPage extends BasePage {

    private userManagement : Locator

    constructor(page:Page){
        super(page)
        this.userManagement = page.locator('//div[@class="card-child"]').first()
        this.initPage()
    }

    clickUserManagement = async () => {
        await this.userManagement.click()
    }
}