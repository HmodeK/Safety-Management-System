import { BasePage } from "../infra/browser/base-page";
import { Locator, Page } from "playwright";
import { waitForElementToBeEnabled, waitForElementToBeVisible } from "../infra/utils/wait-for-elements";

export class FormAssistantSafetyPage extends BasePage {


    private constructionOperation:Locator
    private siteAndItsAddress:Locator
    private WorkManagerName:Locator
    private safetyAssistantfield:Locator
    private safetyAssistant:Locator
    private dateOfInspection:Locator
    
    
    constructor(page:Page){
    super(page)
    this.constructionOperation = page.locator('//input[@id="control-hooks_constructorName"]')
    this.siteAndItsAddress  = page.locator('//input[@id="control-hooks_siteInfo"]')
    this.WorkManagerName  = page.locator('//input[@id="control-hooks_managerName"]')
    this.safetyAssistantfield = page.locator('//input[@type="search"]')
    this.safetyAssistant = page.locator('//div[@class="ant-select-item-option-content"]').nth(0)
    this.dateOfInspection = page.locator('//*[@id="control-hooks_date"]')
    this.initPage()
    }

    fillConstructionOperation =async (ConstructName:string) => {
        await this.constructionOperation.type(ConstructName)
    }

    fillSiteAndItsAddress =async (siteAndAddressName:string) => {
        await this.siteAndItsAddress.type(siteAndAddressName)
    }

    fillWorkManagerName =async (WorkManagName :string) => {
        await this.WorkManagerName.type(WorkManagName )
    }

    selectSafetyAssistant = async () => {
        await this.safetyAssistantfield.click()
        await waitForElementToBeVisible(this.safetyAssistant,2000,5)
        await this.safetyAssistant.click()
    }

    filldateOfInspection = async () => {
            const now = new Date();
            const currentDate = now.toISOString().slice(0, 10); // Get current date YYYY-MM-DD format
            const currentTime = now.toTimeString().slice(0, 8); // Get current time HH:MM:SS format
    
            const currentDateTime = `${currentDate} ${currentTime}`;
    
            await this.dateOfInspection.type(currentDateTime); 
        }
   
        makeNewForm =async (ConstructName:string,siteAndAddressName:string,WorkManagName:string) => {
            await this.fillConstructionOperation(ConstructName)
            await this.fillSiteAndItsAddress(siteAndAddressName)
            await this.fillWorkManagerName(WorkManagName)
            await this.selectSafetyAssistant()
            await this.filldateOfInspection()
          
        }

}