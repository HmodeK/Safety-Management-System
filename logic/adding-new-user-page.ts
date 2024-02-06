import { BasePage } from "../infra/browser/base-page";
import { Locator, Page } from "playwright";
import { waitForElementToBeEnabled, waitForElementToBeVisible } from "../infra/utils/wait-for-elements";

export class AddingNewUserPage extends BasePage {

    private fullName: Locator
    private email: Locator
    private as: Locator
    private department: Locator
    private userPermissions: Locator
    private createPassword: Locator
    private passwordConfirm: Locator
    private submitButton: Locator    
    private backButton: Locator    


    constructor(page: Page) {
        super(page)
        this.fullName = page.locator('//input[@id="name"]')
        this.email = page.locator('//input[@id="email"]')
        this.as = page.locator('//input[@type="search"]')
        this.department = page.locator('//div[@class="ant-select-item-option-content"]')
        this.userPermissions = page.locator('//div[@class="ant-select-item-option-content"]')
        this.createPassword = page.locator('//input[@id="password"]')
        this.passwordConfirm = page.locator('//input[@id="passwordConfirm"]')
        this.submitButton = page.locator('//button[@type="submit"]')
        this.backButton = page.locator('//button[@type="button"]')
        this.initPage()
    }


    fillFullName =async (name:string) => {
        await this.fullName.type(name)
    }

    
    fillemail =async (mail:string) => {
        await this.email.type(mail)
    }


    selectDepartmentCategory = async () => {
        await this.as.first().click()
        // await waitForElementToBeVisible(this.department.nth(0),3000,5)
        await this.department.nth(0).click()

    }

    selectUserPermissionsCategory = async () => {
        await this.as.last().click()
        // await waitForElementToBeVisible(this.userPermissions.last(),3000,5)
        await this.userPermissions.last().click()
    }

    fillPassword =async (pass:string) => {
        await this.createPassword.type(pass)
    }

    fillPasswordConfirm =async (passConfirm:string) => {
        await this.passwordConfirm.type(passConfirm)
    }

    
    clickSubmitButton =async () => {
        await this.submitButton.click()
    }

    clickBackButton =async () => {
        await this.backButton.click()
    }


    makeNewUser =async (name:string,mail:string,pass:string,passConfirm:string) => {
        await this.fillFullName(name)
        await this.fillemail(mail)
        await this.selectDepartmentCategory()
        await this.selectUserPermissionsCategory()
        await this.fillPassword(pass)
        await this.fillPasswordConfirm(passConfirm)
        await this.clickSubmitButton()
        await this.clickBackButton()
    }
}