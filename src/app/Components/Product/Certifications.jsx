export default function Certifications(){
    return(
        <div className="flex flex-col sm-screen sm-screen-2 md-screen lg-screen gap-2 w-96 p-5 m-6 bg-[#ffffff] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
            <h2 className="text-xl font-bold tracking-tight">Certifications</h2>

            <div>
                <div className="flex items-center gap-5">
                    <img src="iso-logo.svg"></img>
                    <p>ISO 9001 Company</p>
                </div>
                
                <div className="flex gap-5 items-center">
                    <img src="sls-logo.svg"></img>
                    <p>SLS Certified Company</p>
                </div>
            </div>
        </div>
    )
}