export default function Special(){
    return(
        <div className="flex flex-col sm-screen md-screen lg-screen gap-5 w-96 p-5 m-6 bg-[#ffffff] rounded-lg">
            <h2 className="text-xl font-semibold tracking-tight">What's Special?</h2>

            <div className="flex flex-col gap-5">
                <div className="flex gap-2">
                    <img src="MdStream.svg"></img>
                    <p className="text-lg font-semibold">UV Protection</p>
                </div>
                
                <div className="flex gap-2">
                    <img src="IoBarbellOutline.svg"></img>
                    <p className="text-lg font-semibold">Strong Adhesive and Resistance</p>
                </div>
            </div>

        </div>
    )
}