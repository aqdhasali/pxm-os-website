export default function Product(){
    return (
        <div className="flex flex-col gap-5 rounded-lg w-96 bg-[#ffffff] p-5 mb-20 m-5 sm-screen sm-screen-2 md-screen lg-screen">
            <h2 className="text-xl font-semibold tracking-tight">Products</h2>

            <div className="flex justify-center items-center text-center  gap-x-5">
                <div className="flex flex-col justify-center gap-x-7 items-center">
                    <img src="chair.svg"></img>
                    <p>Herman Miller Aeron Chairs</p>
                </div>

                <div className="flex flex-col justify-center gap-x-10 items-center">
                    <img src="wb-paint.svg"></img>
                    <p>Sayerlack Water Base Exterior Top Coat</p>
                </div>
            </div>

            <div className="flex items-center justify-center bg-green w-full rounded-md text-2xl text-white h-14">View All</div>


        </div>
    )
}