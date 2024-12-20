import { useTranslations } from "next-intl";

export default function Instructions(){

    const handlePdfDownload = () => {
        const link = document.createElement("a")
        link.href = "/jat.pdf";
        link.download = "jat.pdf";
        link.click();
    }

    const t = useTranslations('Instructions')
    return(
        <div className="flex flex-col  sm-screen sm-screen-2 md-screen lg-screen gap-2 w-auto p-5 m-6 bg-[#ffffff] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
            <h2 className="text-xl font-bold tracking-tight">{t('title')}</h2>

            <div className="flex items-center justify-between p-2 border w-full">
                <div className="flex gap-2">
                    <img className="h-14 w-14" src="doc-img.svg"></img>
                    <div>
                        <h2 className="text-md font-semibold">Tips for a better quote</h2>
                        <p className="text-sm">2 pages, 1.4 MB</p>
                    </div>
                </div>

                <div onClick={handlePdfDownload} className="flex h-8 w-8 justify-center items-center border border-green rounded-md p-1">
                    <img className="h-5 w-5" src="download-icon.svg"></img> 
                </div>
            </div>
        </div>
    )
}