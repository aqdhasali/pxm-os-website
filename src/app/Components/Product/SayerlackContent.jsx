import { useTranslations } from "next-intl"
import { useState } from "react"

export default function SayerlackContent(){

    const t = useTranslations('Sayerlack-Content');
    const l = t('learn-more')
    const h = t('hide')
    const [boxHeight, setboxHeight] = useState('199px')
    const [text, setText] = useState(l)
    const [isActive, setIsActive] = useState('false')
    


    const handleClick = () => {
        setIsActive(!isActive)

        if(isActive){
            setboxHeight('199px')
            setText(l)
        } else{
            setboxHeight('auto')
            setText(h)
        }
        
    }

    return(
        <div className="flex flex-col md-screen sm-screen-2 sm-screen lg-screen gap-2 p-5 m-6 bg-[#ffffff] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl w-auto p-2 overflow-hidden" >
            <h2 className="text-xl font-bold">{t('title')}</h2>
            <p className="font-light text-jusitfy overflow-hidden" style={{ height: boxHeight }}>{t('about')}</p>
            <div className="flex items-center justify-center bg-green w-full rounded-md text-l text-white h-12"  onClick={ () => handleClick()}>{text}</div>
        </div>
    )
}