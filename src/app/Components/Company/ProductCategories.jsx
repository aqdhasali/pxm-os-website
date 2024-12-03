import { useTranslations } from "next-intl"
import { useState } from "react"

export default function ProductCatergories(){
    const t = useTranslations('product-cat')
    const viewAll  = t('view-all')
    const viewLess = t('view-less')
    const [boxHeight, setboxHeight] = useState('150px')
    const [text, setText] = useState(viewAll)
    const [isActive, setIsActive] = useState(false)
    


    const handleClick = () =>{
        setIsActive(!isActive)

        if(isActive){
            setboxHeight('150px')
            setText(viewAll)
        } else{
            setboxHeight('auto')
            setText(viewLess)
        }
    } 
    return(
        <div className="flex flex-col gap-5 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl w-auto bg-[#ffffff] p-5 m-5 sm-screen md-screen lg-screen sm-screen-2">
            <h1 className="text-xl font-bold tracking-tight">{t('title')}</h1>

            <div className="grid grid-cols-2 justify-center gap-7 items-center overflow-hidden" style={{height: boxHeight}}>
                <div className="flex flex-col items-center">
                    <img className="w-32 h-32" src="pu-paint.svg"></img>
                    <p>Paints</p>
                </div>

                <div className="flex flex-col items-center">
                    <img className="w-32 h-32" src="furnitures.svg"></img>
                    <p>Furnishing</p>
                </div> 
                
                <div className="flex flex-col items-center">
                    <img className="w-28 rounded-lg" src="hu-thumbnail.jpg"></img>
                    <p className="pt-2">Brushes</p>
                </div>
                
                <div className="flex flex-col items-center">
                    <img className="w-32 h-32" src="Trumpet-Gold-paint-by-Petal-Paint.jpg"></img>
                    <p>Other Paints</p>
                </div>
            </div>

            <div className="flex items-center justify-center bg-green w-full rounded-md text-l text-white h-12" onClick={() => handleClick()}>{text}</div>

        </div>
    )
}