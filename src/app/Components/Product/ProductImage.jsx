export default function ProductImage(){
    return(
        <div className="relative w-screen bg-[#ffffff]">
            <img src="lg-img.svg"></img>

            <div className="absolute top-5 right-1/2 w-28 bg-[#ffffff]"></div>

            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-[#ffffff] rounded-md">
                <div className="flex items-center justify-center gap-1 w-48 h-20 ">
                    <img src="sm-img-1.png"></img>
                    <img src="sm-img-2.png"></img>
                    <img src="sm-img-3.png"></img>
                </div>
            </div>
        </div>
    )
}