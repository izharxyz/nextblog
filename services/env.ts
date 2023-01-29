export const getEnvOrError = (envVar: string): string => {
    const ret = process.env[envVar];
    if (ret === undefined) {
        throw new Error(`process.env ${envVar} is undefined`);
    }
    return ret;
} 