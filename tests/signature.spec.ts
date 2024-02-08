// import { test, Page, expect } from '@playwright/test';
// import { BrowserWrapper } from '../infra/browser/browser-wrapper';
// import configJson from "../config.json"

// let browser: BrowserWrapper;
// let page: Page;



// test.describe('Tasks test', () => {
//     test.beforeAll(async () => {
//         browser = new BrowserWrapper;
//     });
// })
//     test.beforeEach(async () => {
//         browser = new BrowserWrapper;
//         page = await browser.getPage(configJson.uiUrl.websiteUrl)
//         browser.maximizeWindow()
//     });

// test(`using mouse and keyboard`, async ({page}) => {

//   // Navigate to the webpage
//   await page.goto("http://app.safetymsystem.com/construction/add-site-report");
//   // Scroll the page down
 
//   // Define the locator for the square where the signature will be drawn
//   const squareLocator = '//canvas[@class="sigPad"]';

//   // Wait for the square to be visible
//    await page.waitForSelector(squareLocator);



//   // Get the bounding box of the square
//   const squareBoundingBox = await page.$eval(squareLocator, (element: HTMLElement) => {
//     const { top, left, width, height } = element.getBoundingClientRect();
//     return { top, left, width, height };
//   });

//   // Calculate the coordinates of the center of the square
//   const centerX = squareBoundingBox.left + squareBoundingBox.width / 2;
//   const centerY = squareBoundingBox.top + squareBoundingBox.height / 2;

//  // Simulate mouse actions to create an X-shaped signature
//  await page.mouse.move(centerX - 50, centerY - 50);
//  await page.mouse.down();
//  await page.mouse.move(centerX + 50, centerY + 50, { steps: 20 });
//  await page.mouse.up();

//  await page.mouse.move(centerX + 50, centerY - 50);
//  await page.mouse.down();
//  await page.mouse.move(centerX - 50, centerY + 50, { steps: 20 });
//  await page.mouse.up();

//   await page.keyboard.press("PageDown");

//   await page.waitForTimeout(5000)  


// })
