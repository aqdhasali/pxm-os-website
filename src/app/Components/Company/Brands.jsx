export default function Brands(){
    return(
        <div className="flex flex-col sm-screen md-screen sm-screen-2 lg-screen gap-5 m-5 p-5 w-96 bg-[#ffffff] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl ">
            <h2 className="text-xl font-semibold tracking-tight">Brands</h2>

            <div className="flex justify-center items-center  gap-x-5">
                <div className="flex flex-col items-center">
                    <img className="w-32" src="sayerlack-sm-logo.svg"></img>
                    <p>Sayerlack</p>
                </div>

                <div className="flex flex-col items-center">
                    <img className="w-32" src="hm-logo.svg"></img>
                    <p>Herman Miller</p>
                </div>
            </div>

            <div className="flex items-center justify-center bg-green w-full rounded-md text-xl text-white h-12">View All</div>

        </div>
    )
}