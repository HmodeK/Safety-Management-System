import { BasePage } from "../infra/browser/base-page";
import { Locator,Page } from "playwright";

export class UsersPage extends BasePage {

    private addUser : Locator
 
    constructor(page:Page){
        super(page)
        this.addUser = page.locator('//button[@type="button"]')//nth(1)
        this.initPage()
    }

    clickAdd =async () => {
        await this.addUser.nth(1).click()
    }
}