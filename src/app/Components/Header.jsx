"use client";

import {useEffect, useState} from "react";

import ProductDetails from "./Product/ProductDetails";
import ProductImage from "./Product/ProductImage";
import Sayerlack from "./Product/Sayerlack";
import SayerlackContent from "./Product/SayerlackContent";
import Banner from "./Product/Banner";
import Special from "./Product/Special";
import BannerCarousel from "./Product/BannerCarousel";
import Instructions from "./Product/Instructions";
import Offer from "./Product/Offer";
import Certifications from "./Product/Certifications";
import RelatedProducts from "./Product/RelatedProducts";
import Jat from "./Company/Jat";
import JatAbout from "./Company/JatAbout";
import JatBanner from "./Company/JatBanner";
import Brands from "./Company/Brands";
import ProductCatergories from "./Company/ProductCategories";
import Product from "./Company/Products";
import ProductColors from "./Product/ProductColors";



export default function Header(){
    const [selectedContent, setSelectedContent] = useState('product');
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("EN")


    const togglePopup = () =>{
        setShowPopup(!showPopup);
    } 

    const handleLanguageChange = (language) =>{
        setSelectedLanguage(language);
        setShowPopup(false);
    }

    const handleTabClick = (tab) =>{
        setSelectedContent(tab)
    }

    useEffect(() =>{
        const handleScroll = () =>{
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.min((scrollTop / docHeight) * 100,100);
            setScrollProgress(progress);
        }

        window.addEventListener("scroll",handleScroll);

        //Cleanup listener on unmount 
        return () => window.removeEventListener("scroll",handleScroll);

    },[])


    return(
        <>
            <div className="bg-[#ffffff]  md-screen-width w-full fixed top-0 h-44 z-50 shadow-md sm:w-screen md:w-screen lg:w-screen">
                {/* Logo and Language Button */}
                <div className=" scrollbar-hide flex justify-between p-5">
                    <img src="JAT-Logo.svg" alt="jat-logo"></img>

                    <div>
                        <div className="flex items-center justify-center gap-4">
                            <div className="flex items-center justify-center gap-2 w-28 h-11 border-2 border-black rounded-md">
                                <img className="w-5 h-5" src="left-icon.png"></img>
                                <span>{selectedLanguage}</span>
                                <img className="w-5 h-5" src="right-icon.png" onClick={togglePopup}></img>
                            </div>
                            <img className="w-5 h-5" src="FiShare2.png"></img>
                        </div>
                    </div>
                </div>

                {showPopup &&(
                    <div className="absolute items-center top-14 w-28 right-1 bg-[#ffffff] shadow-lg rounded-lg">
                        <ul>
                            {["EN","SIN","AR"].map((language) =>(
                                <li key={language}
                                className={`p-2 text-center cursor-pointer hover:bg-gray-100 ${selectedLanguage == language ? "font-bold" : ""}`}
                                onClick={() => handleLanguageChange(language)}>
                                    {language}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Product and company buttons */}
                <div className="flex m-5 border-2 h-10 border-green rounded-lg overflow-hidden cursor-pointer">
                    <div 
                    className ={`flex items-center justify-center bg-green w-1/2 text-center${
                            selectedContent === 'product' ? 'bg-green border-green rounded-md text-white' : 'rounded-md bg-white text-black'
                        }`}
                    onClick ={() => handleTabClick('product')}
                    >
                        <span>PRODUCT</span>
                    </div>
                    <div 
                    onClick={() => handleTabClick('company')}
                    className = {`flex items-center justify-center w-1/2 text-center cursor-pointer ${
                        selectedContent === 'company' ? 'bg-green border-green rounded-md text-white' : 'rounded-md bg-white text-black'
                    }`}>
                        <span>COMPANY</span>
                    </div>
                </div>

                <div className="¬w-screen h-1 bg-[#a0aec0]">
                    <div className="h-full bg-green" style={{ width: `${scrollProgress}%`}}></div>
                </div>
            </div>


                <div className="mb-20 scrollbar-hide ">
                    {selectedContent === 'product' && (
                        <div className="mt-44">
                            <ProductImage />
                            <Sayerlack />
                            <SayerlackContent />
                            <ProductDetails />
                            <Special />
                            <ProductColors />
                            <Banner />
                            <BannerCarousel />
                            <Instructions />
                            <Offer/>
                            <Certifications />
                            <RelatedProducts />
                        </div>
                    )}
                    {selectedContent === 'company' && (
                        <div className="mt-48 scrollbar-hide ">
                            <Jat />
                            <JatAbout />
                            <Certifications />
                            <JatBanner/>
                            <Brands />
                            <ProductCatergories />
                            <Product/>
                        </div>
                    )}
                </div>
        </>
        
    )
}