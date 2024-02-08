// import { test, Page, expect } from '@playwright/test';

// test(`using mouse and keyboard`, async ({page}) => {
//     // Navigate to the page with the drag and drop element
//     await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
//     // Locate the source and target elements
//     const source = await page.locator('//div[@id="column-a"]');
//     const target = await page.locator('//div[@id="column-b"]');
//     // Get the bounding boxes of the elements
//     const sourceBox = await source.boundingBox();
//     const targetBox = await target.boundingBox();
//     // Drag the source element to the target element
//     await page.mouse.move(sourceBox!.x + sourceBox!.width / 2,
//                           sourceBox!.y + sourceBox!.height / 2);
//     await page.mouse.down();
//     await page.mouse.move(targetBox!.x + targetBox!.width / 2,
//                           targetBox!.y + targetBox!.height / 2);
//     await page.mouse.up();
//     await page.waitForTimeout(5000)  

// })