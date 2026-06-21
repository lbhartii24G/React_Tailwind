import React from 'react'  
import {MoveUpRight} from 'lucide-react'
import ProductCard from './ProductCard' 
import card1Bg from "../assets/card1_bg.png"
import card2Bg from "../assets/card2_bg.png"
import card3Bg from "../assets/card3_bg.png"
import card4Bg from "../assets/card4_bg.png"

const freaturedcards = [
  {
    id: 1,
    title: "Branding",
    date: "June 6, 2024",
    image: card1Bg,
    href: "/branding",
  },
  {
    id: 2,
    title: "UI Design",
    date: "May 20, 2024",
    image: card2Bg,
    href: "/branding",
  },
  {
    id: 3,
    title: "Web Design",
    date: "April 10, 2024",
    image: card3Bg,
    href: "/branding",
  },
  {
    id: 4,
    title: "Development",
    date: "March 15, 2024",
    image: card4Bg,
    href: "/branding",
  },
];

const FeaturedProduct = () => {
    return (
        <div className="container_wrapper mx-auto">
            <h2 className="text-white mt-25 mb-25 mx-auto text-center text-[20px] md:text-2xl lg:text-3xl w-[90%] lg:w-5xl font-[700] uppercase leading-[35px] md:leading-[46px]">FLEETY® is a versatile creative studio specializing in Branding, Web Design & Development </h2>
            <h3 className="text-white text-center text-[30px] md:text-[40px] lg:text-[61px] font-[600]">Featured Projects</h3>
            <p className="text-white text-center">Selected work that speaks for itself</p>
            <div className="py-[1px] mt-10 mb-12 md:mb-25"
              style={{
                  background: "linear-gradient(90deg, #fff0, #ffffff26 28%, #707070 30%, #ff824d 50%, #ffffff26 70%, #fff0)"
              }}> 
          </div> 
            {/* featured cards */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:mt-25 mb-12 md:mb-25">
                {
                    freaturedcards.map(function(data, idx){
                        return <ProductCard key={idx} bgimg={data.image} title={data.title} cardLink={data.href} cardDate={data.date} />
                    })
                }
                
            </div>

        </div>  
    )
}

export default FeaturedProduct