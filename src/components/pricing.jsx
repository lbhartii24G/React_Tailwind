import {Star, SquareCheckBig, TrendingUp, BriefcaseBusiness, MoveUpRight} from 'lucide-react'
import ctaBg from "../assets/cta_bg.png"


const pricingPlans = [
  {
    id: 1,
    title: "Starter",
    icon: Star,
    price: "$99",
    duration: "/month",
    highlighted: false,
    description: "Perfect for startups and small teams getting started with AI.",
    features: [
      "Basic visual identity",
      "Very light market research",
      "UX/UI layout for up to 1 pages",
      "Simple landing page",
      "Simple website setup",
    ],
    buttonText: "Get Started",
  },

  {
    id: 2,
    title: "Growth",
    icon: TrendingUp,
    price: "$179",
    duration: "/month",
    highlighted: true,
    description: "Everything you need to automate and grow your business.",
    features: [
      "Basic visual identity",
      "Very high market research",
      "Web Design (10 Pages)",
      "Advanced Analytics",
      "Advanced website setup",
    ],
    buttonText: "Get Started",
  },

  {
    id: 3,
    title: "Enterprise",
    icon: BriefcaseBusiness,
    price: "Custom",
    duration: "/year",
    highlighted: false,
    description: "Custom solutions for large teams and complex operations.",
    features: [
      "Full brand strategy + identity system",
      "Comprehensive market research",
      "UX/UI design for complete website",
      "Full development (Webflow or custom)",
      "Advanced motion design & animations",
      "Priority support & weekly progress reviews",
    ],
    buttonText: "Get Started",
  },
];


const Pricing = () => {
  return (
    <div className="container_wrapper mx-auto mt-25">
        <h3 className="text-white text-center text-[30px] md:text-[40px] lg:text-[61px] font-[600]">Pricing Plans</h3>
        <p className="text-white text-center">Flexible plans for every stage</p>
        <div className="py-[1px] mt-10 mb-12 md:mb-25"
              style={{
                  background: "linear-gradient(90deg, #fff0, #ffffff26 28%, #707070 30%, #ff824d 50%, #ffffff26 70%, #fff0)"
              }}> 
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"> 
            {pricingPlans.map(function(data){
                const Icon = data.icon;
                return <div key={data.id} className="border border-[#ffe5e55e] border-solid rounded-lg px-5 py-7 flex flex-col justify-around"
                    style={{
                        backgroundImage: `linear-gradient(#00000091,#00000091), url(${ctaBg})`
                    }}
                >
                    {/* Pricing head */}
                    <div className="md:grid md:grid-cols-6 items-center">
                        <div className="border-1 border-[#ff824d] rounded-full flex items-center justify-center w-[55px] h-[55px]">
                            <Icon color="#fff" className="size={40} "/>
                        </div>
                        
                        <div className="md:pl-4 md:col-span-5">
                            <h3 className="text-white text-[18px] md:text-[22px] leading-[25.6px] font-[400]">{data.title}</h3>
                            <p className="text-[#ffffffa6] text-[16px] font-[400] leading-[25.6px]">{data.description}</p>
                        </div>
                    </div>
                    
                    {/* Price*/}
                    <div className="my-6">
                        <h4 className="text-white text-[36px]">{data.price} <span className="text-[16px] text-[#ffffffa6]">{data.duration}</span></h4>
                    </div>
                    <div className="py-[1px] my-5"
                            style={{
                                background: "linear-gradient(90deg, #fff0, #ffffff26 28%, #707070 30%, #ff824d 50%, #ffffff26 70%, #fff0)"
                            }}> 
                    </div> 
                    {/* List */}
                    <ul className="text-white pl-0 [&>li]:my-3 [&>li]:text-[14px] [&>li]:font-[300]"> 
                        {
                            data.features.map(function(feature, index){ 
                                return <li key={index} className="pl-7 relative text-[#ffffffa6]" ><SquareCheckBig size={18} className="absolute left-0 " color="#fff"/>{feature}</li>
                            })
                        }       
                    </ul>
                    {/* CTA */}
                    <a href="https://www.linkedin.com/in/laxmi-bharti-wordpressdeveloper/" className="w-full text-center text-white text-[14px] md:text-[16px] tracking-widest bg-[#ff6b2ceb] px-5 md:px-6 py-3 md:py-5 mt-5 mb-5 rounded-full inline-block hover:shadow-[0_0_12px_#ff6b2ceb] transition-shadow duration-300">Get Started <MoveUpRight className="inline-block"/></a>
            
                </div>
            })}
            

        </div>
    </div>

  )
}

export default Pricing