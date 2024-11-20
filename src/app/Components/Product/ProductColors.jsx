export default function ProductColors(){
    return(
        <div className="flex flex-col sm-screen-2 sm-screen md-screen lg-screen gap-2 w-96 p-5 m-6 bg-[#ffffff] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
            <h2 className="text-xl font-semibold tracking-tight">Product Colors</h2>
            <div className="flex gap-2">
                <div className="relative group">
                    <img className="h-10 w-10 sm-width" src="Ellipse1.svg" alt="Ellipse8" />
                    <div className="absolute top-full mb-2 hidden group-hover:flex items-center justify-center w-28 rounded-md h-6 bg-[#f3f3f3] text-lg text-black">
                        Dark Walnut
                    </div>
                </div>
                <img className="h-10 w-10 sm-width" src="Ellipse2.svg"></img>
                <img className="h-10 w-10 sm-width" src="Ellipse3.svg"></img>
                <img className="h-10 w-10 sm-width" src="Ellipse4.svg"></img>
                <img className="h-10 w-10 sm-width" src="Ellipse5.svg"></img>
                <img className="h-10 w-10 sm-width" src="Ellipse6.svg"></img>
                <img className="h-10 w-10 sm-width" src="Ellipse7.svg"></img>
            </div>
            <div className="flex gap-2">
                <img className="h-10 w-10 sm-width" src="Ellipse8.svg"></img>
                <img className="h-10 w-10 sm-width" src="Ellipse9.svg"></img>
                <img className="h-10 w-10 sm-width" src="Ellipse10.svg"></img>
                <img className="h-10 w-10 sm-width" src="Ellipse11.svg"></img>
                <img className="h-10 w-10 sm-width" src="Ellipse12.svg"></img>
                <img className="h-10 w-10 sm-width" src="Ellipse13.svg"></img>
                <img className="h-10 w-10 sm-width" src="Ellipse14.svg"></img>
            </div>
        </div>
    )
}