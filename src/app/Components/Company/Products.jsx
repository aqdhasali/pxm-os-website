import { useTranslations } from "next-intl"

export default function Product(){
    const t = useTranslations('product')
    return (
        <div className="flex flex-col gap-5 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl w-auto  bg-[#ffffff] p-5 mb-20 m-5 sm-screen sm-screen-2 md-screen lg-screen">
            <h2 className="text-xl font-bold tracking-tight">{t('title')}</h2>

            <div className="flex justify-center items-center text-center  gap-x-5">
                <div className="flex flex-col justify-center gap-x-7 items-center">
                    <img src="chair.svg"></img>
                    <p>Herman Miller Aeron Chairs</p>
                </div>

                <div className="flex flex-col justify-center gap-x-10 items-center">
                    <img src="wb-paint.svg"></img>
                    <p>Sayerlack Water Base Exterior Top Coat</p>
                </div>
            </div>

            <div className="flex items-center justify-center bg-green w-full rounded-md text-l text-white h-12">View All</div>


        </div>
    )
}