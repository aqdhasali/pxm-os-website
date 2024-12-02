import {getRequestConfig} from 'next-intl/server';
import {routing} from "./routing";

export default getRequestConfig(async ({requestLocale}) =>{
    //this corresponds to the [locale] segment
    let locale = await requestLocale;

    // ensure that a valid locale is used
    if(!locale || !routing.locales.includes(locale as any)){
        locale = routing.defaultLocale;
    }

    return{
        locale,
        messages: (await import (`../../messages/${locale}.json`)).default
    };
});