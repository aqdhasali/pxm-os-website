import { useTranslations } from "next-intl"

export default function ProductDetails(){
    const t = useTranslations('Product-Details')
    return(
        <div className="flex flex-col sm-screen-2 sm-screen md-screen lg-screen gap-2 p-5 m-6 bg-[#ffffff] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl w-auto p-2">
            <h2 className="text-xl font-bold tracking-tight">{t('title')}</h2>
            <div className="flex items-center justify-center gap-5">
                <h3 className="text-l font-semibold">{t('volume')}</h3>
                <p className="text-md ">0.5L | 1L | 2.5L | 4L | 5L | 6L 
                | 10L | 25L</p>
            </div>

            <div className="flex items-center gap-5">
                <h3 className="text-l font-semibold">{t('finish')}</h3>
                <p className="text-md">{t('finishings')}</p>
            </div>
        </div>
    )
}