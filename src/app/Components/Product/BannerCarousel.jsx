import {useRef, useState} from "react";

export default function BannerCarousel(){
    const videoRef = useRef(null)
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handlePlay  = () =>{
        if (videoRef.current){
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    };

    const handleVideoEnd = () =>{
        setIsVideoPlaying(false);
    }

    return(
        <div className="flex gap-2 m-5">
            <img src="BsChevronCompactLeft.svg"></img>
            <div className="flex flex-col items-center gap-2">
                <div className="relative">
                    <video ref={videoRef} onEnded={handleVideoEnd} className="rounded-lg" controls={false} src="1119.mp4"></video>
                    {!isVideoPlaying &&(
                        <img onClick ={handlePlay} 
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            src="BsPlayCircle.svg"
                            alt="play-icon"
                        />
                    )}
                </div>
                
                <img src="Slick-Dots.svg"></img>
            </div>
            
            <img src="BsChevronRight.svg"></img>

        </div>
    )
}