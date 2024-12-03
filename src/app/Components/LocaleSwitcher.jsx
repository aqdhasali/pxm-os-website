import { useTranslations } from "next-intl";
import { useLocale } from "use-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { locales } from "../../i18n/routing";

export default function LocaleSwitcher(){
    const t = useTranslations("LocaleSwitcher");
    const locale = useLocale();


    return(
        <LocaleSwitcherSelect defualtValue={locale} label={t('label')}>
            {locales.map((cur) =>(
                <option key={cur} value={cur} className={`${cur === locale ? "font-bold" : ""}`}>
                    {t("locale", {locale: cur })}
                </option>
            ))}
        </LocaleSwitcherSelect>
    )
}