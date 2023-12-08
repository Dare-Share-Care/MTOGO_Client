interface ChromeSettings 
{
    args: string[];
    excludeSwitches: string[];
    pageLoadStrategy: string;
}

interface IConfig 
{
    baseUrl: string;
    chromeSettings: ChromeSettings;
    timeouts:
    {
        default: number;
        pageLoad: number;
    }
}

export const CONFIG: IConfig = 
{
    baseUrl: 'http://localhost:3000/',
    chromeSettings: 
    {
        args: 
        [
            '--headless=new',
            'window-size=1920,1080',
        ],
        excludeSwitches: 
        [
            'enable-automation',
        ],
        pageLoadStrategy: 'eager'
    },
    timeouts: 
    {
        default: 5000,
        pageLoad: 2500
    }
};