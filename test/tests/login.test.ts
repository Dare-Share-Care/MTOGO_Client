import WebDriverSingleton from "../WebDriverSingleton";
import { CONFIG } from "../config/ClientConfig";
import { clickElement, getPage } from "../utils/GeneralUtils";
import { LogIn } from "../pages/LoginPage";
import { By, WebDriver, until } from "selenium-webdriver";
import {describe, expect, test} from '@jest/globals';


describe('Login', () => 
{
    let driver: WebDriver;
    let url: string;

    beforeAll(async () => 
    {
        driver = await WebDriverSingleton.getInstance();
        url = 'login';
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

    test('Should log in successfully', async () => {
        await LogIn(driver);
        expect(await driver.wait(until.urlIs(CONFIG.baseUrl), 5000)).toEqual(true);
    });

});