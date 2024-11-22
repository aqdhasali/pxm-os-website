export default function RelatedProducts(){
    return(
        <div className="flex flex-col  sm-screen-2 sm-screen md-screen lg-screen gap-2 w-auto p-5 m-6 bg-[#ffffff] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
            <div>
                <h2 className="text-xl font-bold tracking-tight">Related Products</h2>
            </div>

            <div className="flex items-center  justify-center gap-2 ml-7 ">
                <div className="flex items-center text-center flex-col gap-2 ">
                    <img className="w-32 h-32" src="pu-paint.svg"></img>
                    <p className="text-lg">Sayerlack PU Paints</p>
                </div>
                
                <div className="flex items-center text-center flex-col gap-2 ">
                    <img className="w-32 h-32 sm-width-2" src="effects-paint.svg"></img>
                    <p className="text-lg">Sayerlack Special Effects Paints</p>
                </div>
            </div>
            
            <div className="flex items-center justify-center bg-green w-full rounded-md text-l text-white h-10">View All</div>
        </div>
    )
}