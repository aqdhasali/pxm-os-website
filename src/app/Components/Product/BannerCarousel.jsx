
export default function BannerCarousel(){
  
    return(
        <div className="flex gap-2 m-2">
            <img src="BsChevronCompactLeft.svg"></img>
            <div className="flex flex-col items-center gap-2">
                <div className="relative">
                    <video className="w-96 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl" controls={false} autoPlay loop src="1119.mp4"></video>
                </div>
                
                <img src="Slick-Dots.svg"></img>
            </div>
            
            <img src="BsChevronRight.svg"></img>

        </div>
    )
}