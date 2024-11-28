import { useState } from "react"

export default function SayerlackContent(){

    const [boxHeight, setboxHeight] = useState('199px')
    const [text, setText] = useState('Learn More')
    const [isActive, setIsActive] = useState('false')
    


    const handleClick = () => {
        setIsActive(!isActive)

        if(isActive){
            setboxHeight('199px')
            setText('Learn More')
        } else{
            setboxHeight('auto')
            setText('Hide')
        }
        
    }

    return(
        <div className="flex flex-col md-screen sm-screen-2 sm-screen lg-screen gap-2 p-5 m-6 bg-[#ffffff] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl w-auto p-2 overflow-hidden" >
            <h2 className="text-left text-xl font-bold">About Sayerlack Water Base</h2>
            <p className="font-light text-jusitfy overflow-hidden" style={{ height: boxHeight }}>Sayerlack is the flagship brand distributed by JAT Holdings PLC. Initiated in 1954, Sayerlack Wood Coatings is an Italian origin brand owned by Sherwin Williams that provides the most innovative and highest quality wood coatings in the industry. Sherwin Williams is recognized as the largest producer of wood coatings in the world due to the new technologies it adopts and for its commitment to research and development.
                With 28 years of experience in distributing Sayerlack in Sri Lanka and across South Asia, JAT Holdings is recognized as the number 1 partner for Sayerlack in the world. JAT Holdings PLC was the pioneer to introduce Waterbase wood coatings to Sri Lanka. Water-based coatings revolutionized the industry by giving consumers an environmentally friendly alternative with 95% lower harmful emissions than synthetic products, ensuring workers’ health and safety.
                Sayerlack is the market leader in wood coatings and a trusted brand that is loved amongst Sri Lankan customers in the residential and industrial sectors. The brand has been recognized amongst the Top 100 Most Valuable Consumer Brands in Sri Lanka in the Brands Annual 2022 list by LMD.
            </p>
            <div className="flex items-center justify-center bg-green w-full rounded-md text-l text-white h-12"  onClick={ () => handleClick()}>{text}</div>
        </div>
    )
}