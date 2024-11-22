export default function ProductDetails(){
    return(
        <div className="flex flex-col sm-screen-2 sm-screen md-screen lg-screen gap-2 p-5 m-6 bg-[#ffffff] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl w-96">
            <h2 className="text-xl font-bold tracking-tight">Product Details</h2>
            <div className="flex items-center justify-center gap-5">
                <h3 className="text-l font-semibold">Volume</h3>
                <p className="text-md ">0.5L | 1L | 2.5L | 4L | 5L | 6L 
                | 10L | 25L</p>
            </div>

            <div className="flex items-center gap-5">
                <h3 className="text-l font-semibold">Finish</h3>
                <p className="text-md">Gloss | Semi Gloss | Matte</p>
            </div>
        </div>
    )
}