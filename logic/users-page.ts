import { BasePage } from "../infra/browser/base-page";
import { Locator, Page } from "playwright";

export class UsersPage extends BasePage {

    private addUser: Locator
    private usersList: Locator
    private removeButton: Locator
    private yesButtonPopup: Locator

    constructor(page: Page) {
        super(page)
        this.addUser = page.locator('//button[@type="button"]')//nth(1)
        this.usersList = page.locator('//td[@class="ant-table-cell"]')
        this.removeButton = page.locator('//div[@class="ant-space-item"]')
        this.yesButtonPopup = page.locator('//div[@class="ant-popover-buttons"]//button')
        this.initPage()
    }
    clickAdd = async () => {
        await this.addUser.nth(1).click()
    }

    checkIfNewUserExist = async (userName: string): Promise<boolean> => {
        const count = await this.usersList.count()
        for (let i = 0; i < count; i++) {
            if (await this.usersList.nth(i).innerText() === userName) {

                return true
            }

        }
        return false
    };
}