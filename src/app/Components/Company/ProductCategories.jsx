export default function ProductCatergories(){
    return(
        <div className="flex flex-col gap-5 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl w-auto bg-[#ffffff] p-5 m-5 sm-screen md-screen lg-screen sm-screen-2">
            <h1 className="text-xl font-bold tracking-tight">Product Categories</h1>

            <div className="flex justify-center gap-x-7 items-center">
                <div className="flex flex-col items-center">
                    <img className="w-32 h-32" src="pu-paint.svg"></img>
                    <p>Paints</p>
                </div>

                <div className="flex flex-col items-center">
                    <img className="w-32 h-32" src="furnitures.svg"></img>
                    <p>Furnishing</p>
                </div>
            </div>

            <div className="flex items-center justify-center bg-green w-full rounded-md text-l text-white h-12">View All</div>

        </div>
    )
}