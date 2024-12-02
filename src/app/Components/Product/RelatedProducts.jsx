import { useSearchParams } from "next/navigation"
import {useState} from "react";
import {useTranslations} from "next-intl"

export default function RelatedProducts(){
    const t = useTranslations('R-Products')
    const [boxHeight, setboxHeight] = useState('180px')
    const [text, setText] = useState('View All')
    const [isActive, setIsActive] = useState(false)

    const handleClick = () =>{
        setIsActive(!isActive)

        if(isActive){
            setboxHeight('180px')
            setText('View All')
        } else{
            setboxHeight('auto')
            setText('View Less')
        }
    }
    return(
        <div className="flex flex-col  sm-screen-2 sm-screen md-screen lg-screen gap-2 w-auto p-5 m-6 bg-[#ffffff] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
            <div>
                <h2 className="text-xl font-bold tracking-tight">{t('title')}</h2>
            </div>

            <div className="grid grid-cols-2 items-center mt-2 justify-center gap-2 ml-7 overflow-hidden" style={{height: boxHeight}} >
                <div className="flex items-center text-center flex-col gap-2 ">
                    <img className="w-28 rounded-lg " src="SAYERLACK-PU.jpg"></img>
                    <p className="text-lg">Sayerlack PU Paints</p>
                </div>
                
                <div className="flex items-center text-center flex-col gap-2 ">
                    <img className="w-28 rounded-lg" src="SAYERLACK-WB.jpg"></img>
                    <p className="text-lg">Sayerlack Waterbase</p>
                </div> 
                
                <div className="flex items-center text-center flex-col gap-2 ">
                    <img className="w-28 rounded-lg" src="SAYERLACK-PE.jpg"></img>
                    <p className="text-lg">Sayerlack Polyurethane</p>
                </div> 
                
                <div className="flex items-center text-center flex-col gap-2 ">
                    <img className="w-28 rounded-lg" src="4-litre-J-CHEM-Floor-Paint.png"></img>
                    <p className="text-lg">J CHREM Floor Paint</p>
                </div>
                
                <div className="flex items-center text-center flex-col gap-2 ">
                    <img className="w-28 rounded-lg" src="JCHEM-SOLVENTASE-WOOD-COATINGS.png"></img>
                    <p className="text-lg">J CHEM Solvent based Wood Coating</p>
                </div>
                
                <div className="flex items-center text-center flex-col gap-2 ">
                    <img className="w-28 rounded-lg" src="Small-tub-of-Water-Based-Wood-Putty-by-BORMA-WACHS.png"></img>
                    <p className="text-lg">Borma Wachs Woody Paint</p>
                </div>
            </div>
            
            <div className="flex items-center justify-center bg-green w-full rounded-md text-l text-white h-12" onClick={() => handleClick()}>{text}</div>
        </div>
    )
}