import SingleServiceCard from './singleServiceCard' 
import {Bot, Zap, ChartColumn, ChartNoAxesCombined, CircleCheck}  from 'lucide-react'

const services = [
  {
    id: 1,
    icon: Bot,
    title: "Website Creation",
    description: "High-performance websites built for speed",
    features: [
      "Responsive layouts",
      "Landing pages",
      "Custom visuals & layouts",
    ],
  },
  {
    id: 2,
    icon: Zap,
    title: "Website Optimization",
    description: "Fast and optimized websites for better performance",
    features: [
      "Performance tuning",
      "Speed optimization",
      "Core Web Vitals improvements",
    ],
  },
  {
    id: 3,
    icon: ChartColumn,
    title: "Analytics & Reporting",
    description: "Track and measure your website performance",
    features: [
      "Traffic reports",
      "User insights",
      "Custom dashboards",
    ],
  },
  {
    id: 4,
    icon: ChartNoAxesCombined,
    title: "Growth Strategy",
    description: "Strategies to scale your online presence",
    features: [
      "SEO improvements",
      "Conversion optimization",
      "Growth planning",
    ],
  }
]

const ServicesCards = () => {
    return (
        
         <div className="container_wrapper mx-auto">
            <h3 className="text-white text-center text-[61px] font-[600]">Creative Services</h3>
            <p className="text-white text-center">From strategy to execution, we help brands stand out and grow.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-25 mb-25">
                {
                    services.map(function(data, index){
                        return <SingleServiceCard  
                            key = {index}
                            serviceTitle={data.title} 
                            serviceDescription={data.description} 
                            icon={data.icon}
                            features={data.features}/> 
                    })
                } 
            </div>

        </div>   
    )
}

export default ServicesCards