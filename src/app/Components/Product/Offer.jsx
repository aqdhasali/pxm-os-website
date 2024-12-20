import { useTranslations } from "next-intl"

export default function Offer(){
    const t  = useTranslations('Offer')
    return(
        <div className="relative sm-screen sm-screen-2 md-screen lg-screen w-auto m-6">
            <img className="w-full rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl " src="Group.svg"></img>
            <div
                className="absolute top-0 left-0 w-full h-full bg-blue-800 mix-blend-multiply rounded-lg opacity-50"
            ></div>

            <div className="absolute gap-2 inset-0 flex flex-col justify-center text-white items-center">
                <h2 className="text-4xl font-bold ">20% OFF</h2>
                <p className="font-light">{t('title')}</p>
                <div className="flex items-center justify-center font-light w-38 h-9 rounded-md p-2 text-center border border-whiter text-white">
                    <a href="https://whitebyjat.com/">{t('about')}</a>
                </div>
            </div>
        </div>
    )
}1

