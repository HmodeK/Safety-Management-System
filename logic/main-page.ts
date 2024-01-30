import { BasePage } from "../infra/browser/base-page";
import { Locator,Page } from "playwright";

export class MainPage extends BasePage{
    private companyName : Locator
    private  emailInput : Locator
    private passwordInput : Locator
    private submitButton : Locator

    constructor(page:Page){
        super(page)
        this.companyName = page.locator('//input[@id="basic_appName"]')
        this.emailInput  = page.locator('//input[@id="basic_email"]')
        this.passwordInput = page.locator('//input[@type="password"]')
        this.submitButton = page.locator('//button[@type="submit"]')
        this.initPage()
    }

    fillCompanyName =async (compName:string) => {
        await this.companyName.fill(compName)
    }
    
    fillEmail = async (email:string) => {
        await this.emailInput.fill(email)
    }

    fillPassword =async (password:string) => {
        await this.passwordInput.fill(password)
    }

    clickLoginButton =async () => {
        await this.submitButton.click()
    }

    makeLogin =async (compName:string,email:string , password:string) => {
        await this.fillCompanyName(compName)
        await this.fillEmail(email)
        await this.fillPassword(password)
        await this.clickLoginButton()
    }
}