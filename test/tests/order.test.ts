import WebDriverSingleton from "../WebDriverSingleton";
import { CONFIG } from "../config/ClientConfig";
import { clickElement, getPage, getTextFromElement } from "../utils/GeneralUtils";
import { LogIn } from "../pages/LoginPage";
import { By, WebDriver, until } from "selenium-webdriver";
import {describe, expect, test} from '@jest/globals';


describe('Example', () => 
{
    let driver: WebDriver;
    let url: string;

    beforeAll(async () => 
    {
        driver = await WebDriverSingleton.getInstance();
        url = '';
    });

    beforeEach(async () => 
    {
        await getPage(driver, CONFIG.baseUrl+url);
    });

    afterAll(async () => 
    {
        await driver.quit();
    });

    test('Should navigate to correct URL', async () => 
    {
        expect(await driver.wait(until.urlIs(CONFIG.baseUrl+url), 5000)).toEqual(true);
    });

    test('Should have correct title', async () => 
    {
        expect(await driver.getTitle()).toEqual('React App');
    });

    test('Should be able to create order', async () => {
        await LogIn(driver);
        await clickElement(driver, 'see-menu-1');
        await clickElement(driver, 'order-now-1');
        expect(await getTextFromElement(driver, 'order-confirmation')).toMatch(/Order #\d+ created successfully!/);
    });

});