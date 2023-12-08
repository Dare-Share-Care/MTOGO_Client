import { WebDriver, WebElement, By, until } from 'selenium-webdriver';


export function delay(ms: number): Promise<void> 
{
    return new Promise(resolve => setTimeout(resolve, ms));
};

export async function getPage (driver: WebDriver, url: string): Promise<void> 
{
    return await driver.get(url);
};

export async function clickElement (driver: WebDriver, locator: string | WebElement, locatorType: 'css' | 'xpath' = 'css'): Promise<void> 
{
    let element: WebElement;
    if (typeof locator === 'string') 
    {
        if (locatorType === 'css') 
        {
            element = await driver.wait(until.elementLocated(By.css(locator)), 2500);
        } 
        else if (locatorType === 'xpath')
        {
            element = await driver.wait(until.elementLocated(By.xpath(locator)), 2500);
        }
        element = await driver.wait(until.elementIsVisible(element), 2500);
    } 
    else 
    {
        element = locator;
    }
    return await element.click();
};

export async function getTextFromElement (driver: WebDriver, locator: string | WebElement, locatorType: 'css' | 'xpath' = 'css'): Promise<string> 
{
    let element: WebElement;
    if (typeof locator === 'string') 
    {
        if (locatorType === 'css') 
        {
            element = await driver.wait(until.elementLocated(By.css(locator)), 2500);
        } 
        else if (locatorType === 'xpath')
        {
            element = await driver.wait(until.elementLocated(By.xpath(locator)), 2500);
        }
        element = await driver.wait(until.elementIsVisible(element), 2500);
    } 
    else 
    {
        element = locator;
    }
    return await element.getText();
};
