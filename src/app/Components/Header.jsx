"use client";

import {useState} from "react";

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

    const handleTabClick = (tab) =>{
        setSelectedContent(tab)
    }


    return(
        <>
            <div className="bg-[#ffffff] md-screen-width w-full h-44 sm:w-screen md:w-screen lg:w-screen">
                {/* Logo and Language Button */}
                <div className="flex justify-between p-5">
                    <img src="JAT-Logo.svg" alt="jat-logo"></img>

                    <div>
                        <div className="flex items-center justify-center gap-4">
                            <div className="flex items-center justify-center gap-2 w-28 h-11 border-2 border-black rounded-md">
                                <img className="w-5 h-5" src="left-icon.png"></img>
                                <span>EN</span>
                                <img className="w-5 h-5" src="right-icon.png"></img>
                            </div>
                            <img className="w-5 h-5" src="FiShare2.png"></img>
                        </div>
                    </div>
                </div>

                {/* Product and company buttons */}
                <div className="flex m-5 border-2 h-10 border-green rounded-md">
                    <div 
                    className ={`flex items-center justify-center w-1/2 bg-green text-center ${
                            selectedContent === 'product' ? 'bg-green text-white' : 'bg-white text-black'
                        }`}
                    onClick ={() => handleTabClick('product')}
                    >
                        <span>PRODUCT</span>
                    </div>
                    <div 
                    onClick={() => handleTabClick('company')}
                    className = {`flex items-center justify-center w-1/2 text-center cursor-pointer ${
                        selectedContent === 'company' ? 'bg-green text-white' : 'bg-white text-black'
                    }`}>
                        <span>COMPANY</span>
                    </div>
                </div>

                <div className="w-screen h-1 bg-[#a0aec0]">
                    <div className="h-full bg-green" style={{ width: `${25}%`}}></div>
                </div>


                <div>
                    {selectedContent === 'product' && (
                        <div>
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
                        <div>
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
            </div>
        </>
        
    )
}