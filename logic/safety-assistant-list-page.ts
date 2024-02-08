import { BasePage } from "../infra/browser/base-page";
import { Locator, Page } from "playwright";

export class SafetyAssistantListPage extends BasePage {


private addSafetyAssistant:Locator


constructor(page:Page){
super(page)
this.addSafetyAssistant = page.locator('//button[@type="button"]')//nth(1)
this.initPage()
}

clickAdd = async () => {
    await this.addSafetyAssistant.nth(1).click()
}

}