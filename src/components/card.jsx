import React from 'react'
import {Lightbulb} from 'lucide-react'
import {Waypoints} from 'lucide-react'
import {Layers} from 'lucide-react'
import {CircleDot} from 'lucide-react'

const Card = (props) => {
    
    const Icon = props.icon
    return ( 
        <div className="authorCard border border-[#ff6b2c1f] border-solid rounded-lg backdrop-blur-sm p-6">
            <Icon size={48} color="#ff824d"/>
            <h5 className="text-white mt-6 mb-3">{props.cardtitle}</h5>
            <p className="text-white text-[14px] md:text-[16px]">{props.cardInfo}</p>
        </div> 
    )
}

export default Card