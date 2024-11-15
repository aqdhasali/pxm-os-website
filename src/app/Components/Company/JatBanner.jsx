export default function JatBanner(){
    return(
        <div className="flex gap-2 m-5 sm-screen md-screen lg-screen">   
            <div className="flex flex-col items-center gap-2">
                <div className="relative">
                    <img src="slide-banner.svg"></img>
                    <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="BsPlayCircle.svg"></img>
                </div>
            </div>
        </div>
    )
}