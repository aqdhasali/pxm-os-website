export default function JatBanner(){
    return(
        <div className="flex gap-2 m-5 sm-screen md-screen lg-screen sm-screen-2">   
            <div className="flex flex-col items-center gap-2">
            <div className="relative">
                    <video className="rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl" autoPlay loop controls={false} src="1119.mp4"></video>
                </div>
            </div>
        </div>
    )
}