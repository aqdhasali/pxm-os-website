export default function RelatedProducts(){
    return(
        <div className="flex flex-col gap-5 w-96 p-5 m-5 bg-[#ffffff] rounded-lg">
            <div>
                <h2 className="text-2xl font-semibold tracking-tight">Related Products</h2>
            </div>

            <div className="flex items-center  justify-center gap-2 ml-7 ">
                <div className="flex items-center text-center flex-col gap-2 ">
                    <img className="w-32 h-32" src="pu-paint.svg"></img>
                    <p className="text-lg">Sayerlack PU Paints</p>
                </div>
                
                <div className="flex items-center text-center flex-col gap-2 ">
                    <img className="w-32 h-32" src="effects-paint.svg"></img>
                    <p className="text-lg">Sayerlack Special Effects Paints</p>
                </div>
            </div>
            
            <div className="flex items-center justify-center bg-green w-full rounded-md text-2xl text-white h-14">View All</div>
        </div>
    )
}