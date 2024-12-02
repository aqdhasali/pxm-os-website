import { useTranslations } from "next-intl";
import {useState} from "react";

export default function JatAbout(){
    const t = useTranslations('Jat-abt')
    const [boxHeight, setboxHeight] = useState('198.5px')
    const [text, setText] = useState('Learn More')
    const [isActive, setIsActive] = useState(false)

    const handleClick = () =>{
        setIsActive(!isActive)
        
        if (isActive) {
            setboxHeight('198.5px')
            setText('Learn More')
        } else{
            setboxHeight('auto')
            setText('Hide')
        }
    }

    return(
        <div className="flex flex-col gap-2 sm-screen md-screen lg-screen sm-screen-2 p-5 m-5 w-auto bg-[#ffffff] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
            <h2 className="text-left text-xl font-bold">{t('title')}</h2>
            <p className="font-light overflow-hidden" style={{height: boxHeight}}>{t('about')}</p>
            <div className="flex items-center justify-center bg-green w-full rounded-md text-l text-white h-12" onClick={() => handleClick()}>{text}</div>
        </div>
    )
}