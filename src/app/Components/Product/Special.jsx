import { useTranslations } from "next-intl"

export default function Special(){
    const t = useTranslations('Special')
    return(
        <div className="flex flex-col sm-screen-2 sm-screen md-screen lg-screen gap-5 w-auto p-5 m-6 bg-[#ffffff] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
            <h2 className="text-xl font-bold tracking-tight">{t('title')}</h2>

            <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                    <img src="MdStream.svg"></img>
                    <p className="text-lg font-medium">{t('uv')}</p>
                </div>
                
                <div className="flex gap-5">
                    <img src="IoBarbellOutline.svg"></img>
                    <p className="text-lg font-medium">{t('strong')}</p>
                </div>
            </div>

        </div>
    )
}