import { BasePage } from "../infra/browser/base-page";
import { Locator,Page } from "playwright";
import { waitForElementToBeVisible, waitForTimeOut } from "../infra/utils/wait-for-elements";

export class AddingBuildingPage extends BasePage {

    private buildingName : Locator
    private totalFloors : Locator
    private totalParkingLots : Locator
    private totalElevators : Locator
    private submitButton : Locator
    private backButton : Locator

    constructor(page:Page){
        super(page)
        this.buildingName = page.locator('//input[@id="name"]')        
        this.totalFloors = page.locator('//input[@id="floors"]')        
        this.totalParkingLots = page.locator('//input[@id="parkingLots"]')        
        this.totalElevators = page.locator('//input[@id="elevators"]')        
        this.submitButton = page.locator('//button[@type="submit"]')        
        this.backButton = page.locator('//button[@type="button"]')        
        this.initPage()
    }


    fillBuildingName =async (buildName:string) => {
        await this.buildingName.fill(buildName)
    }

    fillTotalFloors =async (floors:string) => {
        await this.totalFloors.fill(floors)
    }

    fillTotalParkingLots =async (parkingLots:string) => {
        await this.totalParkingLots.fill(parkingLots)
    }

    fillTotalElevators =async (elevators:string) => {
        await this.totalElevators.fill(elevators)
    }

    clickSubmitButton =async () => {
        await this.submitButton.click()
    }

    clickBackButton =async () => {
        await this.backButton.click()
    }

    makeNewBuildingName =async (buildName:string,floors:string,parkingLots:string,elevators:string) => {
        await this.fillBuildingName(buildName)
        await this.fillTotalFloors(floors)
        await this.fillTotalParkingLots(parkingLots)
        await this.fillTotalElevators(elevators)
        await this.clickSubmitButton()
        await this.clickBackButton()
        await this.page.waitForTimeout(1000)  
        
    }
}