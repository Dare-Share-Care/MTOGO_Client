import type { Config } from '@jest/types';

const config: Config.InitialOptions = 
{
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/test/**/*.test.ts'],
    transform: 
    {
        "^.+\\.[t]sx?$": 'babel-jest'
    },
    globals: 
    {
        'ts-jest': 
        {
            tsconfig: 'tsconfig.json'
        }
    }
};

export default config;