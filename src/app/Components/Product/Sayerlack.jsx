"use client";

import {useState} from "react";
import "../../globals.css";
import {Inter} from "next/font/google";

const inter = Inter({
    subsets : ["latin"],
    weight: ["100", "200","300","400"],
  })


export default function Sayerlack(){

    const [showForm, setShowForm] = useState(false)

    const handleFeedbackClick = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    

    return(
        <div className={`${inter.className} sm-screen sm-screen-2 md-screen lg-screen flex flex-col gap-5 items-center justify-center rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl m-6 pt-5 w-96 h-auto bg-[#ffffff]`}>
            <div>
                <img src="sayerlack-logo.svg"></img>
            </div>

            <div className="flex gap-2">
                <a className="cursor-pointer" href="https://www.sayerlack.com/"><img src="BsGlobe.svg"></img></a>
                <a className="cursor-pointer" href="https://web.facebook.com/sayerlackworld"><img src="BsFacebook.svg"></img></a>
                <a className="cursor-pointer" href="https://www.instagram.com/sayerlackworld/"><img src="BsInstagram.svg"></img> </a>
                <a className="cursor-pointer" href="https://www.linkedin.com/company/sayerlack/"><img src="BsLinkedin.svg"></img></a>
            </div>

            <div className="flex flex-col gap-2 text-center">
                <h2 className="text-2xl  font-semibold">Sayerlack Waterbase Exterior Topcoat</h2>
                <p>Preserving the Integrity of Wooden Surfaces</p>
            </div>

            <div className="flex gap-2 ">
                <div className="flex items-center justify-center h-8 w-28 rounded-lg border border-green text-green">Waterbase</div>
                <div className="flex items-center justify-center w-28 h-8 text-center rounded-lg border border-green text-green">Paint</div>
            </div>

            <div className="mb-5 flex justify-center items-center w-60 h-14 bg-black cursor-pointer rounded-lg" onClick={handleFeedbackClick}>
                <h2 className="text-xl text-white text-center">Feedback / Inquiry</h2>
            </div>

            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="flex flex-col gap-5 w-96 bg-[#ffffff] rounded-lg m-5 p-5">
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-semibold tracking-tight">Feedback / Inquiry</h2>
                                <p>Fill out the form below with your feedback or inquiries</p>
                            </div>
            
                            <div className="cursor-pointer" onClick={handleCloseForm}>
                                <img src="close-circle.svg"/>
                            </div>
                        </div>
                        
            
                        <div>
                            <div className="flex w-full border-2  h-10 border-green rounded-md">
                                <div className="flex items-center justify-center w-48 bg-green rounded-md text-center">
                                    <span className="text-white">Feedback</span>
                                </div>
                                <div className="flex items-center justify-center w-48 text-center">
                                    <span>Inquiry</span>
                                </div>
                            </div>
                        </div>
            
            
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-5 h-12 items-center rounded-lg border border-gray-900 p-5">
                                <img className="w-7" src="profile-icon.svg"></img>
                                <input className="border-none outline-none" placeholder="Enter Your Name "></input>
                            </div>
                            
                            <div className="flex gap-5 h-12 items-center rounded-lg border border-gray-900 p-5">
                                <img className="w-7" src="call-icon.svg"></img>
                                <input className="border-none outline-none" placeholder="Enter Your Phone Number "></input>
                            </div>
                            
                            <div className="flex gap-5 h-12 items-center rounded-lg border border-gray-900 p-5">
                                <img className="w-7" src="mail-icon.svg"></img>
                                <input className="border-none outline-none" placeholder="Enter Your Email "></input>
                            </div>
            
                            <div className="flex items-start p-2 h-20 rounded-lg border border-gray-900 ">
                                <textarea className="border-none outline-none w-full text-xs bg-none" rows="4" placeholder="Enter your message here we will get back to you."></textarea>
                            </div>
                        </div>
            
                        <div className="flex items-center justify-center bg-green w-full rounded-md text-xl text-white h-12">Submit</div>
                </div>
            </div>
            )}
        </div>
    )
}