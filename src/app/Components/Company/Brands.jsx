import { useState } from "react"

export default function Brands(){

    const [boxHeight, setBoxHeight] = useState('180px')
    const [text, setText] = useState('View All')
    const [isActive, setIsActive] = useState(false)


    const handleClick = () =>{
        setIsActive(!isActive)

        if(isActive){
            setBoxHeight('180px')
            setText('View All')
        } else{
            setBoxHeight('auto')
            setText('View Less')
        }
        
    }

    return(
        <div className="flex flex-col gap-5 m-5 p-5 w-auto bg-[#ffffff] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl ">
            <h2 className="text-xl font-bold tracking-tight">Brands</h2>

            <div className="grid grid-cols-2 items-center overflow-hidden gap-7" style={{height: boxHeight}}>
                <div className="flex flex-col items-center rounded-lg shadow-lg">
                    <img className="w-32" src="Logo-of-SAYERLACK-INNOVATIVE-WOOD-SOLUTIONS.jpg"></img>
                    <p>Sayerlack</p>
                </div>

                <div className="flex flex-col items-center rounded-lg shadow-lg">
                    <img className="w-32" src="Borma-Wachs-Logo.jpg"></img>
                    <p>Borma Wachs</p>
                </div>
                
                <div className="flex flex-col items-center rounded-lg shadow-lg">
                    <img className="w-32" src="JAT-White-logo-327x327.jpg"></img>
                    <p>White By JAT</p>
                </div>
                
                <div className="flex flex-col items-center rounded-lg shadow-lg">
                    <img className="w-32" src="Logo-of-Brushmaster-paint-brushes.jpg"></img>
                    <p>Brushmaster</p>
                </div>
                
                <div className="flex flex-col items-center rounded-lg shadow-lg">
                    <img className="w-32" src="Logo-of-J-CHEM.jpg"></img>
                    <p>J CHEM</p>
                </div>
                
                <div className="flex flex-col items-center rounded-lg shadow-lg">
                    <img className="w-32" src="Logo-of-Petal-paint.jpg"></img>
                    <p>Petal Paint</p>
                </div>
                
                <div className="flex flex-col items-center rounded-lg shadow-lg">
                    <img className="w-32" src="masters-thumbnail.jpg"></img>
                    <p>Masters</p>
                </div>
                
                <div className="flex flex-col items-center rounded-lg shadow-lg">
                    <img className="w-32" src="logo-of-wallz.jpg"></img>
                    <p>Wallz</p>
                </div>
                
                <div className="flex flex-col items-center rounded-lg shadow-lg">
                    <img className="w-32" src="Logo-of-Harris-paint-brushes.jpg"></img>
                    <p>Harris</p>
                </div>



            </div>

            <div className="flex items-center justify-center bg-green w-full rounded-md text-l text-white h-12" onClick={() => handleClick()}>{text}</div>

        </div>
    )
}