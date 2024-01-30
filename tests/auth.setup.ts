// import { test as setup, expect } from '@playwright/test';
// import configJson from "../config.json"
// import { MainPage } from '../logic/main-page';
// import { BrowserWrapper } from '../infra/browser-wrapper';



// setup('authenticate', async ({ browser,page }) => {
//   await page.goto(configJson.uiUrl.websiteUrl);
//   const mainPage = new MainPage(page)
//   await mainPage.makeLogin(configJson.loginPage.userName,configJson.loginPage.password)
 

//   await page.context().storageState({ path: configJson.authFile });
// });



// // setup('authenticate', async ({ browser, request }) => {
// //     const apiCalls = new ApiCalls()
// //     const data = setUserCredential(users.loginPage.userName, users.loginPage.password)
// //     await apiCalls.makeLogin(data, request);
// //     const state = await request.storageState();
// //     const context = await browser.newContext({ storageState: state });
// //     const page = await context.newPage();
// //     await page.goto(urls.uiUrl.websiteUrl);
// //     await page.context().storageState({ path: auth.authFile });
// // });