import { WebDriver, WebElement, By, until } from 'selenium-webdriver';


export function delay(ms: number): Promise<void> 
{
    return new Promise(resolve => setTimeout(resolve, ms));
};

export async function getPage (driver: WebDriver, url: string): Promise<void> 
{
    return await driver.get(url);
};

export async function clickElement (
    driver: WebDriver,
    locator: string | WebElement,
    locatorType: 'id' | 'xpath' = 'id'
): Promise<void> 
{
    let element: WebElement;
    if (typeof locator === 'string') 
    {
        const by = locatorType === 'id' ? By.id(locator) : By.xpath(locator);
        element = await driver.wait(until.elementLocated(by), 2500);
        await driver.wait(until.elementIsVisible(element), 2500);
    } 
    else 
    {
        element = locator;
        await driver.wait(until.elementIsVisible(element), 2500);
    }
    await element.click();
};

export async function getTextFromElement (
    driver: WebDriver,
    locator: string | WebElement,
    locatorType: 'id' | 'xpath' = 'id'
): Promise<string> 
{
    let element: WebElement;
    if (typeof locator === 'string') 
    {
        const by = locatorType === 'id' ? By.id(locator) : By.xpath(locator);
        element = await driver.wait(until.elementLocated(by), 2500);
        await driver.wait(until.elementIsVisible(element), 2500);
    } 
    else 
    {
        element = locator;
        await driver.wait(until.elementIsVisible(element), 2500);
    }
    return await element.getText();
};
