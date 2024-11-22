export default function Brands(){
    return(
        <div className="flex flex-col gap-5 m-5 p-5 w-auto bg-[#ffffff] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl ">
            <h2 className="text-xl font-bold tracking-tight">Brands</h2>

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

            <div className="flex items-center justify-center bg-green w-full rounded-md text-l text-white h-12">View All</div>

        </div>
    )
}