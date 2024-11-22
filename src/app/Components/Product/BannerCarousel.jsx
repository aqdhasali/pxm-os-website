
export default function BannerCarousel(){
  
    return(
        <div className="flex gap-2 m-5">
            <img src="BsChevronCompactLeft.svg"></img>
            <div className="flex flex-col items-center gap-2">
                <div className="relative">
                    <video className="rounded-lg" controls={false} autoPlay loop src="1119.mp4"></video>
                </div>
                
                <img src="Slick-Dots.svg"></img>
            </div>
            
            <img src="BsChevronRight.svg"></img>

        </div>
    )
}