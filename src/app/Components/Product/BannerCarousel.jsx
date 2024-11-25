import React, { useState,useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";


export default function BannerCarousel(){

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
    const [selectedContent,setSelectedContent] = useState(0);
    const [slideCount,setSlideCount] = useState(0);

    //updating the state of pagination on slide change
    const updatePagination = () =>{
        if(!emblaApi) return;
        setSelectedContent(emblaApi.selectedScrollSnap());
    };
    
    //Initialize slide count
    useEffect(() => {
        if(!emblaApi) return;
        setSlideCount(emblaApi.scrollSnapList().length);
        emblaApi.on("select", updatePagination);
        updatePagination();
    },[emblaApi]);
  
    return(
        <div className="relative m-5"> 
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide"> 
                        <video className="w-auto rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl" preload="auto" controls={false} autoPlay loop muted src="1119.mp4"></video>
                    </div>
                    
                    <div className="embla__slide"> 
                        <video className="w-auto rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl" preload="auto" controls={false} autoPlay loop muted  src="1119.mp4"></video>
                    </div>
                    
                    <div className="embla__slide"> 
                        <video className="w-auto rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl" preload="auto" controls={false} autoPlay loop muted src="1119.mp4"></video>
                    </div>
                </div>

                {/* Pagination */}

                <div className="flex justify-center gap-2 mt-2">
                    {Array.from({length: slideCount }).map((_,index) =>
                        (
                            <button
                                key={index}
                                className={`w-8 h-2 rounded-lg ${
                                    index === selectedContent ? "bg-emerald-950" : "bg-green"
                                }`}
                                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            ></button>
                        )
                    )}
                </div>
            </div>      
        </div>
    )
}