export default function ProductCatergories(){
    return(
        <div className="flex flex-col gap-5 rounded-lg w-96 bg-[#ffffff] p-5 m-5 sm-screen md-screen lg-screen">
            <h1 className="text-xl font-semibold tracking-tight">Product Categories</h1>

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

            <div className="flex items-center justify-center bg-green w-full rounded-md text-2xl text-white h-14">View All</div>

        </div>
    )
}