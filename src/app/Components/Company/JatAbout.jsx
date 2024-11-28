import {useState} from "react";

export default function JatAbout(){

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
            <h2 className="text-left text-xl font-bold">About Company</h2>
            <p className="font-light overflow-hidden" style={{height: boxHeight}}>Since its incorporation in 1993, JAT Holdings PLC has grown in financial strength, corporate reputation and brand recognition reaching many milestones in its journey of becoming the leader in wood coatings in Sri Lanka. In 2015, JAT Holdings PLC was named as one of the Top Strongest Conglomerate Brands in the country through diversification. Furthermore, the company was awarded the title of the Largest Distributor of Sayerlack in the world. Since 2016, the company made it to the Top 100 Most Respected Companies adjudged by LMD for four consecutive years. More recently, JAT Holdings PLC was ranked amongst LMD’s Top 20 Conglomerate Brands in Sri Lanka as stated in Brands Annual 2020, an independent survey conducted by Brand Finance, the World’s largest brand valuation and strategy consultancy firm.  The Group’s strategic aspirations are driven by a spirited team of over 400 employees, under the visionary leadership, guidance and direction of  the Founder and Managing Director, Aelian Gunawardene </p>
            <div className="flex items-center justify-center bg-green w-full rounded-md text-l text-white h-12" onClick={() => handleClick()}>{text}</div>
        </div>
    )
}