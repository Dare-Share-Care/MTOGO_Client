import { Builder, Capabilities, WebDriver } from 'selenium-webdriver';
import { CONFIG } from './config/ClientConfig';


class WebDriverSingleton 
{
    private static instance: WebDriver;
    private static capabilities: Capabilities;
    private constructor() {}


    public static async getInstance(): Promise<WebDriver> 
    {
        if (!this.instance) 
        {
            this.capabilities = Capabilities.chrome();
            this.capabilities.setPageLoadStrategy(CONFIG.chromeSettings.pageLoadStrategy);
            this.capabilities.set('goog:chromeOptions', {'args': CONFIG.chromeSettings.args, 'excludeSwitches': CONFIG.chromeSettings.excludeSwitches});
            this.instance = await new Builder().forBrowser('chrome').withCapabilities(this.capabilities).build();
        };
        return this.instance;
    };
};


export default WebDriverSingleton;
