export default function Brands(){
    return(
        <div className="flex flex-col m-5 p-5 w-96 bg-[#ffffff] rounded-lg ">
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

        </div>
    )
}