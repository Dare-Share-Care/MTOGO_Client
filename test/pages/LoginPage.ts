import { By, WebDriver } from "selenium-webdriver";
import { clickElement, getPage } from "../utils/GeneralUtils";
import { CONFIG } from "../config/ClientConfig";


export async function LogIn(driver: WebDriver) : Promise<void>
{
    await getPage(driver, CONFIG.baseUrl + 'login');
    await driver.findElement(By.id('email')).sendKeys('j@j.j');
    await driver.findElement(By.id('password')).sendKeys('123');
    await clickElement(driver, 'login-button');
};
