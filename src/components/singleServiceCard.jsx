import React from 'react'
import {Bot} from 'lucide-react'
import {Zap} from 'lucide-react'
import {ChartColumn} from 'lucide-react'
import {ChartNoAxesCombined} from 'lucide-react'
import { CircleCheck } from "lucide-react";

const SingleServiceCard = (props) => {
    const Icon = props.icon
    const serviceFeature = props.features
    return ( 
         
        <div className="authorCard border border-[#ffe5e55e] border-solid rounded-lg backdrop-blur-sm p-6 flex flex-col gap-y-5"> 
            <Icon color="#fff" className="border-1 border-[#ff824d] rounded-full p-3 size={40} w-[55px] h-[55px]"/>
            <h5 className="text-white text-[18px] md:text-[22px] leading-[25.6px] font-[400]">{props.serviceTitle}</h5>
            <p className="text-[#ffffffa6] text-[16px] font-[400] leading-[25.6px]">{props.serviceDescription}</p>
            <ul className="text-white pl-0 [&>li]:my-3 [&>li]:text-[14px] [&>li]:font-[300]"> 
                {
                    serviceFeature.map(function(data, index){
                        return <li key={index} className="pl-7 relative"><CircleCheck size={18} className="absolute left-0 " color="#ff824d"/>{data}</li>
                    })
                }
               </ul>
        </div> 
         
         
    )
}

export default SingleServiceCard