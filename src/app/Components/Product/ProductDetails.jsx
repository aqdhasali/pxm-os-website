export default function ProductDetails(){
    return(
        <div className="flex flex-col sm-screen-2 sm-screen md-screen lg-screen gap-2 p-5 m-6 bg-[#ffffff] rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl w-96">
            <h2 className="text-xl font-semibold tracking-tight">Product Details</h2>
            <div className="flex items-center justify-center gap-5">
                <h3 className="text-xl font-medium">Volume</h3>
                <p className="text-md">0.5L | 1L | 2.5L | 4L | 5L | 6L 
                | 10L | 25L</p>
            </div>

            <div className="flex items-center gap-5">
                <h3 className="text-xl font-medium">Finish</h3>
                <p className="text-md">Gloss | Semi Gloss | Matte</p>
            </div>
        </div>
    )
}