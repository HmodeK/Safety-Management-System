import { BasePage } from "../infra/browser/base-page";
import { Locator, Page } from "playwright";
import { waitForElementToBeEnabled, waitForElementToBeVisible } from "../infra/utils/wait-for-elements";

export class AddingNewUserPage extends BasePage {

    private fullName: Locator
    private email: Locator
    private department: Locator
    // private userPermissions: Locator
    private createPassword: Locator
    private passwordConfirm: Locator
    private submitButton: Locator    
    private backButton: Locator    


    constructor(page: Page) {
        super(page)
        this.fullName = page.locator('//input[@id="name"]')
        this.email = page.locator('//input[@id="email"]')
        this.department = page.locator('//input[@class="ant-select-selection-search-input"]')
        // this.userPermissions = page.locator('//input[@type="search"]')
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


    selectDepartmentCategory = async (depCategory:string) => {
       await waitForElementToBeEnabled(this.department,3000,5)
        await this.department.first().selectOption(depCategory)

    }

    // selectUserPermissionsCategory = async (permissionsCategory:string) => {
    //     await this.userPermissions.last().selectOption(permissionsCategory)
    // }

    fillPassword =async (pass:string) => {
        await this.createPassword.fill(pass)
    }

    fillPasswordConfirm =async (passConfirm:string) => {
        await this.passwordConfirm.fill(passConfirm)
    }

    
    clickSubmitButton =async () => {
        await this.submitButton.click()
    }

    clickBackButton =async () => {
        await this.backButton.click()
    }


    makeNewUser =async (name:string,mail:string,depCategory:string,permissionsCategory:string,pass:string,passConfirm:string) => {
        await this.fillFullName(name)
        await this.fillemail(mail)
        await this.selectDepartmentCategory(depCategory)
        // await this.selectUserPermissionsCategory(permissionsCategory)
        await this.fillPassword(pass)
        await this.fillPasswordConfirm(passConfirm)
        await this.clickSubmitButton()
        await this.clickBackButton()
    }
}