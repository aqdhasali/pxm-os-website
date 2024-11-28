import { useState } from "react"

export default function Certifications(){
    const [boxHeight,setboxHeight] = useState('170px')
    const [text, setText]  = useState('View All')
    const [isActive, setIsActive] = useState(false)

    const handleClick = () =>{
        setIsActive(!isActive)

        if(isActive){
            setboxHeight('170px')
            setText('View All')
        } else{
            setboxHeight('auto')
            setText('View Less')
        }

    }
    return(
        <div className="flex flex-col sm-screen sm-screen-2 md-screen lg-screen gap-2 w-auto p-5 m-6 bg-[#ffffff] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
            <h2 className="text-xl font-bold tracking-tight">Certifications</h2>

            <div className="flex flex-col gap-2 overflow-hidden" style={{height: boxHeight}}>
                <div className="flex items-center gap-5">
                    <img className="w-20" src="ISO-Logos-9001.png"></img>
                    <p>ISO 9001 Company</p>
                </div>
                
                <div className="flex gap-5 items-center">
                    <img className="w-20" src="ISO-Logos-20223 (1).png"></img>
                    <p>ISO 45001 Company</p>
                </div>
                
                <div className="flex gap-5 items-center">
                    <img className="w-20" src="ISO-Logos-20223.png"></img>
                    <p>ISO 14001 Company</p>
                </div>
                
                <div className="flex gap-5 items-center">
                    <img className="w-20" src="Logo-for-Responsible-Care.jpg"></img>
                    <p>Responsible Care</p>
                </div> 
                
                <div className="flex gap-5 items-center">
                    <img className="w-20" src="NCPC-ECO_logo.png"></img>
                    <p>ECO Label</p>
                </div> 
                
                <div className="flex gap-5 items-center">
                    <img className="w-20" src="tags-awards-compliant-badge.png"></img>
                    <p>TAGS Awards</p>
                </div> 
                
                <div className="flex gap-5 items-center">
                    <img className="w-20" src="Fitch_Ratings_logo-202410217.png"></img>
                    <p>Fitch Ratings</p>
                </div>
                
                <div className="flex gap-5 items-center">
                    <img className="w-20" src="green-seal-badge.jpg"></img>
                    <p>Green Seal Certified Company</p>
                </div>
            </div>

            <div className="flex items-center justify-center bg-green w-full rounded-md text-l text-white h-12" onClick={() => handleClick()}>{text}</div>

        </div>
    )
}